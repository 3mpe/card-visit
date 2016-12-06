angular.module('GaarajCardVisit')
	.controller('newCardController', function (Card, Notify, $state) {
		var vm = this;

		function savecard(item) {
			if (item) {
				Card.store(item).success(function (response) {
					Notify.success(response.message);
					$state.go('app.list');
				});
			} else {
				Notify.error("Lütfen bütün alanları doldurun.");
			}
		}
		vm.savecard = savecard;

		function cancel() {
			$state.go('app.list');
		}
		vm.cancel = cancel;

	});

