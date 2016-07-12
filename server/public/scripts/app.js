//iffe wrapper
(function(){

var app = angular.module('MyApp', ['ngRoute']);

app.controller('MainCtrl', [function(){

console.log('working');

}]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html'
        })
        .when('/movies', {
            templateUrl: './pages/movies.html'
        })
        .when('/species',{
            templateUrl: './pages/species.html'
        })
        .when('/chum',{
            templateUrl: './pages/chum.html'
        })
        .when('/404',{
            templateUrl: './pages/404.html'
        })
        .otherwise({
            redirectTo : '/404'
        });

}])


})();