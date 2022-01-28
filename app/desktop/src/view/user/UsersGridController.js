let selectedUsersIdsArray = [];

Ext.define('newApp.view.user.grid.UsersGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersGridController',
    requires: [
        'newApp.view.user.UserDialog'
    ],
    selectedUsersIds: function () {

        selectedUsersIdsArray = this.getView().getSelections().reduce((acc, curVal) => [...acc, curVal.id], []);

        if (selectedUsersIdsArray.length !== 0) {
            this.getViewModel().set('deleteAllButtonDisabled', false);
        } else {
            this.getViewModel().set('deleteAllButtonDisabled', true);
        }


    },

    deleteAllSelectedUsers: function () {
        // debugger;
        selectedUsersIdsArray = this.getView().getSelections().reduce((acc, curVal) => [...acc, curVal.id], []);
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

                        const vm = Ext.getCmp('usersGridId').getViewModel();
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
                            .then(() => {

                                selectedUsersIdsArray.length = 0;
                                vm.set('deleteAllButtonDisabled', true);
                                dialog.destroy();
                            })
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

        const dialog = Ext.create({
            xtype: 'userWarnDialog',
            userSelectedId: button.up('gridrow').getRecord().get('id')

        });

        dialog.show();
    },

    saveUser: function (button) {

        const dialog = new Ext.create('newApp.view.user.UserDialog');
        const record = button.up('gridrow').getRecord();
        const form = dialog.down('userForm');

        dialog.getViewModel().set('editMode', true);
        dialog.getViewModel().set('title', 'Edit User');

        form.setRecord(record);
        form.setValues(record);

        dialog.show();
    },
});
