//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require anijs-min
//= require what-input

$(document).ready(function() {
    // Scrolling href
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});