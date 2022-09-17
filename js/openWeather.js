$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=67501b10fce8cbe87f3403bbfecd5a66",
    function (api) {
        $('.temp').html('Local Temp: ' + api.main.temp + 'C');
        $('.city').html('City : ' + api.name);
        $('.description').html('Description: ' + api.weather[0].description);

        $('.icon img').attr('src','https://openweathermap.org/img/wn/' + api.weather[0].icon + '.png');
    });