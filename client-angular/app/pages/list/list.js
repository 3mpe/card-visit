angular
	.module('GaarajCardVisit')
	.controller('listController', function (Card, Utils, $state, Notify ) {
		var vm = this;

		function getcardList(argument) {
			Card.index().success(function (response) {
				vm.card = response.data;
			}).error(function () {
				Notify.success('Kart listesi alınamadı');
			});
		}
		getcardList();

		function addCard() {
			$state.go('app.newcard');
		}
		vm.addCard = addCard;

		function cardDelete(card_id) {
			Card.delete(card_id)
				.success(function (response) {
					Notify.success(response.message);
					getcardList();
				})
				.error(function (error) {
					Notify.success(error.message);
				});
		}
		vm.cardDelete = cardDelete;

		function cardEdit(card_id) {
			$state.go('app.editCard', { card_id : card_id });
		}
		vm.cardEdit = cardEdit;
	});

