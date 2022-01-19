
const selectedUsersIdsArray = [];
Ext.define('newApp.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userscontroller',

    selectedUsersIds: function (checkcolumn, rowIndex, checked, record) {
        const id = record.id;

        if (checked) {
            selectedUsersIdsArray.push(id);

        } else {
            const index = selectedUsersIdsArray.indexOf(id);
            selectedUsersIdsArray.splice(index, 1);

        }

        if (selectedUsersIdsArray.length !== 0) {
            this.getViewModel().set('deleteAllButtonDisabled', false);
        } else {
            this.getViewModel().set('deleteAllButtonDisabled', true);
        }


    },

    deleteAllSelsectedUsers: function() {
        const dialog = Ext.create({
            xtype: 'dialog',
            html: 'Are you sure?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        dialog.destroy();
                    }
                },
                {
                    text: 'Ok',
                    cls: 'warn',

                    handler: function () {

                        selectedUsersIdsArray.forEach(id => {
                            const user = new Ext.create('newApp.model.User', { id });
                            user.erase({
                                success: function () {
                
                                    Ext.StoreMgr.lookup('usersStore').reload();
                                    dialog.destroy();
                
                                }
                            });
                        });

                    }
                }
            ]
        });
        dialog.show();
        
    },
    deleteUser: function (button) {
        const dialog = Ext.create({
            xtype: 'dialog',
            html: 'Are you sure?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        dialog.destroy();
                    }
                },
                {
                    text: 'Ok',
                    cls: 'warn',

                    handler: function () {

                        const id = button.up('gridrow').getRecord().get('id');

                        const user = new Ext.create('newApp.model.User', { id });
                        user.erase({
                            success: function () {

                                Ext.StoreMgr.lookup('usersStore').reload();
                                dialog.destroy();

                            }
                        });

                    }
                }
            ]
        });
        dialog.show();

    },


    createNewUser: function () {

        const dialog = new Ext.create('newApp.view.user.dialog.UserDialog');

        dialog.getViewModel().set('editMode', false);
        dialog.getViewModel().set('title', 'Add User');

        dialog.show();

    },

    editUserData: function (button) {

        const dialog = new Ext.create('newApp.view.user.dialog.UserDialog');

        const record = button.up('gridrow').getRecord();
        const form = dialog.down('userForm');

        dialog.getViewModel().set('editMode', true);
        dialog.getViewModel().set('title', 'Edit User');
        form.setRecord(record);
        form.setValues(record);

        dialog.show();


    },
});
