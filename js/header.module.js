angular
	.module('bc-header', [])
	.controller('prmTopBarAfterController', [function () {
		var vm = this;
		vm.getIconLink = getIconLink;
		function getIconLink() {
			return vm.parentCtrl.iconLink;
		}
	}])

	.component('prmTopBarAfter',{
		bindings: {parentCtrl: '<'},
		controller: 'prmTopBarAfterController',
		templateUrl: `primo-explore-bc-header/html/header.html`
	});

