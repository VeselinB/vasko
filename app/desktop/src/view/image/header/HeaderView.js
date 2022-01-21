Ext.define('newApp.view.image.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'imageHeaderView',
    cls: 'headerview',
    items: [
        {
            xtype: 'container',
            cls: 'headerviewtext',
            bind: { html: '{title}' }
        },
    ]
});
