$(document).ready(function(){
  $("#grocery form").submit(function() {
    event.preventDefault();
  var groceryLists = ["carrots", "lettuce", "pasta", "broccoli", "beef"];
  groceryLists = groceryLists.map(function(x){ return x.toUpperCase() })

  groceryLists.forEach(function(groceryList){
    var list = $("input#" + groceryList).val();

      $("ul").append("<li>" + groceryList + "<li>");
      groceryLists.sort();

    });

    $("#list").show();
    $(this).remove();

  });

  });
