Ext.define('newApp.view.user.dialog.UserDialog', {
    extend: 'Ext.window.Window',
    xtype: 'userDialog',
    modal: true,
    title: 'Edit user',
    bind: {
        title: '{title}'
    },
    controller: 'userDialogController',
    viewModel: 'usersdialogviewmodel',

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