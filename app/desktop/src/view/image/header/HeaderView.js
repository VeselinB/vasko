Ext.define('newApp.view.image.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'imageheaderview',
    cls: 'headerview',
    // controller: { type: 'imageviewcontroller' },
    // viewModel: { type: 'imageviewmodel' },

    items: [
        {
            xtype: 'container',
            cls: 'headerviewtext',
            bind: { html: '{title}' }
        },
       
       

    ]
});
