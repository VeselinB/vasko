Ext.define('newApp.view.user.dialog.UserDialogControler', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userDialogController',

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
    setEditedData: function () {
        const form = this.getView().down('userForm');

        if (form.validate()) {

            const record = form.getRecord();

            form.fillRecord(record);

            record.save(
                {
                    success: function () {
                        Ext.StoreMgr.lookup('usersStore').load();
                        this.getView().close();
                    }.bind(this)
                }
            );
        }
    },

    saveUser: function () {
        const form = this.getView().down('userForm');

        if (form.validate()) {

            const user = new Ext.create('newApp.model.User', {
                ...form.getValues()
            });
            delete user.id;
            delete user.data.id;
            user.save(
                {
                    success: function () {

                       
                        Ext.StoreMgr.lookup('usersStore').load();

                        this.getView().close();
                    }.bind(this)
                }
            );
        }
      
    }

});