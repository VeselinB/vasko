Ext.define('newApp.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersviewmodel',

    stores: {
        usersStore: {
            type: 'users',
            //vesko
			
        }
    },

    data: {
        deleteAllButtonDisabled: true,
        title: 'Users'
    }
});
