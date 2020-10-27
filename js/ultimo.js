$(function() {
    $.getJSON('https://freelance.axelvf.com.ar/observando/mailchimp.php',
     function(data) {
        window.location.href = data[0].link;
    })
    .fail(function() {
        console.log( "Error al intentar obtener el feed" );
    })
});
