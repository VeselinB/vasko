Ext.define('newApp.view.image.Image', { //TODO Better to rename this to Images - you have some collection here not only one image :)
    extend: 'Ext.Container',
    xtype: 'image',

    //TODO Require used components/controller/viewModel

    controller: 'imagecontroller',
    viewModel: 'imageviewmodel',

    layout: 'fit',

    requires: [
        'Ext.layout.Fit'
    ],

    items: [
        {
            xtype: 'imageHeaderView',
            docked: 'top'
        },
        {
            xtype: 'imagesList'
        }
    ]
});