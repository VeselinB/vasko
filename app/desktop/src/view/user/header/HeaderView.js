Ext.define('newApp.view.user.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'userHeader',
    cls: 'headerview',

    items: [
        {
            xtype: 'container',
            cls: 'headerviewtext',
            bind: { html: '{title}' }
        },
        '->',
        {
            xtype: 'button',
            ui: 'headerbutton',
            handler: 'setUser',
            iconCls: 'x-fa fa-plus'
        }
    ]
});
