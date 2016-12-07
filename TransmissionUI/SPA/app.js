var app = angular.module('app', ['ngRoute','ngGrid']);
 


app.config(function ($routeProvider) {
    $routeProvider


        // route for the about page
        .when('/Client', {
            templateUrl: 'SPA/Views/Client.html',
            controller: 'ClientCtrl'
        })
        .when('/About', {
            templateUrl: 'SPA/Views/About.html'
           
        });
});







//app.config(
//    function ($routeProvider) {
//        $routeProvider.
//            when('/Reports', {
//                templateUrl: '/SPA/Views/Client.html',
//                controller: 'ClientController'
//            }).
//            when('/Home', {
//                templateUrl: 'SPA/Views/Home.html',
//                controller: 'HomeController'

//            }).
//            when('/About', {
//                templateUrl: '/SPA/Views/About.html',
//                controller: 'AboutController',
//            }).
//        otherwise({
//            redirectTo: '/Home'
//        });

//    });


//}]);







//var App = angular.module('App', ['ngRoute', 'ui.bootstrap', 'chart.js']);

//App.controller('MainController', MainController);
//App.controller('GridController', GridController);
//App.controller('ViewProductController', ViewProductController);

//var configFunction = function ($routeProvider, $httpProvider) {
//    $routeProvider.
//        when('/grid', {
//            templateUrl: 'SPA/Views/Grid.html',
//            controller: GridController
//        })
//       .otherwise({
//           redirectTo: function () {
//               return '/grid';
//           }
//       });
//}
//configFunction.$inject = ['$routeProvider', '$httpProvider'];

//App.config(configFunction);