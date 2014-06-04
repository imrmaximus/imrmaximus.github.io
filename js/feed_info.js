$(document).ready(function() {

    $.getJSON("/data/cv-contacts-title.json", function(cv) {
        $("#titleCV").text(cv.title);
        feed_contacts(cv.contacts);
    });

    $.getJSON("/data/cv-technicals.json", function(cv) {
        feed_technicals(cv.technicals);
    });

    $.getJSON("/data/cv-professionnal_history.json", function(cv) {
        feed_professionnal_history(cv.professionnal_history);
    });

    $.getJSON("/data/cv-trainings.json", function(cv) {
        feed_trainings(cv.training);
    });

    $.getJSON("/data/cv-languages.json", function(cv) {
        feed_languages(cv.languages);
    });

    $.getJSON("/data/cv-interests.json", function(cv) {
        feed_interests(cv.interests);
    });
});

function feed_contacts(contacts) {
    $("#contacts #name").text(contacts.lastname + ' ' + contacts.firstname);
    
    if ($.isArray(contacts.address_line)) {
        $("#contacts #address_line").text(contacts.address_line[0]);
        $.each(contacts.address_line.slice(1), function(index, value) {
            $("#contacts #address_line").append('<br/>'+ value);
        });
    } else {
        $("#contacts #address_line").text(contacts.address_line);
    }
    
    $("#contacts #zipcode_city").text(contacts.zipcode + ' ' + contacts.city);
    $("#contacts #phone").text(contacts.phone);
    
    if ($.isArray(contacts.email)) {
        $("#contacts #email").html('<a href="mailto:'+contacts.email[0]+'">' + contacts.email[0] + '</a>');
        $.each(contacts.email.slice(1), function(index, value) {
            $("#contacts #email").append('<br/>' + '<a href="mailto:'+value+'">' + value + '</a>');
        });
    } else {
        $("#contacts #email").text('<a href="mailto:'+contacts.email+'">' + contacts.email + '</a>');
    }
    
    $("#contacts #various").text(contacts.various[0]);
    $.each(contacts.various.slice(1), function(index, value) {
        $("#contacts #various").append('<br/>'+ value);
    });
    
    var birthDate = new Date(contacts.birth.date);
    $("#contacts #birth").text("Né le " + birthDate.toLocaleDateString());
    $("#contacts #birth").append("<br/>Nationalité : " + contacts.birth.nationality);
    
    var prepareEmailGravatar = $.trim(contacts.gravatar.toLowerCase());
    var gravatar = $.md5(prepareEmailGravatar);
    $(".photo").html("<img src='http://www.gravatar.com/avatar/"+gravatar+".jpg?s=225' class='round center-block'/>");
}

function feed_technicals(technicals) {
    if ($.isArray(technicals)) {
        feed_technicals_category(technicals[0]);
        $.each(technicals.slice(1), function(index, value) {
            feed_technicals_category(value);
        });
    } else {
        feed_technicals_category(technicals);
    }
}

function feed_technicals_category(oneTechnic) {
    var newLine = "";
    newLine += "<div class='row'>\r";
    newLine += "<div class='col-xs-4 type'>" + oneTechnic.type + " :</div>\r";
    newLine += "<div class='col-xs-8 contenu'>" + oneTechnic.details + "</div>\r";
    newLine += "</div>";
    
    $("#technicals .details").append(newLine);
}

function feed_professionnal_history(stories) {
    if ($.isArray(stories)) {
        feed_professionnal_story(stories[0]);
        $.each(stories.slice(1), function(index, value) {
            $("#professional-history .details").append("<hr/>");
            feed_professionnal_story(value);
        });
    } else {
        feed_professionnal_story(stories);
    }
}

