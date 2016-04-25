// Write your Pizza Builder JavaScript in this file.


// var pepperonni_button = $(.btn-pepperonni)
// var pepperonni_button = $(.btn-mushrooms)
// var pepperonni_button = $(.btn-green-peppers)

var pepperoniPrice = function(){
  if ($(".pep").hasClass("hidden")){
  return 0;
  }
  else{
    return 1;
  }
}

var mushroomsPrice = function(){
  if ($(".mushroom").hasClass("hidden")){
  return 0;
  }
  else{
    return 1;
  }
}

var peppersPrice = function(){
  if ($(".green-pepper").hasClass("hidden")){
  return 0;
  }
  else{
    return 1;
  }
}

var saucePrice = function(){
  if ($(".sauce").hasClass("sauce-white")){
  return 3;
  }
  else{
    return 0;
  }
}

var crustPrice = function(){
  if ($(".crust").hasClass("crust-gluten-free")){
  return 5;
  }
  else{
    return 0;
  }
}

var totalPrice = function(){
  var basePrice = 10;
  var finalPrice = basePrice + pepperoniPrice() + mushroomsPrice() + peppersPrice() + saucePrice() + crustPrice();
  return finalPrice;
}



$(".btn-pepperonni").click(function(){
  $(".pep").toggleClass("hidden");
  if ($(".pep").hasClass("hidden")){
    $(".btn-pepperonni").text("Add pepperoni");
    $(".btn-pepperonni").removeClass("active");
    $(".pepperoni-price").addClass("hidden");
  }
  else{
    $(".btn-pepperonni").text("Remove pepperoni");
    $(".btn-pepperonni").addClass("active");
    $(".pepperoni-price").removeClass("hidden");
  }
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggleClass("hidden");
  if ($(".mushroom").hasClass("hidden")){
    $(".btn-mushrooms").text("Add mushrooms");
    $(".btn-mushrooms").removeClass("active");
    $(".mushroom-price").addClass("hidden")
  }
  else{
    $(".btn-mushrooms").text("Remove mushrooms");
    $(".btn-mushrooms").addClass("active");
    $(".mushroom-price").removeClass("hidden");
  }
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggleClass("hidden");
  if ($(".green-pepper").hasClass("hidden")){
    $(".btn-green-peppers").text("Add peppers");
    $(".btn-green-peppers").removeClass("active");
    $(".pepper-price").addClass("hidden");
  }
  else{
    $(".btn-green-peppers").text("Remove peppers");
    $(".btn-green-peppers").addClass("active")
    $(".pepper-price").removeClass("hidden");
  }
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  if ($(".crust").hasClass("crust-gluten-free")){
    $(".btn-crust").text("Normal crust");
    $(".crust-price").removeClass("hidden");
  }
  else{
    $(".btn-crust").text("Gluten-free crust")
    $(".crust-price").addClass("hidden");
  }
});

$(".btn-sauce ").click(function(){
  $(".sauce").toggleClass("sauce-white");
  if ($(".sauce").hasClass("sauce-white")){
    $(".btn-sauce").text("Regular sauce");
    $(".sauce-price").removeClass("hidden");
  }else {
      $(".btn-sauce").text("White sauce");
      $(".sauce-price").addClass("hidden");
  }
});

$(".btn").click(function(){
  $("#final-price").text("$" + totalPrice())
});
