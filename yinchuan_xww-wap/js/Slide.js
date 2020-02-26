
function photoSlider(options) {
	this.wrap = options.wrap;
	if (!options.wrap) return;
	this.wrapWidth = this.wrap.offsetWidth;
	this.wrapInner = this.wrap.getElementsByTagName('ul')[0];
	this.lists = this.wrap.getElementsByTagName('li');
	this.listLength = this.lists.length;
	this.len = this.listLength;
	var defaults = {
		loop: false, //无缝循环
		autoPlay: false, //自动轮播
		autoTime:5000, //自动轮播时间间隔
		speed: 300,//动画过渡时间
		pagination:true, //状态点
        statePage: false //当前页/总页（另一种状态序号）
	}
	this.ops = options || {};
	for (var i in defaults) {
		if (typeof options[i] === 'undefined') {
			options[i] = defaults[i];
		} else if (typeof options[i] === 'object') {
			for (var deepDef in defaults[i]) {
				if (typeof options[i][j] === 'undefined') {
					options[i][j] = defaults[i][j];
				}
			}
		}
	};
	this.init();
	this.bindEvent();
}

photoSlider.prototype.init = function() {
	this.ratio = this.wrap.offsetHeight / this.wrap.offsetWidth;
	this.wrapWidth = this.wrap.offsetWidth;
	// this.wrapHeight = this.wrap.offsetHeight;
	// this.wrapInner.style.width = this.wrapWidth + 'px';
	this.index = 0;

	//初始化lists的left值
	for (var i = 0; i < this.listLength; i++) {
		this.lists[i].style.left = i * this.wrapWidth + 'px';
		/*var listImg = this.lists[i].getElementsByTagName('img')[0];
		if (listImg.height / listImg.width > this.ratio) {
			listImg.style.height = this.wrapHeight + 'px';
		} else {
			listImg.style.width = this.wrapWidth + 'px';
		}
		delete listImg;*/
	};
	if(this.ops.pagination){ //创建状态点
		this.createBullet();
	};
    if (this.ops.statePage) {
        var totalPage = this.wrap.querySelector(".total-page");
        var nowPage = this.wrap.querySelector(".now-page");
        totalPage.innerHTML = this.listLength;
        nowPage.innerHTML = 1;
    }
	if (this.ops.loop) { //无缝循环
		this.copyLists();
		this.index = 2;
		this.listLength = this.wrapInner.getElementsByTagName('li').length;
	};
	if (this.ops.autoPlay) { //自动轮播
		this.autoPlay();
	};

	//窗口大小初始化方法
	var _this=this,resizeTimer = null;
	window.onresize = function(){
		if (resizeTimer) clearTimeout(resizeTimer); 
		resizeTimer = setTimeout(function(){
			_this.resizeInit();
		},300);
	};
};
photoSlider.prototype.resizeInit = function(){
	// this.ratio = this.wrap.offsetHeight / this.wrap.offsetWidth;
	this.wrapWidth = this.wrap.offsetWidth;
	// this.wrapHeight = this.wrap.offsetHeight;
	// this.wrapInner.style.width = this.wrapWidth + 'px';
	for (var i = 0; i < this.listLength; i++) {
		var j = i - 2;
		this.lists[i].style.left = this.wrapWidth * j +'px';
	};
	this.move('0');
}

//copy首尾lists
photoSlider.prototype.copyLists = function(){
	var lastLi = document.createElement('li'),
			lastSecLi = document.createElement('li'),
			firstLi = document.createElement('li'),
			secondLi = document.createElement('li');
		lastLi.style.left = '-' + this.wrapWidth + 'px';
		lastLi.innerHTML = this.lists[this.listLength - 1].innerHTML;
		lastSecLi.style.left = '-' + this.wrapWidth * 2 + 'px';
		lastSecLi.innerHTML = this.lists[this.listLength - 2].innerHTML;
		firstLi.style.left = this.wrapWidth * this.listLength + 'px';
		firstLi.innerHTML = this.lists[0].innerHTML;
		secondLi.style.left = this.wrapWidth * (this.listLength + 1) + 'px';
		secondLi.innerHTML = this.lists[1].innerHTML;
		this.wrapInner.insertBefore(lastLi, this.wrapInner.firstChild);
		this.wrapInner.insertBefore(lastSecLi, this.wrapInner.firstChild);
		this.wrapInner.appendChild(firstLi);
		this.wrapInner.appendChild(secondLi);
}