function feed_professionnal_story(story) {
    var storyLine = "";
    
    storyLine += "<div class='row'>\r";
    
    // Office and duration
    var start_Date = new Date(story.role[0].startDate);
    var end_Date = new Date(story.role[story.role.length-1].endDate);
    // - Screen version
    storyLine += "<div class='row hidden-print'>\r";
    storyLine += "<div class='col-sm-3 right hidden-xs'>\r";
    storyLine += "<strong>Du " + start_Date.toLocaleDateString() + "<br/>au " + end_Date.toLocaleDateString() + "</strong>\r";
    storyLine += "</div>\r";
    storyLine += "<div class='col-xs-offset-1 col-sm-3 visible-xs'>\r";
    storyLine += "<strong>Du " + start_Date.toLocaleDateString() + " au " + end_Date.toLocaleDateString() + "</strong>\r";
    storyLine += "</div>\r";
    storyLine += "<div class='col-xs-1 right hidden-xs'>Société</div>\r";
    storyLine += "<div class='col-xs-offset-1 col-xs-3 right visible-xs'>Société</div>\r";
    storyLine += "<div class='col-xs-6 hidden-xs'><strong>" + story.society + "</strong></div>\r";
    storyLine += "<div class='col-xs-6 visible-xs'><strong>" + story.society + "</strong></div>\r";
    storyLine += "</div>\r";
    // - Print version
    storyLine += "<div class='row visible-print'>\r";
    storyLine += "<div class='col-xs-offset-1 col-md-12'>\r";
    storyLine += "<strong>Du " + start_Date.toLocaleDateString() + " au " + end_Date.toLocaleDateString() + ' - ' +  story.society + "</strong>\r";
    storyLine += "</div>\r";
    storyLine += "</div>\r";
    
    // The Missions :
    $.each(story.role, function(index, aRole) {
        // Duration of the mission
        if (story.role.length > 1) {
            storyLine += "<div class='row'>\r";
            storyLine += "<div class='col-xs-offset-3 col-xs-1 right'>Période</div>\r";
            storyLine += "<div class='col-xs-7'>\r";
            start_Date = new Date(aRole.startDate);
            end_Date = new Date(aRole.endDate);
            storyLine += "<strong>Du " + start_Date.toLocaleDateString() + " au " + end_Date.toLocaleDateString() + "</strong>\r";
            storyLine += "</div>\r";
            storyLine += "</div>\r";
        }
        
        // Poste of the mission
        storyLine += "<div class='row'>\r";
        // - Screen version
        storyLine += "<div class='col-xs-offset-2 col-xs-2 right hidden-print hidden-xs'>Poste :</div>\r";
        storyLine += "<div class='col-xs-offset-1 col-xs-3 right hidden-print visible-xs'>Poste :</div>\r";
        storyLine += "<div class='col-xs-7 hidden-print'><strong>" + aRole.role + "</strong></div>\r";
        // - Print version
        storyLine += "<div class='col-xs-2 right visible-print'>Poste :</div>\r";
        storyLine += "<div class='col-xs-10 visible-print'><strong>" + aRole.role + "</strong></div>\r";
        storyLine += "</div>\r";        
        
        // The Missions
        storyLine += "<div class='row'>\r";
        // - Screen version
        storyLine += "<div class='col-xs-offset-4 col-xs-8 contenu hidden-print'>\r";
        storyLine += "<ul>\r";
        $.each(aRole.missions, function(index, mission) {
            if (typeof mission === 'string') {
                storyLine += "<li>" + mission + "</li>\r";
            } else {
                storyLine += "<li>" + mission.title + "\r";
                storyLine += "<ul>\r";
                
                $.each(mission.submissions, function(index, submission) {
                    storyLine += "<li>" + submission + "</li>\r";
                });
                
                storyLine += "</ul>\r";
            }
        });
        
        storyLine += "</ul>\r";
        storyLine += "</div>\r";
        // - Print version
        storyLine += "<div class='col-xs-offset-3 col-xs-11 contenu visible-print'>\r";
        storyLine += "<ul>\r";
        $.each(aRole.missions, function(index, mission) {
            if (typeof mission === 'string') {
                storyLine += "<li>" + mission + "</li>\r";
            } else {
                storyLine += "<li>" + mission.title + "\r";
                storyLine += "<ul>\r";
                
                $.each(mission.submissions, function(index, submission) {
                    storyLine += "<li>" + submission + "</li>\r";
                });
                
                storyLine += "</ul>\r";
            }
        });
        
        storyLine += "</ul>\r";
        storyLine += "</div>\r";
        storyLine += "</div>\r";
        
        // The Technologies
        storyLine += "<div class='row'>\r";
        // - Screen version
        storyLine += "<div class='col-xs-offset-2 col-xs-2 right hidden-print hidden-xs'>Techno :</div>\r";
        storyLine += "<div class='col-xs-offset-1 col-xs-3 right hidden-print visible-xs'>Techno :</div>\r";
        storyLine += "<div class='col-xs-7 hidden-print'><strong>" + aRole.technologies + "</strong></div>\r";
        // - Print version
        storyLine += "<div class='col-xs-2 right visible-print'>Techno :</div>\r";
        storyLine += "<div class='col-xs-10 visible-print'><strong>" + aRole.technologies + "</strong></div>\r";
        storyLine += "</div>\r";
        
    });
    
    $("#professional-history .details").append(storyLine);
}

function feed_trainings(trainings) {
    if ($.isArray(trainings)) {
        feed_training(trainings[0]);
        $.each(trainings.slice(1), function(index, value) {
            feed_training(value);
        });
    } else {
        feed_training(trainings);
    }
}

function feed_training(aTraining) {
    var trainingLine = "";
    
    trainingLine += "<div class='row'>\r";
    
    trainingLine += "<div class='col-xs-offset-1 col-xs-3 right'>" + aTraining.dateInString + "</div>\r";
    trainingLine += "<div class='col-xs-8'>\r";
    
    if ($.isArray(aTraining.contents)) {
        trainingLine += aTraining.location;
        trainingLine += "<ul>\r";
        $.each(aTraining.contents, function(index, content) {
            trainingLine += "<li>" + content + "</li>\r";
        });
        trainingLine += "</ul>\r";
    } else {
        trainingLine += aTraining.contents + " - " + aTraining.location;
    }
    
    trainingLine += "</div>";
    
    trainingLine += "</div>\r";
    
    $("#training .details").append(trainingLine);
}

function feed_languages(languages) {
    var languagesLine = "";
    
    $.each(languages, function(index, value) {
       languagesLine += "<div class='row'>\r";
       languagesLine += "<div class='col-xs-offset-1 col-xs-4 right visible-xs'>" + value.language + " :</div>\r";
       languagesLine += "<div class='col-xs-offset-1 col-xs-3 right hidden-xs'>" + value.language + " :</div>\r";
       languagesLine += "<div class='col-xs-7'>" + value.level + "</div>\r";
       languagesLine += "</div>";
    });

    $("#langages .details").append(languagesLine);
}

function feed_interests(interests) {
    var interestsLine = "";
    
    $.each(interests, function(index, value) {
        interestsLine += "<div class='row'>";
        interestsLine += "<div class='col-xs-offset-1 col-xs-12 left'>" + value + "</div>";
        interestsLine += "</div>";
    });

    $("#interests .details").append(interestsLine);
}