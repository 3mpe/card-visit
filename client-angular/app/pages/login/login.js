angular.module('GaarajCardVisit')
	.controller('loginController', function (Auth, Storage, Notify, $state) {
		var vm = this;
		
		if (Auth.isAuthorized()) {
			$state.go('app.list');
		}

		function signin(data) {
			Auth.signin(data)
				.success(function (response) {
					Storage.name('user').set(response.user.islogin);
					$state.go('app.list');
				})
				.error(function () {
					Notify.error(error.message);
				});
		}
		vm.signin = signin;
	});

