Ext.define('newApp.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersviewmodel', //TODO use camel case for xtype

    stores: {
        usersStore: {
            type: 'users',
        }
    },

    data: {
        deleteAllButtonDisabled: true,
        title: 'Users' //TODO If we only use this in the header, a better approach is to hardcode it there :)
    },
});
