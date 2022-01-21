Ext.define('newApp.view.main.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    controller: 'mainController',
    viewModel: 'mainViewModel',

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
            xtype: 'image'
        }
    ]
});
