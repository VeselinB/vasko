Ext.define('newApp.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersviewmodel',

    stores: {
        usersStore: {
            type: 'users',
          
			
        }
    },

    data: {
        deleteAllButtonDisabled: true,
        title: 'Users'
    },
	
    constructor: function() {
        this.callParent(arguments);

        console.log(this.getParent().type);
    }
 
});
