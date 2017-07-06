$(function() {
    $.getJSON('https://freelance.axelvf.com.ar/observando/mailchimp.php')
     .success(function(data) {
        var ul;
        for (var i = 0; i < data.length; i++) {
            ul = $('<li/>');
            ul.append("" + data[i].date + " - <a href=" + data[i].link + ">" + data[i].title + "</a></li>");
            $('ul').append(ul);
        }
    })
    .error(function(e) { console.error(e); })
});