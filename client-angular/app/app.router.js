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
			.state('app.login', {
				url: '/login',
				views: {
					wrapper: {
						templateUrl: 'pages/login/login.html',
						controller: 'loginController',
						controllerAs: 'vm'
					}
				}
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

