angular
	.module('bc-header', [])
	.controller('prmTopBarBeforeController', [function () {
	}])
	.component('prmTopBarBefore', {
		bindings: { parentCtrl: '<' },
		controller: 'prmTopBarBeforeController',
		templateUrl: `primo-explore-bc-header/html/header.html`
	})
