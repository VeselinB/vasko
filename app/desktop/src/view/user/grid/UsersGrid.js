Ext.define('newApp.view.user.grid.Grid', {
    extend: 'Ext.grid.Grid',
    xtype: 'usersgridview',

    grouped: false,

    id:"usersGrid",

    plugins: {
       pagingtoolbar: true
    },
  
    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            editable: true,
            width: 30,
            cell: {
                userCls: 'bold'
            }
        },
        {
            text: 'Name',
            dataIndex: 'name',

            width: 100,
            cell: {
                userCls: 'bold'
            }
        },
        {
            text: 'Email',
            dataIndex: 'email',
            width: 230
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            width: 150
        },
        {
            text: 'Actions',
            iconCls: 'x-fa fa-image',
            flex: 1,
            cell: {
                xtype: "widgetcell",
                widget: {
                    xtype: "button",
                    text: '',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                text: 'Edit',
                                iconCls: 'x-fa fa-edit',
                                handler: 'editUserData'
                            },
                            {
                                text: 'Delete',
                                iconCls: 'x-fa fa-trash',
                                handler: "deleteUser"
                            }
                        ]
                    }
                }
            }
        }
    ]
});
