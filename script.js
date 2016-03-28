var urlISBN

var dataFetch = function (data){
 var isbn = $('#inputISBN').val();
 console.log(isbn);
 var book = {
              title: data.items[0].volumeInfo.title,
              author: data.items[0].volumeInfo.authors[0],
              description: data.items[0].volumeInfo.description,
              url: data.items[0].volumeInfo.imageLinks.smallThumbnail,
              pages: data.items[0].volumeInfo.pageCount
     } /*End Object*/
app.userInput(book);
}

var fetch = function () {
  var url = 'https://www.googleapis.com/books/v1/volumes?q=' + urlISBN;
  console.log(urlISBN);
  console.log(url);
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
      console.log(data);
      dataFetch(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

var bookLook = function (){

  var userInput = function(book){
console.log(book);

     $('.bookContainer').empty();
    var source = $('#bookreview-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(book);

$('.bookContainer').append(newHTML);

  } /* *****End userInput***** */

  return {
  userInput: userInput
  }

} /* *****End bookLook***** */
 
var app = bookLook();

$('#submit').on('click', function (e) {
  e.preventDefault();
  var isbn = $('#inputISBN').val();
  var isbn1 = parseInt(isbn);
  urlISBN = isbn1;
  console.log(isbn1);
  fetch();
});



