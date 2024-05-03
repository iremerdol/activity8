var languages = ["Html", "Php", "JavaScript", "ActionScript", "AppleScript", "Asp", "Lisp", "Perl", "Python"];

function isValidUrl(url){
    var regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

function isValidEmail(email){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

$(document).ready(function() {
    $("#birthday").datepicker();

    $("#language").autocomplete({
        source: languages
    });

    $("form").submit(function(event){
        var isValid = true;
        var email = $("#email").val();
        var website = $("#website").val();
        var language = $("#language").val();

        if(!isValidEmail(email)){
            alert("Invalid email address");
            isValid = false;
        }

        if(!isValidUrl(website)){
            alert("Invalid website URL");
            isValid = false;
        }

        if(language.trim() === ""){
            alert("Please enter a programming language");
            isValid = false;
        }

        if(!isValid) {
            event.preventDefault();
        }
    });
});