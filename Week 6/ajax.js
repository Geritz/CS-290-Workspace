/************************************************************
**  Filename: ajax.js
**  Author: Spencer Moran
**  Date: 11/4/2016
**  Class: CS290
**  Description: Implements the api of openWeatherMap.org. 
**      Also demonstrates POST.
*************************************************************/

var apiKey = '340ff0c26472e4b545027225af976189';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    //sets up the first form.
    document.getElementById('citySubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var cityName = document.getElementById('cityName').value;
        var flag = undefined;
        document.getElementById('resIn').textContent = cityName;
        if (typeof(document.getElementById("cityName")) == "string"){
            flag = "q=";
        } else {
            flag = "zip=";
        }
        req.open('GET',"http://api.openweathermap.org/data/2.5/weather?"+ flag + cityName + "&APPID=" + apiKey, true); 
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                //console.log(response);
                //console.log(response.name);
                document.getElementById('nameOut').textContent = response.name;
                document.getElementById('humidOut').textContent = response.main.humidity;
                document.getElementById('pressureOut').textContent = response.main.pressure;
                document.getElementById('tempOut').textContent = response.main.temp + ' K';
        } else { 
            console.log("Ërror in network request: "+ request.statusText);
        }});
        req.send(null);
        event.preventDefault();
    });

    //sets up the second form.
    document.getElementById('postSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {postBin: null};
        payload.postBin = document.getElementById('postBin').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                //console.log(response);
                //console.log(response.data);
                //console.log(JSON.parse(response.data));
                document.getElementById('postStatus').textContent = "You sent: " + JSON.parse(response.data).postBin;
            } else { 
            console.log("Ërror in network request: "+ request.statusText);
        }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    })
}