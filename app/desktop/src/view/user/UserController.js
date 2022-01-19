
Ext.define('newApp.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userscontroller',

    listen: {
        global: {
            refreshtoolbar: 'refreshToolbar'
        }
    },

    refreshToolbar: function () {
        // debugger;
    },


    createNewUser: function () {
        //const form = new Ext.create('newApp.view.user.form.UserForm');
        const dialog = new Ext.create('newApp.view.user.dialog.UserDialog');
        // const dialog = Ext.create({
        //     viewModel: 'usersviewmodel',
        //     xtype: 'dialog',
        //     title: 'New user',

        //     maximizable: false,

        //     items: [
        //         form
        //     ],

        //     buttons: [
        //         {
        //             text: 'Cancel',
        //             handler: function () {
        //                 dialog.destroy();
        //             }

        //         }, {
        //             id: 'btnid',
        //             text: 'OK',
        //             handler: function () {
        //                 if (form.validate()) {
                          
        //                     const user = new Ext.create('newApp.model.User', {
        //                         ...form.getValues()
        //                     });
        //                     delete user.id;
        //                     delete user.data.id;
        //                     user.save(
        //                         {
        //                             success: function () {
        //                                 //  debugger;
        //                                 Ext.StoreMgr.lookup('usersStore').load(
        //                                     // function(records, operation, success) {
        //                                     //     console.log('loaded records');
        //                                     // }
        //                                 );
                                    
        //                                 dialog.close();
        //                             }
        //                         }
        //                     );
        //                 }
                    

        //             }
        //         }
        //     ]


        // });
        
      
        dialog.getViewModel().set('editMode', false);
        dialog.getViewModel().set('title', 'Add User');

        dialog.show();

    },
    
    editUserData: function (button) {
        // debugger;
        // let form = new Ext.create('newApp.view.user.form.UserForm');
        const dialog = new Ext.create('newApp.view.user.dialog.UserDialog');
        //     let dialog = Ext.create({
        //         viewModel: "usersviewmodel",
        //         xtype: 'dialog',
        //         title: "Edit user",

        //         maximizable: false,

        //         items: [
        //             {
        //                 xtype: "userForm",
                 
                  
        //             }
        //         ],

        //         buttons: [
        //             {
        //                 text: "Cancel",
        //                 handler: function () {
        //                     dialog.destroy()
        //                 }

        //             }, {


        //                 text: 'OK',
        //                 handler: function () {
        //    // console.log(  this.up('dialog').down('userForm'))
                       
        //                     if (this.up('dialog').down('userForm').validate()) {
        //                         let id = button.up('gridrow').getRecord().get('id');

        //                         let user = new Ext.create("newApp.model.User", { id })
        //                         user.set("name", form.getValues().name)
        //                         user.set("phone", form.getValues().phone)
        //                         user.set("email", form.getValues().email)
        //                         user.save(
        //                             {
        //                                 success: function () {
        //                                     Ext.StoreMgr.lookup("usersStore").load()
        //                                     dialog.destroy()
        //                                 }
        //                             }
        //                         )
        //                     }


        //                 }
        //             },
        //         ],


        //     });

        //     // console.log(  this.lookupReference("userform").loadRecord(button.up('gridrow').getRecord()))
        //     //    form.loadRecord( button.up('gridrow').getRecord())
        // dialog.getViewModel().set('form', button.up('gridrow').getRecord());
        // debugger;
        const record = button.up('gridrow').getRecord();
        const form = dialog.down('userForm');
       
        dialog.getViewModel().set('editMode', true);
        dialog.getViewModel().set('title', 'Edit User');
        form.setRecord(record);
        form.setValues(record);
        // dialog.getViewModel().set('selectedUserId', button.up('gridrow').getRecord());
        dialog.show();


    },
});
