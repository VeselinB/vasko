Ext.define('newApp.store.Images', {
    extend: 'Ext.data.Store',
    alias: 'store.images',
    model: 'newApp.model.Image',
    storeId: 'imagesStore',


    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/photos',

        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',

        reader: {
            rootProperty: 'items',
            totalProperty: 'totalCount',
            implicitIncludes: false
        }
    },
    pageSize: 20,
    autoLoad: true
});