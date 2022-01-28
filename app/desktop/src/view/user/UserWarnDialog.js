Ext.define('newApp.view.user.UserWarnDialog', {
    extend: 'Ext.window.Window',
    xtype: 'userWarnDialog',
   
    controller: 'userWarnDialogController',
    requires: [
        'newApp.view.user.WarnDialogController'
    ],
    modal: true,
    html: '<div id="mesageOneUser">Are you sure?</div>',
    buttons: [
        {
            text: 'Cancel',
            handler: function () {

                this.up('userWarnDialog').destroy();
            }
        },
        {
            text: 'Ok',
            cls: 'warn',
            handler: 'removeUser'
            // handler: function () {

            //     const id = this.up('userWarnDialog').userSelectedId;
            //     const user = new Ext.create('newApp.model.User', { id });
            //     const that = this;
            //     // debugger
            //     user.erase({
            //         success: function () {
            //             //debugger
            //             Ext.getCmp('usersGridId').getStore().reload();

            //             that.up('userWarnDialog').destroy();

            //         },
            //         failure: function () {

            //             Ext.get('mesageOneUser').update('<div  style="font-size: 20px; color: red">This User was not been removed!!!</div></br>Choose Ok to Retry or Cancel to close dialog');

            //         }
            //     });

            // }
        }
    ]
});