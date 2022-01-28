Ext.define('newApp.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersViewModel', 

    stores: {
        usersStore: {
            type: 'users',
        }
    },

    data: {

        deleteAllButtonDisabled: true,
   
      
    },
});
