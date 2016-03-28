var bookLook = function (){

  var userInput = function(title, author, description, url, pages, minutes){
    // $('#bookreview-template').empty();
 var book = {
              title: title,
              author: author,
              description: description,
              url: url,
              pages: pages,
              minutes: function(){
                  timeTaken = pages / minutes;
                  return timeTaken

                  } /*End minutes method */
  

     } /*End Object*/
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

// 

var app = bookLook();




$('#submit').on('click', function (e) {
  e.preventDefault();
  var title = $('#inputTitle').val();
  var author = $('#inputAuthor').val();
  var description = $('#inputDescription').val();
  var url = $('#inputURL').val();
  var pages = $('#inputPages').val();
  var minutes = $('#inputMinutes').val();
app.userInput(title, author, description, url, pages, minutes);

});



// ********Works********
// var books = [ 
//    {title: "title", author: "author"}    
// ]


// var source = $('#bookreview-template').html();
// var template = Handlebars.compile(source);
// var newHTML = template(books[0]);

// $('.bookContainer').append(newHTML);
