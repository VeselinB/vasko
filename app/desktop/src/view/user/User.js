Ext.define('newApp.view.user.User', {
    extend: 'Ext.Container',
    xtype: 'users',

    controller: { type: 'userscontroller' },
    viewModel: { type: 'usersviewmodel' },
   
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
