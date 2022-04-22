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
  legit_lines = []

  for (line_index in lines) {
    let line = lines[line_index]
    console.log(line)
    if (line.search(searchBarTxt.value) != -1) {
      legit_lines.push(line)
    }
  }
  console.log(legit_lines)
  searchBarTxt.value = null;
}

function searchFile() {
  //alert("search")
  //console.log("searching");
}

var lines = []
var legit_lines = []
function updateLines(text) {
  let line = "";
  for (let i = 0; i < text.length; i++) {
      if (text[i] == "\n") {
        lines.push(line);
        console.log(line);
        line = "";
      }
    // We don't want the return characters
      else if (text[i] != "\r") {
        line += text[i];
      }
  }
  lines.push(line);
  let newHTML = "";
  for (lineIndex in lines) {
    newHTML += "<a id=" + lineIndex + ">" + lines[lineIndex] + "<a>";
    console.log(newHTML);
  }
  console.log(newHTML);
  document.getElementById("output").innerHTML += newHTML;
  console.log(lines);
}

//reading a file

document.getElementById('inputfile')
.addEventListener('change', function() {
  
  var fr=new FileReader();
  fr.onload=function(){
    console.log(lines);
    updateLines(fr.result); 
    console.log("called");
  }
  
  fr.readAsText(this.files[0]);
})

//search key to file 






