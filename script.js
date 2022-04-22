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


  legitLines = []
  let newHTML = "";
  for (lineIndex in lines) {
    let line = lines[lineIndex]
    if (line.search(searchBarTxt.value) != -1) {
      legitLines.push(lineIndex);
      newHTML += "<a id= \"" + lineIndex + "\" class=\"line highlighted\">" + lines[lineIndex] + "<a>";

    }

    else {
      newHTML += "<a id=\" " + lineIndex + "\" class=\"line\">" + lines[lineIndex] + "<a>";
    }
    document.getElementById("output").innerHTML = newHTML;

  }

  searchBarTxt.value = null;
}

function searchFile() {
  //alert("search")
  //console.log("searching");
}

var lines = []
var legitLines = []
function updateLines(text) {
  lines = [];
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





