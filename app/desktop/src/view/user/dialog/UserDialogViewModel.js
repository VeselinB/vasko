Ext.define('newApp.view.user.dialog.UserDialogViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersdialogviewmodel',

    stores: {
        usersStore: {
            type: 'users',
			
        }
    },

    data: {
        editMode: true,
        title: ''
    }
});