Ext.define('newApp.view.image.ImageViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.imagesviewstore',
    fields: [
        'albumId', 'id', 'title', 'url'
    ],
    storeId: 'imagesStore',
    groupField: 'dept',
    // data: { items: [
    //     { 
    //     "albumId": 1,
    //     "id": 1,
    //     "title": "accusamus beatae ad facilis cum similique qui sunt",
    //     "url": "https://via.placeholder.com/600/92c952",
    //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    // },
      
    // ]},
    proxy: {
        // type: 'rest',
        type: 'ajax',
        url: "http://localhost:3000/photos",
        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',
        reader: {
            // type: 'json',
            rootProperty: 'photos',
            totalProperty: 'totalCount',

        }
    },
    pageSize: 25,
    autoLoad: true
});