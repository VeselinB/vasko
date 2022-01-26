const emailValidator = Ext.create('Ext.data.validator.Email');

Ext.define('newApp.view.user.form.UserForm', { //TODO If this is the only form for user part of the project - you can easily move it to newApp.view.user and remove the form folder
    extend: 'Ext.form.Panel',
    xtype: 'userForm',

    layout: {
        type: 'vbox',
        align: 'left'
    },

    //TODO You can use defaults here for the configs are the same for all items of the panel, and remove them from the items object:
    // defaults: {
    //      xtype: 'textfield',
    //      labelAlign: 'top',
    //      width: 265,
    //      ...
    // }

    items: [
        {
            xtype: 'textfield',
            name: 'name',
            labelAlign: 'top',
            label: 'Name',
            width: 265,
            allowBlank: false,
            errorTarget: 'under',
            required: true,
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            label: 'Email',
            name: 'email',
            labelAlign: 'top',
            width: 265,
            allowBlank: false,
            required: true,
            validators: [emailValidator],
            errorTarget: 'under',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone',
            label: 'Phone',
            name: 'phone',
            labelAlign: 'top',
            width: 265,
            allowBlank: false,
            required: true,
            errorTarget: 'under',
            validators: function (val) {
                const regex = /^[0-9]*$/;
                const errorMessage = 'Must be a digit telephone number';

                return (val.match(regex) === null) ? errorMessage : true;
            },
        },
    ],
});