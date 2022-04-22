// store a reference to our file handle


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


  legit_lines = []
  for (line_index in lines) {
    console.log(document.getElementById(lineIndex).classList);
    // document.getElementById(lineIndex).classList.remove("highlighted");
  }

  for (line_index in lines) {
    let line = lines[line_index]
    if (line.search(searchBarTxt.value) != -1) {
      document.getElementById(line_index).classList.add("highlighted");
      console.log(document.getElementById(line_index).classList)
    }
  }

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
    newHTML += "<a id= " + lineIndex + " class=line>" + lines[lineIndex] + "<a>";
  }
  document.getElementById("output").innerHTML = newHTML;
}

//reading a file

document.getElementById('inputfile')
.addEventListener('change', function() {
  
  var fr=new FileReader();
  fr.onload=function(){
    updateLines(fr.result); 
  }
  
  fr.readAsText(this.files[0]);
})

//search key to file 






