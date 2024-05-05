// var book = ePub();
// var rendition;

var inputElement = document.getElementById("input-path");

inputElement.addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (window.FileReader) {
          var reader = new FileReader();
          reader.onload = function (e) {
            openBook(e, file.name);
        };
          reader.readAsArrayBuffer(file);
      }
  });

function openBook(e, fileName){
  var bookData = e.target.result;
  var bookPath = "../books/" + fileName;
  var title = document.getElementById("title");
  var next = document.getElementById("next");
  var prev = document.getElementById("prev");

  window.reader = ePubReader(bookPath, {
    restore: true
});

//   book.open(bookData, "epub");

//   rendition = book.renderTo("viewer", {
//     width: "100%",
//     height: 600
//   });

//   rendition.display();
  
//   var keyListener = function(e){

//     // Left Key
//     if ((e.keyCode || e.which) == 37) {
//       rendition.prev();
//     }

//     // Right Key
//     if ((e.keyCode || e.which) == 39) {
//       rendition.next();
//     }

//   };

//   rendition.on("keyup", keyListener);
//   rendition.on("relocated", function(location){
//     console.log(location);
//   });

//   next.addEventListener("click", function(e){
//     rendition.next();
//     e.preventDefault();
//   }, false);

//   prev.addEventListener("click", function(e){
//     rendition.prev();
//     e.preventDefault();
//   }, false);

//   document.addEventListener("keyup", keyListener, false);
}