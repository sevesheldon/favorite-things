$(function() {
  $("form#favorite-things").submit(function(event){
    event.preventDefault();

    var firstThing = $("#first-thing").val();
    var secondThing = $("#second-thing").val();
    var thirdThing = $("#third-thing").val();
    var fourthThing = $("#fourth-thing").val();

    var allThings = [firstThing, secondThing, thirdThing, fourthThing]

    var returnThings = []
    returnThings.push(secondThing);
    returnThings.push(firstThing);
    returnThings.push(thirdThing);
    returnThings.toString();

    //var returnThings = [allThings[1], allThings[0], allThings[2]] // same as var returnThings just above this

    console.log(firstThing);
    console.log(secondThing);
    console.log(thirdThing);
    console.log(fourthThing);
    console.log(allThings);
    console.log(returnThings);

    if (firstThing && secondThing && thirdThing && fourthThing){
      $("#things").fadeOut();
      $("#answer").fadeIn();
      $("#answer").append(returnThings);
      //HOW TO DISPLAY AS LIST ITEMS??


    } else {
      alert("Please just fill out the damn form!");
    }

  });
});
