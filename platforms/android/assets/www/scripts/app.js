'use strict';

angular
  .module('SahuSoft', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    

    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'views/dashBoard.html',
        controller: 'DashCtrl'
        
      })
      .when('/contactDetails',{
        templateUrl: 'views/contactDetails.html',
        controller: 'DashCtrl'
        
      })
      .otherwise({
        redirectTo: '/'
      });

  })

