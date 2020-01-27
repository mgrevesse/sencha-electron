/**
 * This view is an example list of people.
 */
Ext.define('StarterApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'StarterApp.store.Personnel'
    ],
    plugins: 'gridfilters',

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{
            text: 'Name',
            dataIndex: 'name',
            filter: {
                // required configs
                type: 'string'
            }
        },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});