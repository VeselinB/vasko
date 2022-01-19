Ext.define('newApp.view.user.User', {
    extend: 'Ext.Container',
    xtype: 'users',

    controller: 'userscontroller',
    viewModel: 'usersviewmodel',
    
    requires: [
        'Ext.layout.Fit'
    ],

    layout: 'fit',

    items: [
       
        {
            xtype: 'userheaderview',
            docked: 'top'
        },
        {
            xtype: 'usersgridview',
            bind: {
                store: 'usersStore',
            }
        },
        
       
    ]
});
