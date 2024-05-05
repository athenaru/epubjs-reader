function openBook(e, fileName){
  var bookData = e.target.result;
  var bookPath = "../books/" + fileName;

  if (typeof window.reader === 'object' && window.reader !== null) {
    console.log("An ePub is already loaded");
    // Clean epub contents
    // HELP
    if (window.reader === null) {
        console.log("ePub has been cleaned");
      }
    }

  if (document.readyState == "complete") {
    console.log("Book Data: ", bookData);
    console.log("Book Path: ", bookPath);
    window.reader = ePubReader(bookPath, {
      restore: true,
      bookData: bookData
    });
  }
}

function handleFileUpload(e) {
  var file = e.target.files[0];
  console.log("File: ", file)

  if (window.FileReader) {
    var reader = new FileReader();
    reader.onload = function (e) {
      openBook(e, file.name);
    };
    reader.readAsArrayBuffer(file);
  }
}

var inputElement = document.getElementById("input-path"); 
inputElement.addEventListener("change", handleFileUpload);