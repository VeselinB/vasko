Ext.define('newApp.model.User', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'number'
        },
        {
            name: 'id',
            type: 'number'
        }
    ],

    proxy: {

        type: 'rest',
        url: 'http://localhost:3000/users',

        writer: {
            writeAllFields: true
        }

    }
});