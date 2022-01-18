Ext.define('newApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'newApp.model.User',
  

    storeId: 'usersStore',

    proxy: {
        type: 'rest',
        // type: 'ajax',
        url: 'http://localhost:3000/items',
        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'totalCount'
        
        }
    },
    pageSize: 5,
    autoLoad: true,


});
