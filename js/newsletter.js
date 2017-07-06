$(function() {
    $.getJSON('https://freelance.axelvf.com.ar/observando/mailchimp.php')
     .success(function(data) {
        var ul;
        for (var i = 0; i < data.length; i++) {
            ul = $('<ul/>');
            ul.append("<li>" + data[i].date + " - <a href=" + data[i].link + ">" + data[i].title + "</a></li>");
            $('table').append(ul);
        }
    })
    .error(function(e) { console.error(e); })
});