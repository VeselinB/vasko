Ext.define('newApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',

    fields: [
        'name',
        'email',
        'phone'
    ],

    storeId: 'usersStore',

    proxy: {
        type: 'rest',
        // type: 'ajax',
        url: "http://localhost:3000/users",
        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',
        reader: {
            type: 'json',
            rootProperty: 'users',
         //   totalProperty: 'totalCount'
        
        }
    },
    pageSize: 12,
    autoLoad: true,
    listeners: {
        load: function(a,b,c,d,f){
          // this.totalCount=10;
// console.log(Ext.getCmp("usersGrid").down('pagingtoolbar').doRefresh())
      // this.pagingToolbar.onLoad();
           // console.log(this)
        }
    }
        



});
