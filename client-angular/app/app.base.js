angular
	.module('GaarajCardVisit', ['ui.router', 'angular-toasty', 'oitozero.ngSweetAlert'])
	.value('Config', {
		sessionkey: 'gasess',
		userkey: 'gauser',
		api: {
			url: 'http://localhost:8080',
		}
	});

