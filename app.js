let app = angular.module('countdownApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/templates/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/templates/about.html'
        })
        .state('countdown', {
            url: '/:name/:date',
            templateUrl: '/templates/countdown.html'
        })

    $urlRouterProvider.when('home', '/').otherwise('/')
})

app.controller('countdownCtrl', function($scope, $stateParams) {
    $scope.name = $stateParams.name;
    $scope.date = $stateParams.date;

    let now = new Date();
    let countdown_date = new Date($scope.date)
    console.log(now);
    $scope.countdown_diff = countdown_date - now;
});

app.component('mainHeader', {
    templateUrl: '/templates/main-header.html'
});

app.component('mainFooter', {
    templateUrl: '/templates/main-footer.html'
});