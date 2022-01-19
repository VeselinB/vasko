Ext.define('newApp.view.image.list.ImageList', {
    extend: 'Ext.dataview.List',
    xtype: 'imageslist',
    store: { type: 'imagesviewstore' },
    plugins: {
 
        listpaging: true,
   
    },

    itemTpl: '<img src="{url}" alt="Girl in a jacket" width="100" height="100">',
    grouped: false,

    initialize: function() {
        
        const plugin = this.findPlugin('listpaging');
        plugin.setAutoPaging(true);
        plugin.setBufferZone(0);
        
    }
});