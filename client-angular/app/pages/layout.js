angular.module('GaarajCardVisit').controller('LayoutController', function (Auth, $state) {
	if (!Auth.isAuthorized()) {
		$state.go('app.login');
	}
});

