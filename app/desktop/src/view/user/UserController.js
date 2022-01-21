Ext.define('newApp.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userscontroller',


    setUser: function () {

        const dialog = new Ext.create('newApp.view.user.dialog.UserDialog');

        dialog.getViewModel().set('editMode', false);
        dialog.getViewModel().set('title', 'Add User');

        dialog.show();

    },
});
