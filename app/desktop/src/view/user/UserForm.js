const emailValidator = Ext.create('Ext.data.validator.Email');

Ext.define('newApp.view.user.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userForm',

    layout: {
        type: 'vbox',
        align: 'left'
    },

   
    defaults: {
        xtype: 'textfield',
        labelAlign: 'top',
        width: 265,
        allowBlank: false,
        errorTarget: 'under',
        required: true,


    },

    items: [
        {
            name: 'name',
            label: 'Name',
        },
        {
            label: 'Email',
            name: 'email',
            validators: [emailValidator],
        },
        {
           
            label: 'Phone',
            name: 'phone',
           
            validators: function (val) {
                const regex = /^[0-9]*$/;
                const errorMessage = 'Must be a digit telephone number';

                return (val.match(regex) === null) ? errorMessage : true;
            },
        },
    ],
});