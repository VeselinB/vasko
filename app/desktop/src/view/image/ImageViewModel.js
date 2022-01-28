Ext.define('newApp.view.image.imageViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.imageViewModel', 
    requires: [
        'newApp.store.Images'
    ],
    stores: {
        imagesStore: {
            type: 'images',
        }
    },
});
