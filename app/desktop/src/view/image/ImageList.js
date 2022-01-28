Ext.define('newApp.view.image.ImageList', {
    extend: 'Ext.dataview.List',
    xtype: 'imagesList',

    itemTpl: '<img src="{url}"  width="100" height="100">',
    grouped: false,
    requires: [
        'Ext.dataview.plugin.ListPaging'
    ],
    plugins: {
        listpaging: true,
    },

    initialize: function () {
        const plugin = this.findPlugin('listpaging');
      
        plugin.setAutoPaging(true);
        plugin.setBufferZone(0);
       

    }
});