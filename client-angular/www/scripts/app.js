/*
 * client-angular 1.0.0
 * 
 * 
 * --Developers--
 * Emre Vatansever <vatanseveremre90@gmail.com>
 * Copyright 2016 | Released under the ISC license.
*/
angular
	.module('GaarajCardVisit', ['ui.router', 'angular-toasty', 'oitozero.ngSweetAlert'])
	.value('Config', {
		sessionkey: 'gasess',
		userkey: 'gauser',
		api: {
			url: 'http://localhost:8080',
		}
	});


angular
	.module('GaarajCardVisit')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				templateUrl: 'pages/layout.html',
				controller: 'LayoutController',
				controllerAs: 'vm'
			})
			.state('app.list', {
				url: '/',
				views: {
					wrapper: {
						templateUrl: 'pages/list/list.html',
						controller: 'listController',
						controllerAs: 'vm'
					}
				}
			})
			.state('app.newcard', {
				url: '/new',
				views: {
					wrapper: {
						templateUrl: 'pages/newCard/newcard.html',
						controller: 'newCardController',
						controllerAs: 'vm'
					}
				}
			})
			.state('app.editCard', {
				url: '/edit?card_id',
				views: {
					wrapper: {
						templateUrl: 'pages/list/edit/editcard.html',
						controller: 'editCardController',
						controllerAs: 'vm'
					}
				}
			});
		$urlRouterProvider.otherwise('/');
		$locationProvider.hashPrefix('!');
	});


angular
  .module('GaarajCardVisit')
  .factory('Api', function Api($q, $http, $rootScope, $window, $location, Config) {
    return {
      canceler: function () {
        $http.pendingRequests.forEach(function (request) {
          if (request.cancel) { request.cancel.resolve(); }
        });
      },
      get: function (query, queryparams) {
        var cancel = $q.defer();
        var request = {
          method: 'GET',
          url: Config.api.url + '/' + query,
          params: queryparams,
          timeout: cancel.promise,
          cancel: cancel
        };

        return $http(request);
      },
      post: function (query, data, queryparams) {
        var cancel = $q.defer();
        var request = {
          method: 'POST',
          url: Config.api.url + '/' + query,
          data: data,
          params: queryparams,
          timeout: cancel.promise,
          cancel: cancel
        };

        return $http(request);
      },
      put: function (query, data, queryparams) {
        var cancel = $q.defer();
        var request = {
          method: 'PUT',
          url: Config.api.url + '/' + query,
          data: data,
          params: queryparams,
          timeout: cancel.promise,
          cancel: cancel
        };

        return $http(request);
      },
      delete: function (query, data, queryparams) {
        var cancel = $q.defer();
        var request = {
          method: 'DELETE',
          url: Config.api.url + '/' + query,
          data: data,
          params: queryparams,
          timeout: cancel.promise,
          cancel: cancel
        };

        return $http(request);
      }
    };
  });


angular.module('GaarajCardVisit').service('Card', function (Api) {
	return {
		index: function () {
			return Api.get('card');
		},
		store: function (params) {
			return Api.post('card', params);
		},
		show: function (card_id) {
			return Api.get('card/' + card_id);
		},
		update: function (card_id, params) {
			return Api.put('card/' + card_id, params);
		},
		delete: function (card_id) {
			return Api.delete('card/' + card_id);
		}
	};
});


angular
  .module('GaarajCardVisit')
  .service('Notify', function(SweetAlert, toasty) {
    return {
      success: function($message, $title) {
        var title = $title ? $title : 'Tebrikler!';
        toasty.success({ title: title, msg: $message, html: true });
      },
      error: function($message, $title) {
        var title = $title ? $title : 'Üzgünüz!';
        toasty.error({ title: title, msg: $message, html: true });
      },
      info: function($message, $title) {
        var title = $title ? $title : 'Bilgi!';
        toasty.info({ title: title, msg: $message, html: true });
      },
      warning: function($message, $title) {
        var title = $title ? $title : 'Dikkat!';
        toasty.warning({ title: title, msg: $message, html: true });
      },
      confirm: function($success, $error, $params) {
        var params = {
          title: "Emin misiniz?",
          text: "Bu kayıt silinecek!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Evet, Devam et!",
          cancelButtonText: 'Hayır, Devam etme!',
          closeOnConfirm: true,
          closeOnCancel: true
        };
        params = angular.extend(params, $params);
        SweetAlert.swal(params, function(isConfirm) {
          if (isConfirm) {
            if (typeof $success == 'function') {
              $success(isConfirm);
            }
          } else {
            if (typeof $error == 'function') {
              $error(isConfirm);
            }
          }
        });
      }
    };
  });

angular.module('GaarajCardVisit').service('Utils', function () {
	return {

		error: function () {
			if (!$error) {
				return;
			}
			var title = $error.error_message || 'Bilinmeyen hata!';
			var message = ['<ul class="list-unstyled">'];
			if ($error.errors) {
				if (Object.keys($error.errors).length > 0) {
					for (var $input in $error.errors) {
						for (var i = 0; i < $error.errors[$input].length; i++) {
							message.push('<li><i class="fa fa-caret-right"></i> ' + $error.errors[$input][i] + '</li>');
						}
					}
				}
			}
			message.push('</ul>');
			message = message.join('');

			$Notification.error(message, title);
		}
	};
});


angular.module('GaarajCardVisit').controller('LayoutController', function () {

});


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


angular.module('GaarajCardVisit')
	.controller('editCardController', function (Card, Notify, $state) {
		var vm = this;
		vm.cardForm = {};
		var params = $state.params;
		var State = $state;


		function getDetail() {
			Card.show(params.card_id).success(function (response) {
				vm.cardForm = response[0];
			}).error(function (error) {
				Notify.error(error.message);
			});
		}
		getDetail();

		function updateCard($state) {
			Card.update(params.card_id, vm.cardForm)
				.success(function (response) {
					Notify.success(response.message);
					State.go('app.list');
				}).error(function (error) {
					Notify.error(error.message);
				});
		}
		vm.updateCard = updateCard;
	});

