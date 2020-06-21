$(document).ready(function(){

    $(document).on('click', '.read-one-product-button', function(){
        var id = $(this).attr('data-id');
        $.getJSON("https://unibit-rest-api.000webhostapp.com/product/read_one.php?id=" + id, function(data) {
          var read_one_product_html=`
              <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
                  <span class='glyphicon glyphicon-list'></span> Read Products
              </div>
              <table class='table table-bordered table-hover'>
                  <tr>
                      <td class='w-30-pct'>Name</td>
                      <td class='w-70-pct'>` + data.name + `</td>
                  </tr>
                  <tr>
                      <td>Price</td>
                      <td>` + data.price + `</td>
                  </tr>
                  <tr>
                      <td>Description</td>
                      <td>` + data.description + `</td>
                  </tr>
                  <tr>
                      <td>Category</td>
                      <td>` + data.category_name + `</td>
                  </tr>
              </table>`;
              $("#page-content").html(read_one_product_html);
              changePageTitle("Read Product");
        });
    });

});
