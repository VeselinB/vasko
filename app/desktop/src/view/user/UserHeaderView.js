Ext.define('newApp.view.user.userHeaderView', { 
    extend: 'Ext.Toolbar',
    xtype: 'userHeaderView',

    cls: 'header-view', 

    items: [
        {
            xtype: 'container',
            cls: 'header-view-text', 
            html: 'Users'
        },
        '->',
        {
            xtype: 'button',
            ui: 'header-button', 
            handler: 'setUser',
            iconCls: 'x-fa fa-plus'
        }
    ]
});
