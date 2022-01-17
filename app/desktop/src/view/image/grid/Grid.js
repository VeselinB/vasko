Ext.define('newApp.view.image.grid.Grid', {
    extend: 'Ext.grid.Grid',
    xtype: 'imagesgridview',

    // controller: { type: 'imageviewcontroller' },
    // viewModel: { type: 'imageviewmodel' },
    // store: { type: 'imagesStore' },

    grouped: false,
    requires: ['Ext.grid.filters.Plugin'],
    scrollable: true,
    plugins: {
        gridfilters: true
    },

    itemConfig: {
        viewModel: true
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
        },

        {
            text: 'Images',
            flex: 1,
            cell: {
                xtype: "widgetcell",
                widget: {
                    xtype: "image",
                    height: 100,
                    width: 100,
                    bind: {
                        src: "{record.url}"
                    }
                }
            }
        }
        // {
        //     xtype: 'actioncolumn',
        //     items: [{
        //         xtype: 'image',
        //         src: "https://via.placeholder.com/600/92c952"
        //     }]

        // },
    ]
})