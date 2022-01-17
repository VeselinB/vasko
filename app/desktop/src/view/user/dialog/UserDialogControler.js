Ext.define('newApp.view.user.dialog.UserDialogControler', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userDialogController',
    setEditedData: function () {
        // console.log(  this.up('dialog').down('userForm'))
        //TODO Uncaught TypeError: cyclic object value
       const form = this.getView().down("userForm")
        if (form.validate()) {
            // let id = this.up('userDialog').getViewModel().get('selectedUserId') //TODO wrong id, need to be fixed
    
            // debugger;
            // let user = new Ext.create("newApp.model.User", { id })
            const record = form.getRecord()
            form.fillRecord(record);
            // user.set("name", form.getValues().name)
            // user.set("phone", form.getValues().phone)
            // user.set("email", form.getValues().email)
            record.save(
                {
                    success: function () {
                        debugger;
                         Ext.StoreMgr.lookup("usersStore").load()
         
                        this.getView().close()
                    }.bind(this)
                }
            )
        }
    }
})