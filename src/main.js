
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
						$(navDots[i]).css('background', '#000');
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