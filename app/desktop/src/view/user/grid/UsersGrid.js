Ext.define('newApp.view.user.grid.Grid', { //TODO If this is the only grid for user part of the project - you can easily move it to newApp.view.user and remove the grid folder
    extend: 'Ext.grid.Grid',
    xtype: 'usersGrid',

    //TODO Require used components/controller/viewModel

    controller: 'usersgrdicontroller',

    grouped: false,
    id: 'usersGridId',

    plugins: {
        pagingtoolbar: true,
    },

    columns: [
        {
            xtype: 'checkcolumn',
            text: '',
            dataIndex: 'active',
            width: 20,
            listeners:
            {
                checkchange: 'selectedUsersIds'
            },
        },
        {
            text: 'Id',
            dataIndex: 'id',
            editable: true,
            width: 30,
            cell:
            {
                userCls: 'bold'
            }
        },
        {
            text: 'Name',
            dataIndex: 'name',
            width: 100,
            cell:
            {
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
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    text: '',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                text: 'Edit',
                                iconCls: 'x-fa fa-edit',
                                handler: 'saveUser',
                            },
                            {
                                text: 'Delete This',
                                iconCls: 'x-fa fa-trash',
                                handler: 'deleteUser',
                            },
                            {
                                text: 'Delete All Selected',
                                iconCls: 'x-fa fa-trash',
                                handler: 'deleteAllSelectedUsers',
                                bind:
                                {
                                    disabled: '{deleteAllButtonDisabled}'
                                }
                            }
                        ]
                    },
                }
            }
        },
    ],
});
