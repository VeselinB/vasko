Ext.define('newApp.view.main.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',

    //TODO Require used components/controller/viewModel

    controller: 'mainController', //TODO No functionality - so not needed :)
    viewModel: 'mainViewModel', //TODO No functionality - so not needed :)

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
