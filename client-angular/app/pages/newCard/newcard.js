angular.module('GaarajCardVisit')
	.controller('newCardController', function (Card, Notify, $state) {
		var vm = this;
		function savecard(item) {
			Card.store(item).success(function (response) {
				Notify.success(response.message);
				$state.go('app.list');
			});
		}
		vm.savecard = savecard;

	});

