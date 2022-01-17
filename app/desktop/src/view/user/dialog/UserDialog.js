Ext.define('newApp.view.user.dialog.UserDialog', {
    extend: 'Ext.window.Window',
    xtype: "userDialog",
    modal: true,
    title: "Edit user",
    controller:"userDialogController",


    maximizable: false,

    items: [
        {
            xtype: "userForm",


        }
    ],
    buttons: [
        {
            text: "Cancel",
            handler: function () {
                this.up('userDialog').destroy()
            }

        }, {


            text: 'OK',
            handler: "setEditedData"


            
        },
    ],
})