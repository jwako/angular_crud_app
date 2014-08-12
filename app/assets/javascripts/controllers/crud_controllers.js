var crudControllers = angular.module('crudControllers', ['ui.bootstrap']);

crudControllers.controller('ItemCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
	  $scope.errors = [];

    $scope.Create = function() {
      $http.post('/items.json', {
      	'name': $scope.name,
      	'description': $scope.description,
      	'price': $scope.price
      }).success(function(data, status, headers, config) {
      	if (data.location) {
     			$window.location.href = data.location;
     		}
      }).error(function(data, status) {
        $scope.errors = data;
      });
    }
	}
]);
