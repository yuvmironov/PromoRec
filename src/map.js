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
					for (var key in data) {
						createAccLink (data[key], key);
					}
					document.getElementById('MapAccord').MFSAccordeon({autoClose: true});




				function createAccLink (object, name) {
					
					var collection = new ymaps.GeoObjectCollection(null, {});
					let strAccLink = '<div class="Accord-Element">' +
					'<a href="#" class="Accord-Link">' +
					key +
					'</a>' +
					createAccContent (object, collection) +
					'</div>';
					$(strAccLink).on('click', function ( ev ) {
						ev.preventDefault();
                            myMap.geoObjects.removeAll();
                            myMap.geoObjects.add(collection);
					});
					$(strAccLink).appendTo('#MapAccord');


				}





				function createAccContent (objectContact, colect) {
					console.log("objectContact", objectContact);
					

					var accContent = '<div class="Accord-Content">';
					for (let i = 0; i < objectContact.length; i++) {
						accContent += `<p class="Contacts-MagazName">Название магазина: ${ objectContact[i].name } </p>`;
						accContent += `<p class="Contacts-MagazAddress">Адрес магазина: ${ objectContact[i].addres } </p>`;
						accContent += `<a class="Contacts-MagazLink" href="${ objectContact[i].link }">Перейти в магазин</a>`;
						var placemark = new ymaps.Placemark(
					        objectContact[i].coordinates,
                            {
                                hintContent: objectContact[i].name,
                                balloonContentHeader: objectContact[i].name,
                                balloonContentBody: objectContact[i].address,
                                balloonContentFooter: ''/*'<div class = "Balloon-Footer">' + createPhone(phoneMass) + createGraff(objectContact[i].graff) + '</div>'*/
                            },
                            {
                                iconLayout: 'default#image',
                                iconImageHref: objectContact[i].iconImageHref,
                                iconImageSize: objectContact[i].iconImageSize,
                                iconImageOffset: objectContact[i].iconImageOffset
                            }
                        );
					    // Добавляем метку в коллекцию.
                        console.log(objectContact[i].iconImageHref)
                        console.log("placemark hintContent", placemark.hintContent);
                        console.log("placemark iconImageHref", placemark.iconImageHref);
                        console.log("placemark iconImageSize", placemark.iconImageSize);
                        console.log("placemark iconImageOffset", placemark.iconImageOffset);
                        colect.add(placemark);

                        
                        $('.Contacts-Name').on('click', function () {
                            if (!placemark.balloon.isOpen()) {
                                placemark.balloon.open();
                            } else {
                                placemark.balloon.close();
                            }
                        });
					}
					accContent += '</div>'; 
					return accContent;


				}
					/*$(".Tabs-Blocks").mCustomScrollbar({
						theme: "client",
						scrollbarPosition: "outside"
					});*/



				});
		}
	});
}

