const selectedUsersIdsArray = [];

Ext.define('newApp.view.user.grid.UsersGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersgrdicontroller',

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

    deleteAllSelectedUsers: function () { 
        const dialog = Ext.create({
            xtype: 'dialog',
            html: '<div id="messageAllSelectedDialogUsers"><div  style="font-size: 20px; color: red">More than one User are selected!</div> <br/>Are you sure?</div>',
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
                        const promises = [];

                        selectedUsersIdsArray.forEach(id => {
                            const user = new Ext.create('newApp.model.User', { id });
                            const promise = new Ext.Promise(function (resolve, reject) {
                                user.erase({
                                    callback: function (records, operation, success) {

                                        if (success) {
                                            Ext.StoreMgr.lookup('usersStore').reload();
                                            resolve(records);
                                        } else {
                                            reject(new Error(id));
                                        }

                                    }
                                });
                            });
                            promises.push(promise);
                        });

                        Promise.all(promises)
                            .then(() => dialog.destroy())
                            .catch(() => {
                                Ext.get('messageAllSelectedDialogUsers').update('<div  style="font-size: 20px; color: red">Some or all selected users were not been removed!!!</div></br>Choose Ok to Retry or Cancel to close dialog');
                            });
                    }
                }
            ]
        });

        dialog.show();
    },

    deleteUser: function (button) {
    //TODO Refactor this - way complex structure: You are creating a dialog within a Grid and inside it you are creating a buttons with handlers
        const dialog = Ext.create({
            xtype: 'dialog',
            html: '<div id="mesageOneUser">Are you sure?</div>',
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

                            },
                            failure: function () {

                                Ext.get('mesageOneUser').update('<div  style="font-size: 20px; color: red">This User was not been removed!!!</div></br>Choose Ok to Retry or Cancel to close dialog');

                            }
                        });

                    }
                }
            ]
        });

        dialog.show();
    },

    saveUser: function (button) {

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
