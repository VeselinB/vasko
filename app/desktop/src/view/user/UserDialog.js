Ext.define('newApp.view.user.UserDialog', { 
    extend: 'Ext.window.Window',
    xtype: 'userDialog',

    //TODO Require used components/controller/viewModel
    requires: [
        'newApp.view.user.UserDialogController',
        'newApp.view.user.UserForm',
        'newApp.view.user.UserDialogViewModel'
    ],

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