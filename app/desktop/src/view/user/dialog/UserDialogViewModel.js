Ext.define('newApp.view.user.dialog.UserDialogViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersdialogviewmodel', //TODO Use camel case for xtype
  
    data: {
        editMode: true,
        title: ''
    }
});