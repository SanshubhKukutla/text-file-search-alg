// store a reference to our file handle

console.log("here");

let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // run file code
  } else if (fileHandle.kind === "directory") {
    // run directory code
  }
}

var txtFile = document
  .getElementById("open_file_explorer")
  .addEventListener("click", getFile);

//code for search btn
var searchBarTxt = document.getElementById("searchBar");

function searchActivity(){
  clearInput();
  searchFile();
}

function clearInput() {
  console.log(searchBarTxt.value);
  searchBarTxt.value = null;
}

function searchFile() {
  //alert("search")
  console.log("searching");
}

