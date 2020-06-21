$(document).ready(function() {

    showProductsFirstPage();
    $(document).on('click', '.read-products-button', function(){
        showProductsFirstPage();
    });

    $(document).on('click', '.pagination li', function() {
        var json_url = $(this).find('a').attr('data-page');
        showProducts(json_url);
    });
});

function showProductsFirstPage(){
    var json_url="https://unibit-rest-api.000webhostapp.com/product/read_paging.php";
    showProducts(json_url);
}

function showProducts(json_url) {
    $.getJSON(json_url, function(data) {
        readProductsTemplate(data, "");
        changePageTitle("Read Products");
    });
}
