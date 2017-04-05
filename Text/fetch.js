var html = '';

var allTxt = function() {
    fetch('https://httpbin.org/html')
    .then(function(response) {
        //html = response.text();
        return response.text();
    }).then(function(text) { 
  	 console.log(text);
        //return text;
  });
}

console.log(html);

//var htmlArr = html.split(' ');


