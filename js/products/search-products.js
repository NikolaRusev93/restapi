$(document).ready(function() {

    $(document).on('submit', '#search-product-form', function() {

        var keywords = $(this).find(":input[name='keywords']").val();
        $.getJSON("https://unibit-rest-api.000webhostapp.com/product/search.php?s=" + keywords, function(data) {
            readProductsTemplate(data, keywords);
            changePageTitle("Search products: " + keywords);
        });
        return false;
    });

});
