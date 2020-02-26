$(function() {

	/**
	 * [第二种切换]
	 * @type {String}
	 */
	jQuery(".tab-list-bool li").tabPanelFun({
		cur: 'cur',
		tabContent: '.tab-group',
		tabItem: '.tab-item',
		pra: true,
		pradom: '.tab-parent'
	});
	jQuery(".tab-list-bool li").tabPanelFun({
		cur: 'cur1',
		tabContent: '.tab-group1',
		tabItem: '.tab-item1',
		pra: true,
		pradom: '.tab-parent1'
	});
	jQuery(".tab-list-bool2 li").tabPanelFun({
		cur: 'cur2',
		tabContent: '.tab-group2',
		tabItem: '.tab-item2',
		pra: true,
		pradom: '.tab-parent2'
	});

	jQuery(".tab-list-bool4 li").tabPanelFun({
		cur: 'cur5',
		tabContent: '.tab-group4',
		tabItem: '.tab-item4',
		pra: true,
		pradom: '.tab-parent4'
	});



});