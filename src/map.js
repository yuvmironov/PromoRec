/**
 * Плагин для создания аккардиона на сайте
 * @author [MFS]
 * @param {object} option [
 autoClose - {boolean} Закрытие при клике на другой элемент
 ]
 */
Element.prototype.MFSAccordeon = function (option) {
	//Значения опций по умолчанию
	var opt = {
		autoClose: false //Закртие при клике по другому элементу
	};
	//Получем коллекцию всех ссылок для аккордеона
	var accordLinks = this.getElementsByClassName('Accord-Link');
	//Проверяем опции
	if (option) {
		for (var key in option) {
			opt[key] = option[key];
		}
	}

	var elements = this.children;
	for (var i = 0; i < elements.length; i++) {
		var accLink = elements[i].getElementsByClassName('Accord-Link');
		accLink[0].classList.add('Accord-Link_NotActive');
		accLink[0].addEventListener('click', function (e) {
			e.preventDefault();
			if (opt.autoClose) {
				for (var i = 0; i < accordLinks.length; i++) {
					accordLinks[i].classList.replace('Accord-Link_Active', 'Accord-Link_NotActive');
					this.classList.replace('Accord-Link_NotActive', 'Accord-Link_Active');
				}
			} else {
				if (this.classList.contains('Accord-Link_NotActive')) {
					this.classList.replace('Accord-Link_NotActive', 'Accord-Link_Active');
				} else {
					this.classList.replace('Accord-Link_Active', 'Accord-Link_NotActive');
				}
			}
		});
	}
};

var thisPage = window.location.pathname.slice(1);
console.log("thisPage", thisPage);
if (thisPage != "") {
	console.log('Не главная');
	jQuery(function ($) {
		ymaps.ready(init);
		var myMap, 
			myPlacemark;
		function init(){ 
			console.group('Создаем карту');
				var myMap = new ymaps.Map(
					'ContactsMap',
					{
						center: [55.7491,37.6210],
						zoom: 9,
						controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
					},
					{
						searchControlProvider: 'yandex#search'
					}
				);
			$.getJSON('infomap.json', function (data) {
					var i = 0;
					let menuContent = $('#MapAccord')
					for (var key in data) {
						createAccLink (data[key], key, menuContent);
					}
					document.getElementById('MapAccord').MFSAccordeon({autoClose: true});
				function createAccLink (object, name, menu) {
					let elementMenu = $('<div class="Accord-Element Contacts-Elemrnt"></div>');
					let link = $(`<a class="Accord-Link Contacts-Link" href="#">${ key }</a>`);
					let content = $(`<div class="Accord-Content Contacts-Content"></div>`);
					$(link).on('click', function ( ev ) {
						ev.preventDefault();
                            myMap.geoObjects.removeAll();
                            myMap.geoObjects.add(collection);
                            myMap.setBounds(myMap.geoObjects.getBounds());
                            myMap.setZoom(myMap.getZoom()-1);
					});
					let collection = new ymaps.GeoObjectCollection(null, {});
					for (var i = 0; i < object.length; i++) {
						createAccContent(object[i], collection, content);
					}
					$(link).appendTo(elementMenu);
					$(content).appendTo(elementMenu)
					$(elementMenu).appendTo(menu);
				}
				function createAccContent (objectContact, colect, cont) {
					var accContent = $(`<img src="${ objectContact.logo }" alt="${ objectContact.name }"><div class="Contacts-Magaz"><p class="Contacts-MagazName">Название магазина: ${ objectContact.name } </p>` +
						`<p class="Contacts-MagazAddress">Адрес магазина: ${ objectContact.addres } </p>` + 
						`<a class="Contacts-MagazLink" href="${ objectContact.link }">Перейти в магазин</a></div>`);
					var placemark = new ymaps.Placemark(
				        objectContact.coordinates,
                        {
                            hintContent: objectContact.name,
                            balloonContentHeader: objectContact.name,
                            balloonContentBody: objectContact.address,
                            balloonContentFooter: ''
                        },
                        {
                            iconLayout: 'default#image',
                            iconImageHref: objectContact.iconImageHref,
                            iconImageSize: objectContact.iconImageSize,
                            iconImageOffset: objectContact.iconImageOffset
                        }
                    );
                    colect.add(placemark);
                    $(accContent).on('click', function () {
                        if (!placemark.balloon.isOpen()) {
                            placemark.balloon.open();
                        } else {
                            placemark.balloon.close();
                        }
                    });
				
				
				$(accContent).appendTo(cont);


				}
			});
		}
	});
}

