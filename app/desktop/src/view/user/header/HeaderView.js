Ext.define('newApp.view.user.header.HeaderView', {
    extend: 'Ext.Toolbar',

    xtype: 'userheaderview',
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
            //  bind: { hidden: '{hide_button}' },
            ui: 'headerbutton',
            //reference: 'detailtoggle',
            handler: 'createNewUser',
            iconCls: 'x-fa fa-plus'
        }
    ]
});
