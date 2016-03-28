var urlISBN

var dataFetch = function (data){
 var isbn = $('#inputISBN').val();
 $('.bookContainer').empty();
 for (var i = 0; i < data.items.length;i++ ){
        if (i === 10){
          break
        } else { 
 var book = {
              title: data.items[i].volumeInfo.title,
              author: data.items[i].volumeInfo.authors[i],
              description: data.items[i].volumeInfo.description,
              url: data.items[i].volumeInfo.imageLinks.smallThumbnail,
              pages: data.items[i].volumeInfo.pageCount
     } /*End Object*/
app.userInput(book);
    }/* *****End if statement ******/
  } /* *****End for loop****** */
  app.expand();
}

var fetch = function () {

  var url = 'https://www.googleapis.com/books/v1/volumes?q=' + urlISBN;

  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
    beforeSend: function () {
               $(".loading").show();
            },
    success: function(data) {
      console.log(data);
      dataFetch(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    },
    complete: function () {
                $(".loading").hide();
            }
  });
};

var bookLook = function (){

  var userInput = function(book){

    var source = $('#bookreview-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(book);

$('.bookContainer').append(newHTML);


  } /* *****End userInput***** */

  var expand = function(){
    $('.bookFound').on('click', function (e) {
  e.preventDefault();
  console.log(this);
  $(this).children().siblings('.toggle').toggleClass('show')
});
  }

  return {
  userInput: userInput,
  expand: expand
  }

} /* *****End bookLook***** */
 
var app = bookLook();
$(".loading").hide();

$('#submit').on('click', function (e) {
  e.preventDefault();
  var isbn = $('#inputISBN').val();
  urlISBN = isbn;
  
  fetch();
});




