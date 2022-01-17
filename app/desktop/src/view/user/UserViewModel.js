Ext.define('newApp.view.user.UserViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.usersviewmodel',

	stores: {
		usersStore: {
			type: 'users',
			listeners: {
				load: function (store, data, success, something) {
				//	store.totalCount = something._response.getAllResponseHeaders()["x-total-count"];
					Ext.fireEvent('refreshtoolbar');
				}
			}
		}
	},

	data: {
		form:{}, // TODO Check and remove
		title:"Users"
	}
});
