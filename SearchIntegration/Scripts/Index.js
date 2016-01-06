$(function () {
    $('#search').keyup(function () {
        var mySearchField = $('#search').val();
        var regExpression = new RegExp(mySearchField, 'i');
        $.getJSON('phones.json', function (data) {
            var dataOutput = "<ul> class='search-results'>"

            $.each(data, function (key, value) {
                if ((val.name.search(regExpression) !== -1) || (val.about.search(regExpression)) !== -1) {

                }
            });
        });
    });
});