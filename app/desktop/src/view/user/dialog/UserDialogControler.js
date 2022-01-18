Ext.define('newApp.view.user.dialog.UserDialogControler', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userDialogController',

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
                        //  debugger;
                        Ext.StoreMgr.get('usersStore').reload();
                        Ext.StoreMgr.lookup('usersStore').load(
                            // function(records, operation, success) {
                            //     console.log('loaded records');
                            // }
                        );
                                        
                        this.getView().close();
                    }.bind(this)
                }
            );
        }
        console.log('');
    }
});