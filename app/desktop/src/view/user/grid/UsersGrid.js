Ext.define('newApp.view.user.grid.Grid', {
    extend: 'Ext.grid.Grid',
    xtype: 'usersgridview',
    //scrollable: true,
    grouped: false,
    id: 'usersGrid',
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
                { checkchange: 'selectedUsersIds' },
            

        },
        {
            text: 'Id',
            dataIndex: 'id',
            editable: true,
            width: 30,
            cell: { userCls: 'bold' }
        },
        {
            text: 'Name',
            dataIndex: 'name',

            width: 100,
            cell: { userCls: 'bold' }
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
                        items: [{
                            text: 'Edit this',

                            iconCls: 'x-fa fa-edit',
                            handler: 'editUserData',
                            // data: this


                        },

                        {
                            text: 'Delete This',
                            iconCls: 'x-fa fa-trash',
                            handler: 'deleteUser',

                        },
                        {
                            text: 'Delete All Selected',
                            iconCls: 'x-fa fa-trash',
                            handler: 'deleteAllSelsectedUsers',
                            bind: {
                                disabled: '{deleteAllButtonDisabled}'
                            }

                        }]

                    },

                }
            }

        },


    ],


});
