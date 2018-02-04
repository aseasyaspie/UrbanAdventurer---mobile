angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('urbanAdventurer', {
    url: '/page1',
    templateUrl: 'templates/urbanAdventurer.html',
    controller: 'urbanAdventurerCtrl'
  })

  .state('sanFrancisco', {
    url: '/page2',
    templateUrl: 'templates/sanFrancisco.html',
    controller: 'sanFranciscoCtrl'
  })

  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('timSTurbulentTrek', {
    url: '/page5',
    templateUrl: 'templates/timSTurbulentTrek.html',
    controller: 'timSTurbulentTrekCtrl'
  })

  .state('goldenGateBridge', {
    url: '/page7',
    templateUrl: 'templates/goldenGateBridge.html',
    controller: 'goldenGateBridgeCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});