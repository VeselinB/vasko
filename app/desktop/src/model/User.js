Ext.define('newApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name', type: 'string' }, 'email', 'phone', 'id'
    ],
    proxy: {
        type: 'rest',
        // type: 'ajax',
        url: "http://localhost:3000/users",
        // extraParams: { 'providedFieldsOnly': true },
        writer: {
            writeAllFields: false // use extra param providedFieldsOnly=true when making put request
        }

    },
});