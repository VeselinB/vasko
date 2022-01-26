Ext.define('newApp.view.user.User', {
    extend: 'Ext.Container',
    xtype: 'usersView',

    //TODO Require used components/controller/viewModel

    controller: 'userscontroller',
    viewModel: 'usersviewmodel',
    
    requires: [
        'Ext.layout.Fit'
    ],

    layout: 'fit',

    items: [
       
        {
            xtype: 'userHeader',
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
