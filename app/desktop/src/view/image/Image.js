Ext.define('newApp.view.image.Image', {
    xtype: 'image',
    controller: 'imagecontroller',
    viewModel: 'imageviewmodel',
    extend: 'Ext.Container',
    layout: 'fit',

    requires: [
        'Ext.layout.Fit'
    ],

    items: [
        { xtype: 'imageHeaderView', docked: 'top' },
        { xtype: 'imagesList'},
    ]
});