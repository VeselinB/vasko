Ext.define('newApp.view.main.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',

  
    requires: [
        'newApp.view.user.User',
        'newApp.view.image.Images'

    ],
    fullscreen: true,
    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Users',
            iconCls: 'x-fa fa-users',
            xtype: 'usersView',
        },
        {
            title: 'Images',
            iconCls: 'x-fa fa-images',
            xtype: 'images'
        }
    ]
});
