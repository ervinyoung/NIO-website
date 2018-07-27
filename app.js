console.log("hello world");

$(document).ready(function(){
  console.log('jquery sanity check');
    $('#c2').hide();
    $('#c3').hide();

    $('#firstCar').click(function(){
      console.log('1st');
      $('#c1').show();
      $('#c2').hide();
      $('#c3').hide();
    });
    $('#secondCar').click(function(){
      console.log('2nd');
      $('#c1').hide();
      $('#c2').show();
      $('#c3').hide();
    });
    $('#thirdCar').click(function(){
      console.log('3rd');
      $('#c1').hide();
      $('#c2').hide();
      $('#c3').show();
    });

}) //close document.ready
