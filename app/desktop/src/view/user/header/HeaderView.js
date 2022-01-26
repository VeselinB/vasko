Ext.define('newApp.view.user.header.HeaderView', { //TODO Inconsistent name - xtype, and if there is a single header in user tab better to move it to newApp.view.user and remove the header folder
    extend: 'Ext.Toolbar',
    xtype: 'userHeader',

    cls: 'headerview', //TODO Better use dashed class name 'header-view'

    items: [
        {
            xtype: 'container',
            cls: 'headerviewtext', //TODO Better use dashed class name 'header-view-text'
            bind: {
                html: '{title}'
            }
        },
        '->',
        {
            xtype: 'button',
            ui: 'headerbutton', //TODO Better use dashed class name 'header-button'
            handler: 'setUser',
            iconCls: 'x-fa fa-plus'
        }
    ]
});
