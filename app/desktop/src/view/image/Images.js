Ext.define('newApp.view.image.Images', { 
    extend: 'Ext.Container',
    xtype: 'images',

    viewModel: 'imageViewModel',
    layout: 'fit',

    requires: [
        'Ext.layout.Fit',
        'newApp.view.image.imageViewModel',
        'newApp.view.image.ImagesHeaderView',
        'newApp.view.image.ImageList'
  
     
    ],

    items: [
        {
            xtype: 'imagesHeaderView',
            docked: 'top'
        },
        {
            xtype: 'imagesList',
            bind: {
                store: 'imagesStore',
            }
        }
    ]
});