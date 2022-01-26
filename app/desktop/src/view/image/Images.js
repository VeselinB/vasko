Ext.define('newApp.view.image.Images', { 
    extend: 'Ext.Container',
    xtype: 'image',

    viewModel: 'imageviewmodel',
    layout: 'fit',

    requires: [
        'Ext.layout.Fit',
        // 'newApp.view.image.imageViewModel',
        // 'newApp.view.image.imageController',
        // 'newApp.view.image.list.imageList',
        //TODO
    ],

    items: [
        {
            xtype: 'imagesHeaderView',
            docked: 'top'
        },
        {
            xtype: 'imagesList'
        }
    ]
});