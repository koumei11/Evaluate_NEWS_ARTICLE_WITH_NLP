import handleSubmit from './js/formHandler'
import render from './render/renderJS'
import validator from './js/urlValidator'

var baseUrl = "http://localhost:8081/test?url=";
var submit = document.getElementById('submit');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    var targetUrl = document.getElementById('url').value;

    // Check URL with regex
    if(validator(targetUrl)) {
        handleSubmit(baseUrl + targetUrl)
            .then(function(data) {
                // Check given URL exsists
                if ("status" in data) {
                    alert(data["message"]);
                } else {
                    render(data);
                }
        });
    } else {
        alert("Enter valid URL !");
    }
});
