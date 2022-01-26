Ext.define('newApp.store.Images', {
    extend: 'Ext.data.Store',
    alias: 'store.imagesviewstore',
    //TODO Create model for Image, and move fields there :)

    fields: [
        'url'
    ],

    storeId: 'imagesStore',
    groupField: 'dept',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/photos',

        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',

        reader: {
            rootProperty: 'items',
            totalProperty: 'totalCount',
        }
    },

    pageSize: 25,
    autoLoad: true
});