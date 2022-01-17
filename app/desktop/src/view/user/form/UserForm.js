
let emailValidator = Ext.create('Ext.data.validator.Email');

Ext.define('newApp.view.user.form.UserForm',{
    extend: "Ext.form.Panel",
    xtype:"userForm",
    reference:"userform", //TODO Should ne asked
    layout: {
        type: 'vbox',
        align: 'left'
    },
    items: [
        {
            // bind: {
            //     value: '{form.name}',
             
            // },
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            labelAlign: 'top',
            label: 'Name',
            width: 265,
            allowBlank: false,
           
            required: true,
            placeholder: 'Please Enter Something'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            label: 'Email',
            name: 'email',
            labelAlign: 'top',
            width: 265,
            allowBlank: false,
            // bind: {
            //     value: '{form.email}'
            // },
            required: true,
          validators: [emailValidator],


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
            // bind: {
            //     value: '!{form.phone}' ? '{form.phone}' : null
            // },

        },
      
       
    ],

})