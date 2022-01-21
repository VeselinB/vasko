const emailValidator = Ext.create('Ext.data.validator.Email');

Ext.define('newApp.view.user.form.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userForm',

    layout: {
        type: 'vbox',
        align: 'left'
    },

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