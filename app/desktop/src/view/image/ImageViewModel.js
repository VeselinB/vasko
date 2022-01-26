Ext.define('newApp.view.image.ImageViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.imageviewmodel', //TODO Fix camel case xtype

    data: {
        name: 'imageview', //TODO Check if we use this
        title: 'Images', //TODO Probably will be better to hardcode this in the component, and remove the ViewModel entirely, if it became the single variable here
    },
});
