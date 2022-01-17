Ext.define('newApp.view.image.list.List', {
    extend: 'Ext.dataview.List',
    xtype:'imageslist',
    store: { type: 'imagesviewstore' },
    plugins: {
        pagingtoolbar: true
    },

    itemTpl: '"{id}"<img src="{url}" alt="Girl in a jacket" width="100" height="100">',
    grouped: false,
   

})