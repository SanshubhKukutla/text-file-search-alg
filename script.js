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
searchBarTxt.addEventListener("keydown", check)

function check(e){
  if(e.key === "Enter"){
    searchActivity();
  }
}


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
  //console.log("searching");
}

let lines = []
function updateLines(text) {
  let line = "";
  for (let i = 0; i < text.length; i++) {
      if (text[i] == "/n") {
        lines.append(line);
        line = "";
      }
      else {
        line += text[i];
      }
  }
}


//reading a file

document.getElementById('inputfile')
.addEventListener('change', function() {
  
  var fr=new FileReader();
  fr.onload=function(){
    document.getElementById('output')
    .textContent=fr.result;
    updateLines(fr.result);
    console.log(fr.result);
    console.log(lines);
  }
  
  fr.readAsText(this.files[0]);
})

//search key to file 





