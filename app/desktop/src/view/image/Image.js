Ext.define('newApp.view.image.Image', {
	xtype: 'image',
	// cls: 'imageview',

	controller: 'imagecontroller',
	viewModel: 'imageviewmodel',

	extend: 'Ext.Container',
	requires: [
		'Ext.layout.Fit'
	],
	layout: 'fit',
	items: [

		{ xtype: 'imageheaderview', docked: 'top' },

		{ xtype: 'imageslist'},

	]
});