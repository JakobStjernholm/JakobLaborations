$(function () {
    $('#search').keyup(function () {
        var mySearchField = $('#search').val();
        var regExpression = new RegExp(mySearchField, "i");
        $.getJSON("\JSON/phones.json", function (data) {
            var dataOutput = "<ul class='search-results'>";

            $.each(data, function (key, val) {
                if ((val.name.search(regExpression) !== -1) || (val.about.search(regExpression)) !== -1) {
                    dataOutput += "<li>";
                    dataOutput += "<p>";
                    dataOutput += "<strong>" + val.name + "</strong>";
                    dataOutput += "</p>";
                    dataOutput += "<br><img src='\Images/" + val.url_image + "'><br>";
                    dataOutput += "</p>";
                    dataOutput += val.about;
                    dataOutput += "<p>";
                    dataOutput += "</p>";
                    dataOutput += "</li>";
                };
            });
            dataOutput += "</ul>";
            $('#presented-data').html(dataOutput);
        });
    });
});