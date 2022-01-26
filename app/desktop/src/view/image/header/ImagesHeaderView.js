Ext.define('newApp.view.image.header.ImagesHeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'imagesHeaderView', 

    cls: 'headerview',

    items: [
        {
            xtype: 'component', //TODO you can use xtype: 'component' here, no need for additional container.
            cls: 'headerviewtext', //TODO Do we use this ?, and if we do better approach (for easy readability) will be to use dashed name 'header-view-text'
            bind: {
                html: '{title}' //TODO If this is the only purpose of this component, can we just include it in 'newApp.view.image.Image' ?
            }
        },
    ]
});
