var g = G$("Sneha", "Ravichandran");
g.greet();//initial test
g.greet(true).setLang('t').greet().log(); //testing method chaining

//when the login button is clicked we call Greetr to greet the individual
$("#login").click(function() {
  //we get the first and lastname from the textboxes in the html doc
  var loginGreetr = G$($("#fName").val(), $("#lName").val());
  $('#logindiv').hide();
  //we set the language based on the dropdown option
  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting',
  //this function generates a random number between 0 and 1
  //so the greeting is randomly formal or informal
  (function(){
    var y = Math.random();
    if(y<0.5) y =Math.floor(y);
    else y= Math.ceil(y);
    return y;
  })()).log();
});
