Ext.define('newApp.view.user.Grid', {
    extend: 'Ext.grid.Grid',
    xtype: 'usersGrid',
    viewModel: 'usersViewModel',


    requires: [
        'Ext.grid.plugin.PagingToolbar',
        'newApp.view.user.grid.UsersGridController',
        'newApp.view.user.UserViewModel'


    ],

    controller: 'usersGridController',

    grouped: false,
    id: 'usersGridId',

    plugins: {
        pagingtoolbar: true,
    },

    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
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
                        ],
                        listeners: {
                            show: 'selectedUsersIds'
                        },
                    },
                }
            }
        },
    ],
    selectable: {
        columns: false,
        cells: false,
        checkbox: true,
        checkboxColumnIndex: 0,
        checkboxSelect: true,
        headerCheckbox: true,
        mode: 'multi',
    },
});
