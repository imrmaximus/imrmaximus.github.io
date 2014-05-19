CV.Story = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  society: DS.attr('string'),
  role: DS.attr('string')
});

CV.Story.FIXTURES = [
  {
    id: 1,
    startDate: new Date(2014, 2, 14),
    endDate: new Date(2014, 5, 14),
    society: "Myeggbox",
    role: "Analyste développeur Rubyon-Rails"
  },
  {
    id: 2,
    startDate: new Date(2008, 1, 2),
    endDate: new Date(2013, 3, 1),
    society: "Pctime Groupe",
    role: "Analyste développeur Java/J2EE"
  }
];