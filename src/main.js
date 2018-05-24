$('#PrincipSlider').slick({
	infinite: true,
	variableWidth: true,
	//adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false
	//fade: true,
});

$('#ProfFullPage').fullpage({
	navigation: true,
	navigationTooltips: ['Описание', 'Принцип работы','Название 1','Название 2','Название 3','Сопутствующие товары', 'Где купить'],
	showActiveTooltip: true,
	slideSelector: ".FullSlide",
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	//fixedElements: '.FullSlide-Header',
	afterLoad: function (anchorLink, index) {
		var loadedSection = $(this);
		switch (index) {
			case 1:
				var navDots = $('#fp-nav').children().children().children().children();
				var navTooltipe = $('#fp-nav').children().children().children().next();
				var menuLinkNotActive = $('.MainMenu-Link_NotActive');
				var menuLinkActive = $('.MainMenu-Link_Active');
				var menuLink = $('.MainMenu-Link');
				var social = $('.Social-Link');
				var dotsPalka = $('#fp-nav').children().children();
				
				navTooltipe.css({"background": "rgba(255, 251, 249, 0.7)", "color": "#AB988F"}); 
				navDots.css('background', '#E4CFC7');
				for (var i = 0; i < navDots.length; i++) {
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#BDA69E');
					}
				}
				menuLinkNotActive.css({"color": "#EECFC2"});
				menuLinkActive.css({'color': '#C5AA9F', 'border-bottom': '2px solid #C5AA9F'});
				menuLink.removeClass('Profilactica-MainLink_Two').addClass('Profilactica-MainLink_One')
				social.removeClass('Social-Link_ProfTwo').addClass('Social-Link_ProfOne');
				dotsPalka.removeClass('fp_ProfTwo').addClass('fp_ProfOne');
				
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
	navigationTooltips: ['Описание', 'Принцип работы','Название 1','Название 2','Название 3','Сопутствующие товары', 'Где купить'],
	showActiveTooltip: true,
	afterLoad: function (anchorLink, index) {
		var loadedSection = $(this);
		switch (index) {
			case 1:
				var navDots = $('#fp-nav').children().children().children().children();
				var navTooltipe = $('#fp-nav').children().children().children().next();
				var menuLinkNotActive = $('.MainMenu-Link_NotActive');
				var menuLinkActive = $('.MainMenu-Link_Active');
				var menuLink = $('.MainMenu-Link');
				var social = $('.Social-Link');
				var dotsPalka = $('#fp-nav').children().children();
				
				navTooltipe.css({"background": "rgba(249, 240, 240, 0.7)", "color": "#DA9393"}); 
				navDots.css('background', '#E8ABAB');
				for (var i = 0; i < navDots.length; i++) {
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#CA8282');
					}
				}
				menuLinkNotActive.css({"color": "#EECACA"});
				menuLinkActive.css({'color': '#E68E8E', 'border-bottom': '2px solid #ED9F9F'});
				menuLink.removeClass('Lechenie-MainLink_Two').addClass('Lechenie-MainLink_One')
				social.removeClass('Social-Link_LechTwo').addClass('Social-Link_LechOne');
				dotsPalka.removeClass('fp_LechTwo').addClass('fp_LechOne');
				
				break;
			}
	}
});

$('#UniFullPage').fullpage({
	navigation: true,
	navigationTooltips: ['Описание', 'Принцип работы','8F-1','7F-3L','7F-5L','Сопутствующие товары', 'Где купить'],
	showActiveTooltip: true,
	afterLoad: function (anchorLink, index) {
		var loadedSection = $(this);
		switch (index) {
			case 1:
				var navDots = $('#fp-nav').children().children().children().children();
				var navTooltipe = $('#fp-nav').children().children().children().next();
				var menuLinkNotActive = $('.MainMenu-Link_NotActive');
				var menuLinkActive = $('.MainMenu-Link_Active');
				var menuLink = $('.MainMenu-Link');
				var social = $('.Social-Link');
				var dotsPalka = $('#fp-nav').children().children();
				
				navTooltipe.css({"background": "rgba(214, 227, 243, 0.7)", "color": "#7599BA"}); 
				navDots.css('background', '#C9DAEF');
				for (var i = 0; i < navDots.length; i++) {
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', '#86A4C9');
					}
				}
				menuLinkNotActive.css({"color": "#aec4df"});
				menuLinkActive.css({'color': '#7599ba', 'border-bottom': '2px solid #7599ba'});
				menuLink.removeClass('MainMenu-Link_UniTwo').addClass('MainMenu-Link_UniFirst')
				social.removeClass('Social-Link_UniTwo').addClass('Social-Link_UniOne');
				dotsPalka.removeClass('fp_UniTwo').addClass('fp_UniOne');
				
				break;
				
				
				
			case 2:
				var navDots = $('#fp-nav').children().children().children().children();
				var navTooltipe = $('#fp-nav').children().children().children().next();
				var menuLinkNotActive = $('.MainMenu-Link_NotActive');
				var menuLinkActive = $('.MainMenu-Link_Active');
				var menuLink = $('.MainMenu-Link');
				var social = $('.Social-Link');
				var dotsPalka = $('#fp-nav').children().children();
				
				navTooltipe.css({"background": "#EAF3F7", "color": "#89A5B1"}); 
				navDots.css('background', '#AEC0C8');
				for (var i = 0; i < navDots.length; i++) {
					if ($(navDots[i]).parent().hasClass('active')) {
						$(navDots[i]).css('background', 'red');
					}
				}
				menuLinkNotActive.css({"color": "#BCCED6 "});
				menuLinkActive.css({'color': '#8CA4AE', 'border-bottom': '2px solid #A4B9C2'});
				menuLink.removeClass('MainMenu-Link_UniFirst').addClass('MainMenu-Link_UniTwo')
				social.removeClass('Social-Link_UniOne').addClass('Social-Link_UniTwo');
				dotsPalka.removeClass('fp_UniOne').addClass('fp_UniTwo');
				
				break;
				
				
				
			case 3:
				var navDots = $('#fp-nav').children().children().children().children();
				var navTooltipe = $('#fp-nav').children().children().children().next();
				var menuLinkNotActive = $('.MainMenu-Link_NotActive');
				var menuLinkActive = $('.MainMenu-Link_Active');
				var social = $('.Social-Link');
				navTooltipe.css({"background": "rgba(233, 233, 233, 0.7)", "color": "#4F4F4F"}); 
				navDots.css('background', '#BDBDBD');
				menuLinkNotActive.css({"color": "#BCCED6 "});
				menuLinkActive.css({'color': '#8CA4AE', 'border-bottom': '2px solid #A4B9C2'});
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