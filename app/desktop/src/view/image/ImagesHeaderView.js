Ext.define('newApp.view.image.ImagesHeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'imagesHeaderView', 
    
    cls: 'header-view',

    items: [
        {
            xtype: 'container', 
            cls: 'header-view-text', //TODO Do we use this ?, answer: to be the same style with usersheader!!!
            html: 'Images',
        },
    ]
});
