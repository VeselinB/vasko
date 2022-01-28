Ext.define('newApp.view.user.User', {
    extend: 'Ext.Container',
    xtype: 'usersView',
    controller: 'usersController',
    viewModel: 'usersViewModel',
    
    requires: [
        'Ext.layout.Fit',
        'newApp.view.user.userHeaderView',
        'newApp.view.user.Grid',
        'newApp.view.user.UserController',
        'newApp.view.user.UserViewModel'
    ],

    layout: 'fit',

    items: [
       
        {
            xtype: 'userHeaderView',
            docked: 'top'
        },
        {
            xtype: 'usersGrid',
            bind: 
            {
                store: 'usersStore',
            }
        },
        
       
    ]
});
