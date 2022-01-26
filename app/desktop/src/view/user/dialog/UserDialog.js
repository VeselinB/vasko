Ext.define('newApp.view.user.dialog.UserDialog', { //TODO Since this is the only dialog for the user part, you can easily move it to the newApp.view.user and remove the dialog folder
    extend: 'Ext.window.Window',
    xtype: 'userDialog',

    //TODO Require used components/controller/viewModel

    modal: true,
   
    bind: {
        title: '{title}'
    },

    controller: 'userDialogController',
    viewModel: 'usersDialogViewmodel', 
    maximizable: false,

    items: [
        {
            xtype: 'userForm',
        }
    ],
    buttons: [
        {
            text: 'Cancel',
            handler: function () {
                this.up('userDialog').destroy();
            }
        },
        {
            text: 'SAVE',
            handler: 'setEditedData',
            bind:
            {
                hidden: '{!editMode}'
            }
        },
        {
            text: 'ADD',
            handler: 'saveUser',
            bind:
            {
                hidden: '{editMode}'
            }
        }
    ]
});