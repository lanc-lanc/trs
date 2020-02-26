
$(function(){
	/**
	 * [第一张tab切换]
	 * @type {String}
	 */
	// jQuery(".tab-list a").tabPanelFun({
	// 	cur:'cur',
	// 	tabContent:'.tab-group',
	// 	tabItem:'.tab-item',
	// 	evnets:'click'
	//
	// });



















	jQuery(".tab-list li ").tabPanelFun({
		cur:'cur',
		tabContent:'.tab-group',
		tabItem:'.tab-item',
		evnets:'click'

	});







	/**
	 * [第二种切换]
	 * @type {String}
	 */
	jQuery(".tab-list-bool li").tabPanelFun({
		cur:'cur',
		tabContent:'.tab-group',
		tabItem:'.tab-item',
		pra:true,
		pradom:'.tab-parent'
	});
	jQuery(".tab-list-bool li").tabPanelFun({
		cur:'cur1',
		tabContent:'.tab-group1',
		tabItem:'.tab-item1',
		pra:true,
		pradom:'.tab-parent1'
	});
	jQuery(".tab-list-bool2 li").tabPanelFun({
		cur:'cur2',
		tabContent:'.tab-group2',
		tabItem:'.tab-item2',
		pra:true,
		pradom:'.tab-parent2'
	});
	jQuery(".tab-list-bool3 li").tabPanelFun({
		cur:'cur3',
		tabContent:'.tab-group3',
		tabItem:'.tab-item3',
		pra:true,
		pradom:'.tab-parent3'
	});

	jQuery(".tab-list-bool4 li").tabPanelFun({
		cur:'cur5',
		tabContent:'.tab-group4',
		tabItem:'.tab-item4',
		pra:true,
		pradom:'.tab-parent4'
	});







	/**
	 * [text 改滚动只能像下面设置这几个配置项]
	 * [type默认就可以，也可以设置为top，其他不好再配置了]
	 * @type {String}
	 */
	jQuery(".banner-img a").simpleSwitch({
		text:'.banner-txt a',
		prev:'.banner-left',
		next:'.banner-right',
		num:'.banner-num span',
		className:'cur',
		playTime:2000,
		indy:'.ban-dy',
		lendy:'.ban-len',
		type:'left',
		// direction:'left',
	});

	jQuery(".banner-img1 a").simpleSwitch({
		text:'.banner-txt a',
		prev:'.banner-left',
		next:'.banner-right',
		num:'.banner-num span',
		className:'cur1',
		playTime:1000,
		indy:'.ban-dy',
		lendy:'.ban-len',
		type:'left',
		// direction:'left',
	});
	jQuery(".banner-img2 a").simpleSwitch({
		text:'.banner-txt2 a',
		prev:'.banner-left2',
		next:'.banner-right2',
		num:'.banner-num2 span',
		className:'cur4',
		playTime:1200,
		indy:'.ban-dy2',
		lendy:'.ban-len2',
		type:'left',
		// direction:'left',
	});









	/**
	 * [text 改滚动只能像下面设置这几个配置项]
	 * 新闻头条上下轮播
	 * @type {String}
	 */
	jQuery(".news-cont a").simpleSwitch({
		prev:'.news-btnt',
		next:'.news-btnb',
		playTime:2000,
		type:'top',
	});
	// 新闻头条滚动
	jQuery(".roll-news-cont a").simpleRoll({
		type:'top',
		// type:'left',
		prev:'.roll-news-btnt',
		next:'.roll-news-btnb'
	});
	/**
	 * [text 改滚动只能像下面设置这几个配置项]
	 * [type默认就可以，也可以设置为top，其他不好再配置了]
	 * @type {String}
	 */
	jQuery(".fade-img a").SwitchFade({
		text:'.fade-txt a',
		prev:'.fade-left',
		next:'.fade-right',
		num:'.fade-num span',
		// className:'cur',
		playTime:2000,
		lendy:'.dy-lens',
		indy:'.dy-index'
	});



	/**
	 * 每次轮播多张中的一张
	 * @type {Number}
	 */
	jQuery(".ban-more-img").bannerRollLR({
		len:5,
		type:'right',
		moveTime:1000,
		prev:'.jiantoul',
		next:'.jiantour'
	});

	// jQuery(".ban-more-img").bannerRollLR({
	// 	len:5,
	// 	type:'right',
	// 	moveTime:100,
	// 	prev:'.banner-left2',
	// 	next:'.banner-right2'
	// });









	// 滚动

	jQuery(".roll-items").simpleRoll({
		space:-100,
		type:'left',
		prev:'.ban-roll-left',
		next:'.ban-roll-right'
	});





	// 滚动
	jQuery(".roll-images").rollImages({
		type:'left',
		space:10,
		prev:'.roll-left',
		next:'.roll-right',
		time:50,
		direction:'prev'
	});



	// 底部模拟下拉
	jQuery(".drop-down .tag").dropDownFun({
		tagSiblings:'.drop-lists',
		optionItem:'.drop-down li',
		// optionItem:'.drop-down li a',
		optionBool:true,
		// optionBool:false,
		cur:'curr',
	});

})
