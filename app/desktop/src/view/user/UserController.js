
const selectedUsersIdsArray = [];

// eslint-disable-next-line no-implicit-globals
function sleepFor(sleepDuration) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* Do nothing */ }
}
// eslint-disable-next-line no-implicit-globals
let retry = 3;
// eslint-disable-next-line no-implicit-globals
function retryRemoveRecordFromBackend(id) {
    retry--;
    sleepFor(500);
    Ext.Ajax.request({
        url: `http://localhost:3000/items/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },

        success: function () {

            const index = Ext.StoreMgr.lookup('usersStore').find('id', id);

            Ext.StoreManager.lookup('usersStore').removeAt(index);

        },

        failure: function () {
            if (retry !== 0) {

                retryRemoveRecordFromBackend(id, 3);

            }
        }

    });
}

Ext.define('newApp.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userscontroller',
    retryRemoveRecordFromBackend: function(id) {
        retry--;
        sleepFor(500);
        Ext.Ajax.request({
            url: `http://localhost:3000/items/${id}`,
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
    
            success: function () {
    
                const index = Ext.StoreMgr.lookup('usersStore').find('id', id);
    
                Ext.StoreManager.lookup('usersStore').removeAt(index);
    
            },
    
            failure: function () {
                if (retry !== 0) {
    
                    retryRemoveRecordFromBackend(id, 3);
    
                }
            }
    
        });
    },
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

    deleteAllSelsectedUsers: function () {
        const dialog = Ext.create({
            xtype: 'dialog',
            html: '<div style="font-size: 20px; color: red">More than one User are selected!</div> <br/>Are you sure?',
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
                        debugger
                        const tempArray = [...selectedUsersIdsArray];
                        selectedUsersIdsArray.forEach(id => {
                            const user = new Ext.create('newApp.model.User', { id });
                            return user.erase({
                                success: function () {
                                    //debugger;
                                    const index = tempArray.indexOf(id);
                                    tempArray.splice(index, 1);

                                    Ext.StoreMgr.lookup('usersStore').reload();
                                    if (tempArray.length === 0) {
                                        dialog.destroy();
                                    }

                                },
                                failure: function () {
                                    retryRemoveRecordFromBackend(id);
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
