Ext.define('newApp.view.user.WarnDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userWarnDialogController',

    removeUser: function () {

        const id = this.getView().userSelectedId;
        const user = new Ext.create('newApp.model.User', { id });
        const dialog = this.getView();
    
        user.erase({
            success: function () {
             
                Ext.getCmp('usersGridId').getStore().reload();
                dialog.destroy();

            },
            failure: function () {

                Ext.get('mesageOneUser').update('<div  style="font-size: 20px; color: red">This User was not been removed!!!</div></br>Choose Ok to Retry or Cancel to close dialog');

            }
        });
    }
});