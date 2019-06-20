$(document).ready(function(){
  $("#grocery form").submit(function(event) {
    event.preventDefault();
    var groceryLists = ["carrots", "lettuce", "pasta", "broccoli", "beef"];
    var input = $("input#vegetables").val();
    groceryLists.push(input);
    groceryLists = groceryLists.map(function(x){ return x.toUpperCase() }).sort();

    groceryLists.forEach(function(item){
      $("ul").append("<li>" + item + "</li>");
    });

    $("#list").show();
    $(this).remove();
  });
});
