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
            	console.log("data", data);
                    var i = 0;
                    for (var key in data) {
                        console.log(data[key]);
                    }


                    /*$(".Tabs-Blocks").mCustomScrollbar({
                        theme: "client",
                        scrollbarPosition: "outside"
                    });*/
                });
        }
    });
}

