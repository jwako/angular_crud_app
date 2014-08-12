var crudApp = angular.module('crudApp', [
	'crudControllers'
]);

// For X-CSRF-TOKEN
crudApp.config(
	["$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
	  }
	]
);
