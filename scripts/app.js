var app = angular.module('app', []);

app.directive('carousel', function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/directiveTemplates/carousel.html'
    }
});

app.directive('carouselchatter', function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/directiveTemplates/carousel_chatter.html'
    }
});

app.directive('shoppingBanner', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directiveTemplates/shopping_banner.html'
    }
});

app.directive('mensItem', function(){
    return {
        scope: {
            picture: '@'
        },
        restrict: 'E',
        templateUrl: 'templates/directiveTemplates/mensItem.html' 
    }
});

app.controller('MainController', ['$scope', function($scope){
    $scope.loadScripts = function(){
        var mobile_menu = $('.mobile_menu_icon'),
            hidden_menu = $('.hidden_menu');

        mobile_menu.click(function(){
            hidden_menu.toggleClass('show');
        });

        setInterval(function(){
            if ($(window).width() > 960){
                hidden_menu.removeClass('show');
            }
        }, 100);
    };
}]);