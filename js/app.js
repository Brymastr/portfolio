App = Ember.Application.create();

App.Router.map(function() {
    this.resource('home');
    this.resource('projects');
    this.resource('resume');
    this.resource('contact');
});
    
App.ApplicationView = Em.View.extend({
    classNames: ['full-height']
});