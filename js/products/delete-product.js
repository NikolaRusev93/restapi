$(document).ready(function(){

    $(document).on('click', '.delete-product-button', function(){
        var id = $(this).attr('data-id');
        bootbox.confirm({
          message: "<h4>Are you sure?</h4>",
          buttons: {
              confirm: {
                  label: '<span class="glyphicon glyphicon-ok"></span> Yes',
                  className: 'btn-danger'
              },
              cancel: {
                  label: '<span class="glyphicon glyphicon-remove"></span> No',
                  className: 'btn-primary'
              }
          },
          callback: function (result) {
            if (result==true) {
              $.ajax({
                  url: "https://unibit-rest-api.000webhostapp.com/product/delete.php",
                  type : "POST",
                  dataType : 'json',
                  data : JSON.stringify({ id: id }),
                  success : function(result) {
                      showProducts();
                  },
                  error: function(xhr, resp, text) {
                      console.log(xhr, resp, text);
                  }
              });
            }
          }
        });
    });
});
