$(document).ready(function() {

    var tableTemplate = document.querySelector('.shoeTamplate');
    var combineTemplate = Handlebars.compile(tableTemplate.innerHTML);
    var tableStock = document.getElementById('tableStock');
    var sellButton = document.querySelector ('#sold');

    function listStock() {
        $.ajax({
            type: 'GET',
            url: '/api/shoes',
            success: function(shoeData) {
                $.each(shoeData, function(i, shoes) {
                    console.log(shoes);
                    var html = combineTemplate({
                        shoesList: shoes
                    });

                    tableStock.innerHTML = html;
                })
            },
            error: function() {
                console.log('an error has occured');
            }
        }).done(function(results) {

        })
    }
    listStock();


    $('#addButton').on('click', function() {
        var newShoe = {
            brand: document.querySelector('.brand').value,
            size: document.querySelector('.size').value,
            in_stock: document.querySelector('.stock').value,
            color: document.querySelector('.color').value,
            price: document.querySelector('.price').value
        }
        newStock(newShoe);
        listStock();

        document.querySelector('.brand').value = "",
            document.querySelector('.size').value = "",
            document.querySelector('.stock').value = "",
            document.querySelector('.color').value = "",
            document.querySelector('.price').value = ""
    });

    $('#showButton').on('click', function() {
        var showButton = document.querySelector('#showButton');
        var tableTemplate = document.querySelector('.shoeTamplate');
        var combineTemplate = Handlebars.compile(tableTemplate.innerHTML);
        var tableStock = document.getElementById('tableStock');


        function listStock() {
            $.ajax({
                type: 'GET',
                url: '/api/shoes',
                success: function(shoeData) {
                    $.each(shoeData, function(i, shoes) {
                        console.log(shoes);
                        var html = combineTemplate({
                            shoesList: shoes
                        });

                        tableStock.innerHTML = html;
                    })
                },
                error: function() {
                    console.log('an error has occured');
                }
            }).done(function(results) {

            })
        }
        listStock();

    });

    ////////////////////////////
    $('#filterButton').on('click', function() {
      var size = document.querySelector('.filterSize').value;

      function filterBySize() {
        $.ajax({
          type: 'GET',
          url: "/api/shoes/size/" + size,
          success: function(results) {
            console.log(results.results);

            tableStock.innerHTML = combineTemplate({
              shoesList: results.results
            });
          }
        })
      }
      filterBySize();
    ////////////////////////////

    var brand = document.querySelector('.filterBrand').value;
    function filterByBrand() {
      $.ajax({
        type: 'GET',
        url: "/api/shoes/brand/" + brand,
        success: function (results) {
            console.log(results.results);

            tableStock.innerHTML = combineTemplate({
              shoesList: results.results
            });
        }
      })
    }
    filterByBrand();
  });
});

function newStock(shoes) {
    $.ajax({
        type: 'POST',
        url: '/api/shoes',
        data: shoes,
    }).done(function(results) {})

}
///////////////////////


// sellButton.addEventListener('click', function() {
//   alert(sellButton.value)
// })
    function sellShoes(soldShoe) {
        $.ajax({
            type: 'POST',
            url: '/api/shoes/sold/' + soldShoe,
            success: function(soldItem) {
              console.log(soldShoe);
              // listStock();
            }
        })
        window.location.reload();
    }
    // sellShoes();

  // })
