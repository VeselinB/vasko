Ext.define('newApp.view.user.UserDialogViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersDialogViewmodel',
    requires: [
        'newApp.store.Users'
    ],
    data: {
        editMode: true,
        title: 'Edit user'
    }
});