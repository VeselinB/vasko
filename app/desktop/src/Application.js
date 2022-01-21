Ext.define('newApp.Application', {
    extend: 'Ext.app.Application',
    name: 'newApp',
    requires: ['newApp.*'],
    defaultToken: 'imageview',

    removeSplash: function () {
        Ext.getBody().removeCls('launching');
        const elem = document.getElementById('splash');
        elem.parentNode.removeChild(elem);
    },

    launch: function () {
        this.removeSplash();
        const whichView = 'main';
        Ext.Viewport.add([{xtype: whichView}]);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
