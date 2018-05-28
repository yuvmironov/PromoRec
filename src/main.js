function changeStyle (
	navTooltipeBackground, 
	navTooltipeColor, 
	dotsWrapDisplay,
	navDotsBackground, 
	navDotsActiveBackground, 
	dotsPalkaClass, 
	menuLinkNotActiveColor, 
	menuLinkActiveColor, 
	menuLinkActiveBorder, 
	buttonWhereColor = 'rgba(255,255,255,0)', 
	buttonWhereBorderColor = 'rgba(255,255,255,0)',
	socialClass
	) {
	var dotsWrap = $('#fp-nav').children();
	var loadedSection = $(this);
	var navDots = $('#fp-nav').children().children().children().children();
	var navTooltipe = $('#fp-nav').children().children().children().next();
	var menuLinkNotActive = $('.MainMenu-Link_NotActive');
	var menuLinkActive = $('.MainMenu-Link_Active');
	var menuLink = $('.MainMenu-Link');
	var social = $('.Social-Link');
	var dotsPalka = $('#fp-nav').children().children();

	//Стилизация названия категории в навигации по слайдам
	navTooltipe.css({"background": navTooltipeBackground, "color": navTooltipeColor}); 
	//Стилизация точек навигации по слайдам
	dotsWrap.css('display',dotsWrapDisplay);
	navDots.css('background', navDotsBackground);
	for (var i = 0; i < navDots.length; i++) {
		//Стилизация активного слайда
		if ($(navDots[i]).parent().hasClass('active')) {
			$(navDots[i]).css('background', navDotsActiveBackground);
		}
	}
	//Стилизация палки между точками навигациями
	dotsPalka.removeClass().addClass(dotsPalkaClass);
	//Стидизация верхнего меню
	menuLinkNotActive.css({"color": menuLinkNotActiveColor});
	menuLinkActive.css({'color': menuLinkActiveColor, 'border-bottom': menuLinkActiveBorder});
	menuLink.hover( function () { 
		$(this).css({'color' : menuLinkActiveColor}) 
	}, 
	function(){ 
		if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
			$(this).css({'color' : menuLinkNotActiveColor}) 
		}
	});
	//Стилизация кнопки "Где купить"
	var buttonWhere = $('.ButtonWhere');
	buttonWhere.css( { 'color': buttonWhereColor, 'border-color': buttonWhereBorderColor });
	buttonWhere.hover(function () {
		$(this).css( { 'color': 'white', 'background-color': buttonWhereBorderColor, 'transition': '0.4s' } )
	}, function (){
		$(this).css( { 'color': buttonWhereColor, 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
	});
	//Стилизация социальных иконок
	social.removeClass().addClass(socialClass);
}


$('#ProfFullPage').fullpage({
	navigation: true,
	navigationTooltips: ['Для профилактики', 'Принцип работы','Концентратор 8Ф-1/1','Концентратор 8Ф-1/2','Концентратор 7F-1L','Пульсоксиметры', 'Коктейлеры','Смеси для приготовления коктейлей','Где купить'],
	showActiveTooltip: true,
	slideSelector: ".FullSlide",
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	normalScrollElements: '#MapSection',
	scrollOverflow: true,
	//fixedElements: '.FullSlide-Header',
	afterRender: function(){
		var pluginContainer = $(this);
		var dotsWrap = $('#fp-nav').children();
		var loadedSection = $(this);
		var navDots = $('#fp-nav').children().children().children().children();
		var navTooltipe = $('#fp-nav').children().children().children().next();
		var menuLinkNotActive = $('.MainMenu-Link_NotActive');
		var menuLinkActive = $('.MainMenu-Link_Active');
		var menuLink = $('.MainMenu-Link');
		var social = $('.Social-Link');
		var dotsPalka = $('#fp-nav').children().children();
		console.log('Загрузили певый экран');
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 251, 249, 0.7)", "color": "#87AD92 "}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#BDD7C2');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#80A38A');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfOne');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#C6E6CB"});
				menuLinkActive.css({'color': '#9CC3A4', 'border-bottom': '2px solid #9CC3A4'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#9CC3A4'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#C6E6CB '}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfOne');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');	
	},
	afterLoad: function (anchorLink, index) {
		var dotsWrap = $('#fp-nav').children();
		var loadedSection = $(this);
		var navDots = $('#fp-nav').children().children().children().children();
		var navTooltipe = $('#fp-nav').children().children().children().next();
		var menuLinkNotActive = $('.MainMenu-Link_NotActive');
		var menuLinkActive = $('.MainMenu-Link_Active');
		var menuLink = $('.MainMenu-Link');
		var social = $('.Social-Link');
		var dotsPalka = $('#fp-nav').children().children();
		switch (index) {
			case 1:
				changeStyle('rgba(255, 251, 249, 0.7)', '#87AD92', 'block', '#BDD7C2', '#80A38A', 'fp_ProfOne', '#C6E6CB', '#9CC3A4', '2px solid #9CC3A4', '', '', 'Social-Link Social-Link_ProfOne')
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 2:
				changeStyle('rgba(234, 243, 247, 0.7)', '#89A5B1', 'block', '#AEC0C8', '#758D97', 'fp_ProfTwo', '#BCCED6', '#8CA4AE', '2px solid #A4B9C2', '', '', 'Social-Link Social-Link_ProfTwo');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				/**
				*	Управление слайдером
				**/
				var sliderWrap = document.getElementsByClassName('fp-slidesNav')[0].children;
				console.log("sliderWrap", sliderWrap);
				var sliderDots = $(sliderWrap).find('span');
				console.log("sliderDots", sliderDots);
				for (let i = 0; i < sliderDots.length; i++) {
					switch (i) {
						case 0:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_1.svg")' })
							break;
						case 1:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_2.svg")' })
							break;
						case 2:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_3.svg")' })
							break;
					}
				}
				/**
				*	Конец управления слайдером
				**/
				break;
			case 3:
				changeStyle('rgba(233, 233, 233, 0.7)', '#4F4F4F', 'block', '#C9C9C9', '#4F4F4F', 'fp_ProfThree', '#BDBDBD', '#828282', '2px solid #828282', '#828282', '#BDBDBD', 'Social-Link Social-Link_ProfThree');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');

				break;
			case 4:
				changeStyle('rgba(244, 226, 216, 0.7)', '#977768', 'block', '#D7B19C', '#B88B76', 'fp_ProfFour', '#E8CEC1', '#BB9B8B', '2px solid #BB9B8B', '#AC8376', '#CDAFA3', 'Social-Link Social-Link_ProfFour');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');

				break;
			case 5:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(242, 254, 254, 0.7)", "color": "#8FB4B2"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#9FD4D1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#7CC2BE');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfFive');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#A1DCD9"});
				menuLinkActive.css({'color': '#70B2AE', 'border-bottom': '2px solid #70B2AE'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#70B2AE'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#A1DCD9'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#7CC2BE', 'border-color': '#9FD4D1' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#9FD4D1', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#7CC2BE', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfFive');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 6:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#1FABC9"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#A4ECFC');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#5DCBE3');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfSix ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#A5D8E7"});
				menuLinkActive.css({'color': '#3FB1C9', 'border-bottom': '2px solid #3FB1C9'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#3FB1C9'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#A5D8E7'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#50BFD7', 'border-color': '#84DFF3' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#84DFF3', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#50BFD7', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfSix');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 7:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#9184AE"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#CBC0E3');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#A696C8');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfSeven ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#C2CCEF"});
				menuLinkActive.css({'color': '#8E92C6', 'border-bottom': '2px solid #8E92C6'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#8E92C6'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#C2CCEF'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#9E8FC2', 'border-color': '#CBC0E3' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#CBC0E3', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#9E8FC2', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfSeven');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');

				break;
			case 8:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C05C83"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#F1A2C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D985A4');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfEight ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#F1A9C5"});
				menuLinkActive.css({'color': '#D36E96', 'border-bottom': '2px solid #DD81A5 '});
				menuLink.hover( function () { 
					$(this).css({'color' : '#D36E96'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#F1A9C5'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#D36E96', 'border-color': '#EEA9C4 ' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#EEA9C4 ', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#D36E96', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfEight ');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 9:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C05C83"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'none');
				navDots.css('background', '#F1A2C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D985A4');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfNine ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#BDBDBD"});
				menuLinkActive.css({'color': '#4F4F4F', 'border-bottom': '2px solid #D64B4B '});
				menuLink.hover( function () { 
					$(this).css({'color' : '#4F4F4F'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#BDBDBD'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfNine ');
				//Показываем кнопку наверх
				$('#moveToUp').css('display', 'block');
				break;
			}
	}
	/*afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {
		switch (slideIndex) {
			case 0:
				$.fn.fullpage.moveTo(2, 1);
				break;
			case 1:
				$.fn.fullpage.moveTo(2, 2);
				break;
			case 2:
				$.fn.fullpage.moveTo(2, 0);
				break;
		}

		console.log("slideIndex", slideIndex);
		console.log("slideAnchor", slideAnchor);
		console.log("index", index);
		console.log("anchorLink", anchorLink);
	}*/
});
$('#LechFullPage').fullpage({
	navigation: true,
	navigationTooltips: ['Для профилактики', 'Принцип работы','Концентратор 7F-5','Концентратор 7F-5L','Концентратор 7F-8L', 'Концентратор 8F-5', 'Пульсоксиметры', 'Коктейлеры','Смеси для приготовления коктейлей','Где купить'],
	showActiveTooltip: true,
	slideSelector: ".FullSlide",
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	normalScrollElements: '#MapSection',
	scrollOverflow: true,
	//fixedElements: '.FullSlide-Header',
	afterRender: function(){
		var pluginContainer = $(this);
		var dotsWrap = $('#fp-nav').children();
		var loadedSection = $(this);
		var navDots = $('#fp-nav').children().children().children().children();
		var navTooltipe = $('#fp-nav').children().children().children().next();
		var menuLinkNotActive = $('.MainMenu-Link_NotActive');
		var menuLinkActive = $('.MainMenu-Link_Active');
		var menuLink = $('.MainMenu-Link');
		var social = $('.Social-Link');
		var dotsPalka = $('#fp-nav').children().children();
		console.log('Загрузили певый экран');
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(249, 240, 240, 0.7)", "color": "#DA9393"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#E8ABAB');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#CA8282');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_LechOne');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#EECACA"});
				menuLinkActive.css({'color': '#E68E8E', 'border-bottom': '2px solid #ED9F9F'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#E68E8E'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#EECACA'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_LechOne');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');	
	},
	afterLoad: function (anchorLink, index) {
		var loadedSection = $(this);
		var pluginContainer = $(this);
		var dotsWrap = $('#fp-nav').children();
		var loadedSection = $(this);
		var navDots = $('#fp-nav').children().children().children().children();
		var navTooltipe = $('#fp-nav').children().children().children().next();
		var menuLinkNotActive = $('.MainMenu-Link_NotActive');
		var menuLinkActive = $('.MainMenu-Link_Active');
		var menuLink = $('.MainMenu-Link');
		var social = $('.Social-Link');
		var dotsPalka = $('#fp-nav').children().children();
		switch (index) {
			case 1:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(249, 240, 240, 0.7)", "color": "#DA9393"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#E8ABAB');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#CA8282');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_LechOne');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#EECACA"});
				menuLinkActive.css({'color': '#E68E8E', 'border-bottom': '2px solid #ED9F9F'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#E68E8E'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#EECACA'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_LechOne');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');	
				break;
			case 2:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(234, 243, 247, 0.7)", "color": "#89A5B1"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#AEC0C8');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#758D97');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfTwo');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#BCCED6"});
				menuLinkActive.css({'color': '#8CA4AE', 'border-bottom': '2px solid #A4B9C2'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#8CA4AE'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#BCCED6'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfTwo');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				/**
				*	Управление слайдером
				**/
				var sliderWrap = document.getElementsByClassName('fp-slidesNav')[0].children;
				console.log("sliderWrap", sliderWrap);
				var sliderDots = $(sliderWrap).find('span');
				console.log("sliderDots", sliderDots);
				for (let i = 0; i < sliderDots.length; i++) {
					switch (i) {
						case 0:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_1.svg")' })
							break;
						case 1:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_2.svg")' })
							break;
						case 2:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_3.svg")' })
							break;
					}
				}
				/**
				*	Конец управления слайдером
				**/
				break;
			case 3:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 248, 238, 0.7)", "color": "#B99E6A"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#EBD4A9');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D8BA81');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_LechThree');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#EBD4A9"});
				menuLinkActive.css({'color': '#CEB27D', 'border-bottom': '2px solid #CEB27D'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#CEB27D'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#EBD4A9'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#CEB27D', 'border-color': '#E0CEAD' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#E0CEAD', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#CEB27D', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_LechThree');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');	
				break;
			case 4:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(243, 239, 235, 0.7)", "color": "#A69A8F"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#CFC8C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#BCB3AA');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_LechFour');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#E0D9D2"});
				menuLinkActive.css({'color': '#B7A694', 'border-bottom': '2px solid #B7A694'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#B7A694'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#E0D9D2'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#A2998E', 'border-color': '#BCB3AA' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#BCB3AA', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#A2998E', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_LechFour');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');	
				break;
			case 5:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 248, 245, 0.7)", "color": "#D09E8A"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#EECFC2');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#E3B39F');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_LechFive');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#EECFC2"});
				menuLinkActive.css({'color': '#EBB6A1', 'border-bottom': '2px solid #F2C4B0'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#EBB6A1'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#EECFC2'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#E9A17B', 'border-color': '#FCCCB2' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#FCCCB2', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#E9A17B', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_LechFive');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 6:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C99971"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#F8E4D0');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#DABA9F');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_LechSix');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#F8E4D0"});
				menuLinkActive.css({'color': '#DCB68F', 'border-bottom': '2px solid #F2C4B0'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#DCB68F'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#F8E4D0'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#ECC39E', 'border-color': '#F1D1A9' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#F1D1A9', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#ECC39E', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_LechSix');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 7:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#1FABC9"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#A4ECFC');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#5DCBE3');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfSix ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#A5D8E7"});
				menuLinkActive.css({'color': '#3FB1C9', 'border-bottom': '2px solid #3FB1C9'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#3FB1C9'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#A5D8E7'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#50BFD7', 'border-color': '#84DFF3' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#84DFF3', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#50BFD7', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfSix');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 8:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#9184AE"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#CBC0E3');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#A696C8');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfSeven ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#C2CCEF"});
				menuLinkActive.css({'color': '#8E92C6', 'border-bottom': '2px solid #8E92C6'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#8E92C6'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#C2CCEF'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#9E8FC2', 'border-color': '#CBC0E3' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#CBC0E3', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#9E8FC2', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfSeven');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 9:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C05C83"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#F1A2C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D985A4');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfEight ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#F1A9C5"});
				menuLinkActive.css({'color': '#D36E96', 'border-bottom': '2px solid #DD81A5 '});
				menuLink.hover( function () { 
					$(this).css({'color' : '#D36E96'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#F1A9C5'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#D36E96', 'border-color': '#EEA9C4 ' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#EEA9C4 ', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#D36E96', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfEight ');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 10:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C05C83"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'none');
				navDots.css('background', '#F1A2C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D985A4');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfNine ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#BDBDBD"});
				menuLinkActive.css({'color': '#4F4F4F', 'border-bottom': '2px solid #D64B4B '});
				menuLink.hover( function () { 
					$(this).css({'color' : '#4F4F4F'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#BDBDBD'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfNine ');
				//Показываем кнопку наверх
				$('#moveToUp').css('display', 'block');
				break;
				break;

			}
	}
});
$('#UniFullPage').fullpage({
	navigation: true,
	navigationTooltips: ['Универсальные', 'Принцип работы','Концентратор 7F-3L','Концентратор 7F-3A','Пульсоксиметры', 'Коктейлеры','Смеси для приготовления коктейлей','Где купить'],
	showActiveTooltip: true,
	slideSelector: ".FullSlide",
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	normalScrollElements: '#MapSection',
	scrollOverflow: true,
	afterRender: function(){
		var pluginContainer = $(this);
		var dotsWrap = $('#fp-nav').children();
		var loadedSection = $(this);
		var navDots = $('#fp-nav').children().children().children().children();
		var navTooltipe = $('#fp-nav').children().children().children().next();
		var menuLinkNotActive = $('.MainMenu-Link_NotActive');
		var menuLinkActive = $('.MainMenu-Link_Active');
		var menuLink = $('.MainMenu-Link');
		var social = $('.Social-Link');
		var dotsPalka = $('#fp-nav').children().children();
		console.log('Загрузили певый экран');
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(252, 254, 255, 0.7)", "color": "#7599BA"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#C9DAEF');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#86A4C9');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_UniOne');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#AEC4DF"});
				menuLinkActive.css({'color': '#7599BA', 'border-bottom': '2px solid #7599BA'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#7599BA'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#AEC4DF'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_UniOne');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
	},
	afterLoad: function (anchorLink, index) {
		var loadedSection = $(this);
		var pluginContainer = $(this);
		var dotsWrap = $('#fp-nav').children();
		var loadedSection = $(this);
		var navDots = $('#fp-nav').children().children().children().children();
		var navTooltipe = $('#fp-nav').children().children().children().next();
		var menuLinkNotActive = $('.MainMenu-Link_NotActive');
		var menuLinkActive = $('.MainMenu-Link_Active');
		var menuLink = $('.MainMenu-Link');
		var social = $('.Social-Link');
		var dotsPalka = $('#fp-nav').children().children();
		switch (index) {
			case 1:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(252, 254, 255, 0.7)", "color": "#7599BA"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#C9DAEF');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#86A4C9');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_UniOne');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#AEC4DF"});
				menuLinkActive.css({'color': '#7599BA', 'border-bottom': '2px solid #7599BA'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#7599BA'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#AEC4DF'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_UniOne');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 2:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(234, 243, 247, 0.7)", "color": "#89A5B1"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#AEC0C8');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#758D97');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfTwo');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#BCCED6"});
				menuLinkActive.css({'color': '#8CA4AE', 'border-bottom': '2px solid #A4B9C2'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#8CA4AE'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#BCCED6'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_UniTwo');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				/**
				*	Управление слайдером
				**/
				var sliderWrap = document.getElementsByClassName('fp-slidesNav')[0].children;
				console.log("sliderWrap", sliderWrap);
				var sliderDots = $(sliderWrap).find('span');
				console.log("sliderDots", sliderDots);
				for (let i = 0; i < sliderDots.length; i++) {
					switch (i) {
						case 0:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_1.svg")' })
							break;
						case 1:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_2.svg")' })
							break;
						case 2:
							$(sliderDots[i]).css({ 'background-image' : 'url("images/Princip/SliderDot_3.svg")' })
							break;
					}
				}
				/**
				*	Конец управления слайдером
				**/
				break;
			case 3:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(238, 244, 249, 0.7)", "color": "#7B98AD"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#B0C9DC');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#7B98AD');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfThree');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#BFD5E5"});
				menuLinkActive.css({'color': '#76A5C7', 'border-bottom': '2px solid #A4B9C2'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#76A5C7'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#BFD5E5'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#647E91', 'border-color': '#7B98AD' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#7B98AD', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#647E91', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfTwo');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 4:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#AB647C"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#C49CA9');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#AF778A');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_UniFour');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#D9BFC8"});
				menuLinkActive.css({'color': '#B08A97', 'border-bottom': '2px solid #B08A97'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#B08A97'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#D9BFC8'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#B48595', 'border-color': '#D8A6B7' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#D8A6B7', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#B48595', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_UniFour');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');

				break;
			case 5:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#1FABC9"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#A4ECFC');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#5DCBE3');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfSix ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#A5D8E7"});
				menuLinkActive.css({'color': '#3FB1C9', 'border-bottom': '2px solid #3FB1C9'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#3FB1C9'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#A5D8E7'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#50BFD7', 'border-color': '#84DFF3' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#84DFF3', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#50BFD7', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				}); 
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfSix');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 6:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#9184AE"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#CBC0E3');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#A696C8');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfSeven ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#C2CCEF"});
				menuLinkActive.css({'color': '#8E92C6', 'border-bottom': '2px solid #8E92C6'});
				menuLink.hover( function () { 
					$(this).css({'color' : '#8E92C6'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#C2CCEF'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#9E8FC2', 'border-color': '#CBC0E3' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#CBC0E3', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#9E8FC2', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfSeven');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 7:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C05C83"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'block');
				navDots.css('background', '#F1A2C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D985A4');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfEight ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#F1A9C5"});
				menuLinkActive.css({'color': '#D36E96', 'border-bottom': '2px solid #DD81A5 '});
				menuLink.hover( function () { 
					$(this).css({'color' : '#D36E96'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#F1A9C5'}) 
					}
				});
				//Стилизация кнопки "Где купить"
				var buttonWhere = $('.ButtonWhere');
				buttonWhere.css( { 'color': '#D36E96', 'border-color': '#EEA9C4 ' });
				buttonWhere.hover(function () {
					$(this).css( { 'color': 'white', 'background-color': '#EEA9C4 ', 'transition': '0.4s' } )
				}, function (){
					$(this).css( { 'color': '#D36E96', 'background-color': 'rgba(255,255,255,0)', 'transition': '0.4s' } )
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfEight ');
				//Скрываем кнопку наверх
				$('#moveToUp').css('display', 'none');
				break;
			case 8:
				//Стилизация названия категории в навигации по слайдам
				navTooltipe.css({"background": "rgba(255, 255, 255, 0.7)", "color": "#C05C83"}); 
				//Стилизация точек навигации по слайдам
				dotsWrap.css('display', 'none');
				navDots.css('background', '#F1A2C1');
				for (var i = 0; i < navDots.length; i++) {
					//Стилизация активного слайда
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#D985A4');
					}
				}
				//Стилизация палки между точками навигациями
				dotsPalka.removeClass().addClass('fp_ProfNine ');
				//Стидизация верхнего меню
				menuLinkNotActive.css({"color": "#BDBDBD"});
				menuLinkActive.css({'color': '#4F4F4F', 'border-bottom': '2px solid #D64B4B '});
				menuLink.hover( function () { 
					$(this).css({'color' : '#4F4F4F'}) 
				}, 
				function(){ 
					if (!($(this).hasClass('Profilactica-MainLink_Active'))) {
						$(this).css({'color' : '#BDBDBD'}) 
					}
				});
				//Стилизация социальных иконок
				social.removeClass().addClass('Social-Link Social-Link_ProfNine ');
				//Показываем кнопку наверх
				$('#moveToUp').css('display', 'block');
				break;
		}
	}
});
window.onload = function () {
	console.log('Загрузились');
	$('.Preload').addClass('Preload-Hide');
	$('.IndexPages-Image').addClass('Rec-Dvig');
	$('#ListItem1').delay(2000).fadeIn(600);
	$('#ListItem2').delay(3000).fadeIn(600);
	$('#ListItem3').delay(4000).fadeIn(600);
	$('#ListItem4').fadeIn(600);
	$('#ListItem5').fadeIn(600);
	$('#ListItem6').fadeIn(600);
	$('#ListItem7').fadeIn(600);
	$('#ListItem8').fadeIn(600);
	$('#ListItem9').fadeIn(600);
	var linkKat = document.getElementsByClassName('IndexPages-NavLink');
	var infoMas = document.getElementsByClassName('IndexPages-Info');
	console.log('linkKat ', linkKat);
	console.log('infoMas ', infoMas);
	for (var i = 0; i < linkKat.length; i++) {
		linkKat[i].addEventListener('mouseenter', function () {
			var thisId = this.dataset.id;

			for (var j = 0; j < infoMas.length; j++) {
				infoMas[j].classList.replace('IndexPages-Info_Show', 'IndexPages-Info_Hide');
			}

			for (j = 0; j < linkKat.length; j++) {
				linkKat[j].classList.replace('IndexPages-NavLink_Active', 'IndexPages-NavLink_NotActive');
			}

			this.classList.replace('IndexPages-NavLink_NotActive', 'IndexPages-NavLink_Active');
			document.getElementById(thisId).classList.replace('IndexPages-Info_Hide', 'IndexPages-Info_Show');
		})
	}
};
$(document).on('click', '#BackToTheBeginning', function(){
  $.fn.fullpage.moveTo(1);
});