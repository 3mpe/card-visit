angular
	.module('GaarajCardVisit', ['ui.router', 'angular-toasty', 'hSweetAlert'])
	.value('Config', {
		sessionkey: 'gasess',
		userkey: 'gauser',
		api: {
			url: 'http://localhost:8080',
		}
	})

/**
 * DİRECTİVES
 */
.directive('loadingIndicator', function (Static) {
	return {
		scope: { indicator: '=' },
		restrict: 'E',
		template: '<span class="loading-indicator" data-ng-show="isShow"><i class="icon"></i><ng-transclude class="message"></ng-transclude></span>',
		transclude: true,
		replace: true,
		link: function (scope, element, attrs) {
			scope.$watch('indicator', function (newVal) {
				if (angular.isDefined(newVal)) { scope.isShow = newVal; }
			});
		}
	};
});

