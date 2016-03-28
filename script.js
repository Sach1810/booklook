

var dataFetch = function (data){

}

var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=0439023521',
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
fetch();





// ********Works********
// var books = [ 
//    {title: "title", author: "author"}    
// ]


// var source = $('#bookreview-template').html();
// var template = Handlebars.compile(source);
// var newHTML = template(books[0]);

// $('.bookContainer').append(newHTML);