//创建状态点列表
photoSlider.prototype.createBullet = function(){
	pagination = document.createElement('div');
	pagination.className='pagination';
	for(var i=0;i<this.listLength;i++){
	span = document.createElement('span');
	if(this.index==i){
		span.className='active';
	}
	pagination.appendChild(span);
	}
	this.wrap.appendChild(pagination);
	this.bulletLists=pagination.getElementsByTagName('span');
	this.bllength=this.bulletLists.length;
}
photoSlider.prototype.autoPlay = function(){
	var _this=this;
		clearInterval(_this.timer);
		_this.timer = setInterval(function() {
			_this.move('+1');
		}, _this.ops.autoTime);
}
photoSlider.prototype.stopPlay = function(){
		clearInterval(this.timer);
}
photoSlider.prototype.Transform3d=function(elm,x,m){
	if(!elm){
		throw new Error('未指定动画元素！');
	}else{
		elm.style.transform = 'translate3d(' + x + 'px,0,0)';
		elm.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
	};
	if(m){
		elm.style.transition = 'all ' + this.ops.speed + 'ms ease-out 0s';
		elm.style.webkitTransition = 'all ' + this.ops.speed + 'ms ease-out 0s';
	}else{
		elm.style.transition = 'none';
		elm.style.webkitTransition = 'none';
	}
}
photoSlider.prototype.loopSetting = function(n) {
	var _this = this;
	switch (n) {
		case 1:
			setTimeout(function() {
				mindex = _this.listLength - 3;
				_this.index = mindex;
				_this.Transform3d(_this.wrapInner,-_this.wrapWidth * (_this.listLength - 5),false);
			}, _this.ops.speed);
			break;
		case _this.listLength - 2:
			setTimeout(function() {
				mindex = 2;
				_this.index = mindex;
				_this.Transform3d(_this.wrapInner,0,false);
			}, _this.ops.speed);
			break;
	}
}
photoSlider.prototype.move = function(m) {
	var mindex, _this = this;
	if (typeof m == 'number') {
		mindex = this.index;
	} else if (typeof m == 'string') {
		mindex = this.index + m * 1;
	}
	if (mindex > this.listLength - 1) {
		mindex = this.listLength - 1;
	} else if (mindex < 0) {
		mindex = 0;
	}

	//状态点列表切换方法
	this.index = mindex;
	var i = -1 * (this.index - 2);
	this.Transform3d(this.wrapInner, i * this.wrapWidth, true);

    var activeNum = 0;

    if (mindex == 1) {
        activeNum = _this.len - 1;
    } else if (mindex == (this.listLength - 2)) {
        activeNum = 0;
    } else {
        activeNum = mindex - 2;
    }

    if (_this.wrap.querySelector('.banner-text')) { //轮播图是否有文字描述
        // 显示文字描述
        var textBox = _this.wrap.querySelector('.banner-text');
        var textP = textBox.getElementsByTagName('p');
        for(var i = 0; i < textP.length; i++) { //所有子元素p隐藏
            textP[i].style.display = 'none';
        }
        textP[activeNum].style.display = 'block';
    }
    
	//状态点列表切换方法
	if(this.ops.pagination){
		setTimeout(function() {
			for(var i = 0; i < _this.bllength; i++) {
				if (i == activeNum) {
					_this.bulletLists[i].setAttribute('class','active');
				} else {
					_this.bulletLists[i].setAttribute('class',''); //其他的子元素圆点
				}
			}
		}, 100);
	}

    // 分页式的状态
    if (this.ops.statePage) {
        
        // 当前页
        var bannerPage = _this.wrap.querySelector(".banner-page");
        var nowPage = bannerPage.querySelector(".now-page");
        nowPage.innerHTML = activeNum + 1;
        
    }

	//无缝循环设置
	if (this.ops.loop) {
		this.loopSetting(this.index);
	}
}
photoSlider.prototype.bindEvent = function() {
	var _this = this;
	var moveWidth = this.wrapWidth / 3;
	var touchstart = function(e) {
		_this.startX = e.touches[0].pageX;
		_this.startY = e.touches[0].pageY;
		//初始化移动的距离
		_this.offsetX = 0;
		_this.startTime = new Date() * 1;
		_this.stopPlay();
	};
	var touchmove = function(e) {
		_this.offsetX = e.touches[0].pageX - _this.startX;
		_this.offsetY = e.touches[0].pageY - _this.startY;
		if (Math.abs(_this.offsetX) > Math.abs(_this.offsetY)) {
			e.preventDefault();
			var i = -1 * (_this.index - 2);
			_this.Transform3d(_this.wrapInner, i * _this.wrapWidth + _this.offsetX, false);
		}
	};
	var touchend = function(e) {
		var endTime = new Date() * 1;
		if (endTime - _this.startTime > 700) {
			if (_this.offsetX >= moveWidth) {
				_this.move('-1');
			} else if (_this.offsetX < -moveWidth) {
				_this.move('+1');
			} else {
				_this.move('0');
			}
		} else {
			if (_this.offsetX >= 60 || (_this.offsetX > 0 && _this.offsetX > 0.25 * (endTime - _this.startTime))) {
				_this.move('-1');
			} else if (_this.offsetX < -60 || (_this.offsetX < 0 && _this.offsetX < 0.25 * (endTime - _this.startTime))) {
				_this.move('+1');
			} else {
				_this.move('0');
			}
		}
		if (_this.ops.autoPlay) {
			_this.autoPlay();
		}
	};
	_this.wrap.addEventListener('touchstart', touchstart, false);
	_this.wrap.addEventListener('touchmove', touchmove, false);
	_this.wrap.addEventListener('touchend', touchend, false);
};
function photoSlide(options) {
	return new photoSlider(options);
};