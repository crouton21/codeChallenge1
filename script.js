$(document).ready(function(){
  $('#generateButton').on('click', createDiv);
  $('#boxes').on('click', '.swapButton', swapColors);
  $('#boxes').on('click', '.deleteButton', deleteDiv);
})

var clickedCount = 0;
var boxesArray = [];

function createDiv(){
  clickedCount += 1;
  boxesArray.push('<div class="redDiv"><p>'+clickedCount+'</p></div>');
  displayDiv();
}

function displayDiv(){
  console.log('in displayDiv');
  $('#boxes').empty();
  for (var i=0; i<boxesArray.length; i++){ //0, 1, 2
    $('#boxes').append(boxesArray[i]); //boxesArray[0], boxesArray[1], boxesArray[2]
    $('.redDiv:last').append('<button class="swapButton">Swap</button>');
    $('.redDiv:last').append('<button class="deleteButton" data-id="'+i+'">Delete</button>'); //0 , 1, 2
  }
}

function swapColors(){
  console.log('in swap colors');
  console.log($(this).parent().hasClass('redDiv'));
  if ( $(this).parent().hasClass('redDiv')){
    console.log('in if statement');
    $(this).parent().removeClass('redDiv');
    $(this).parent().addClass('yellowDiv');
  }
  else{
    console.log('in else statement');
    $(this).parent().removeClass('yellowDiv');
    $(this).parent().addClass('redDiv');
  }
}

function deleteDiv(){
  console.log('in deleteDiv');
  console.log($(this).data('id'));
  //$(this).parent().remove();
  var index = $(this).data('id');
  boxesArray.splice(index, 1);
  displayDiv();
}
