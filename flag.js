var request = new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
 var  data = JSON.parse(request.response);
 //convert the string of object(JSON) 
 for(var i=0;i<data.length;i++){
         console.log(`"flag  :"${data[i].flag}`)
 }
}