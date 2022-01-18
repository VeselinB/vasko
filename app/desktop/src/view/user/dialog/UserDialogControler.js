Ext.define('newApp.view.user.dialog.UserDialogControler', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userDialogController',

    setEditedData: function () {
        const form = this.getView().down("userForm");

        if (form.validate()) {

            const record = form.getRecord();

            form.fillRecord(record);

            record.save(
                {
                    success: function () {
                        Ext.StoreMgr.lookup("usersStore").load();
                        this.getView().close();
                    }.bind(this)
                }
            )
        }
    }
})