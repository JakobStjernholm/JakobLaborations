$(function () {
    $('#search').focus();
    showResult();
    $('#search').keyup(function () {
        showResult();
    });
    $('.myCheckboxes').change(function() {
        showResult();
    });

});
function showResult() {
    var mySearchField = $('#search').val();
    var regExpression = new RegExp(mySearchField, "i");

    var tvCheckbox = $('#tv').is(':checked');
    var phoneCheckbox = $('#phone').is(':checked');
    var tabletCheckbox = $('#tablets').is(':checked');
    var laptopCheckbox = $('#laptop').is(':checked');

    var dataOutput = "<ul class='search-results'>";
    if (tvCheckbox === true) {
        $.getJSON("\JSON/tv.json", function (data) {

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
            $('#presented-data').html(dataOutput);
        });
    }
    if (phoneCheckbox === true) {
        $.getJSON("\JSON/phones.json", function (data) {


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
                $('#presented-data').html(dataOutput);
            });

        });
    }
    if (tabletCheckbox === true) {
        $.getJSON("\JSON/tablets.json", function (data) {

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
            $('#presented-data').html(dataOutput);
        });
    }
    if (laptopCheckbox === true) {
        $.getJSON("\JSON/laptops.json", function (data) {

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
            $('#presented-data').html(dataOutput);
        });
    }
    dataOutput += "</ul>";
    $('#presented-data').html(dataOutput);
};
