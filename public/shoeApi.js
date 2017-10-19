$(document).ready(function() {

    var tableTemplate = document.querySelector('.shoeTamplate').innerHTML;
    var combineTemplate = Handlebars.compile('tableTemplate');
    var tableStock = document.getElementById('tableStock');


    $(function listStock() {

        $.ajax({
            type: 'GET',
            url: '/api/shoes',
            sucess: function(shoeData) {
                console.log(shoeData);
                tableStock.innerHTML = combineTemplate({
                    shoesList: shoeData
                })
            },
            error: function() {
                console.log('an error has occured');
            }
        })
    })
    // listStock();

    $('.addButton').on('click', function() {
        var newShoe = {
            brand: document.querySelector('.brand').value,
            size: document.querySelector('.size').value,
            in_stock: document.querySelector('.stock').value,
            color: document.querySelector('.color').value,
            price: document.querySelector('.price').value
        }
        $.ajax({
            type: 'POST',
            url: '/api/shoes',
            shoeData: newShoe,
            sucess: function() {
                listStock()
            },
            error: function() {
                console.log('an error has occured');
            }
        })
          document.querySelector('.brand').value = "",
          document.querySelector('.size').value = "",
          document.querySelector('.stock').value = "",
          document.querySelector('.color').value = "",
          document.querySelector('.price').value = ""
    });

});









// $.shoeData.append('<li>' + shoesList.brand + '</li>');
// $.shoeData.append('<li>' + shoesList.size + '</li>');
// $.shoeData.append('<li>' + shoesList.in_stock + '</li>');
// $.shoeData.append('<li>' + shoesList.color + '</li>');
// $.shoeData.append('<li>' + shoesList.price + '</li>');
