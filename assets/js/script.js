$(function(){

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
    $("h2:first").click(function(){
        $(this).css("color","red")
    });
    
    $('[data-toggle="tooltip"]').tooltip();
});


















