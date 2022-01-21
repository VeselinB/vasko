Ext.define('newApp.view.image.list.ImageList', {
    extend: 'Ext.dataview.List',
    xtype: 'imagesList',
    store: { type: 'imagesviewstore' },
    itemTpl: '<img src="{url}"  width="100" height="100">',
    grouped: false,

    plugins: {

        listpaging: true,

    },

    initialize: function () {

        const plugin = this.findPlugin('listpaging');
        plugin.setAutoPaging(true);
        plugin.setBufferZone(0);

    }
});