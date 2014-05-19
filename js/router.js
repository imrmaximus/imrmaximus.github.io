
CV.Router.map(function() {
  this.resource('cv', {path: '/'});
});

CV.CvRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('story');
  }
});

/*
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
*/