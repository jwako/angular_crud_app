var crudControllers = angular.module('crudControllers', ['ui.bootstrap']);

crudControllers.controller('ItemsCtrl', ['$scope', '$http', '$window', '$modal', function ($scope, $http, $window, $modal) {
    $http.get('/items/list').success(function(data) {
      $scope.items = data;
    });

    $scope.OpenModal = function(item) {
      $http.get('/items/' + item.id + '/detail.json').success(function(data) {
        $scope.item = data;
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ItemEditCtrl,
          resolve: {
            item: function () {
              return $scope.item;
            }
          }
        });
      }).error(function(data, status) {
        console.log('error:' + status);
      });
    }

    $scope.Delete = function(item){
      $http.delete('/items/' + item.id
      ).success(function(data, status, headers, config) {
        if (data.location) {
          $window.location.href = data.location;
        }
      });
    }

}]);

crudControllers.controller('ItemNewCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
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
}]);

var ItemEditCtrl = function($scope, $http, $window, $modalInstance, item) {
  $scope.item = item;

  $scope.Update = function(){
    $http.put('/items/' + $scope.item.id, {
      'name': $scope.item.name,
      'description': $scope.item.description,
      'price': $scope.item.price
    }).success(function(data, status, headers, config) {
      if (data.location) {
        $window.location.href = data.location;
      }
    }).error(function(data, status) {
      $scope.errors = data;
    });
  }
}


