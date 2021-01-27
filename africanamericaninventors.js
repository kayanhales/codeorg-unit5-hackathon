//declare variables
var birthYears = getColumn("African American Inventors and Scientists", "Date of birth / death");
var inventors = getColumn("African American Inventors and Scientists", "Name");
var occupations = getColumn("African American Inventors and Scientists", "Occupation(s)");
var inventions = getColumn("African American Inventors and Scientists", "Inventions / accomplishments");


//create filtered lists
var filteredBirthYears = [];
var filteredInventors = [];
var filteredOccupations = [];
var filteredInventions = [];


//add onevents for buttons
onEvent("1700sButton", "click", function( ) {
  filter1700s();
  updateScreen1700s();
});
onEvent("1700sGoBack", "click", function( ) {
  setScreen("home");
});
onEvent("1800sButton", "click", function( ) {
  filter1800s();
  updateScreen1800s();
});
onEvent("1800sGoBack", "click", function( ) {
  setScreen("home");
});
onEvent("1900sButton", "click", function( ) {
  filter1900s();
  updateScreen1900s();
});
onEvent("1900sGoBack", "click", function( ) {
  setScreen("home");
});
onEvent("unknownButton", "click", function( ) {
  filterUnknown();
  updateScreenUnknown();
});
onEvent("unknownGoBack", "click", function( ) {
  setScreen("home");
});

//reset Lists

function resetFilteredLists(){
  filteredBirthYears = [];
  filteredInventors = [];
  filteredOccupations = [];
  filteredInventions = [];
}

//filter function
function filter1700s() {
  //loop through list of inventors
  //check if birth years starts with '17'
  //if yes, add inventors to filtered lists
  resetFilteredLists();
  for (var i=0; i < inventors.length; i++){
    var firstTwoNumbers = birthYears[i].substring(0,2);
    if (firstTwoNumbers == "17"){
      appendItem(filteredBirthYears, birthYears[i]);
      appendItem(filteredInventors, inventors[i]);
      appendItem(filteredOccupations, occupations[i]);
      appendItem(filteredInventions, inventions[i]);
    }
  }
}

function filter1800s() {
  //loop through list of inventors
  //check if birth years starts with '18'
  //if yes, add inventors to filtered lists
  resetFilteredLists();
  for (var i=0; i < inventors.length; i++){
    var firstTwoNumbers = birthYears[i].substring(0,2);
    if (firstTwoNumbers == "18"){
      appendItem(filteredBirthYears, birthYears[i]);
      appendItem(filteredInventors, inventors[i]);
      appendItem(filteredOccupations, occupations[i]);
      appendItem(filteredInventions, inventions[i]);
    }
  }
}

function filter1900s() {
  //loop through list of inventors
  //check if birth years starts with '19'
  //if yes, add inventors to filtered lists
  resetFilteredLists();
  for (var i=0; i < inventors.length; i++){
    var firstTwoNumbers = birthYears[i].substring(0,2);
    if (firstTwoNumbers == "19"){
      appendItem(filteredBirthYears, birthYears[i]);
      appendItem(filteredInventors, inventors[i]);
      appendItem(filteredOccupations, occupations[i]);
      appendItem(filteredInventions, inventions[i]);
    }
  }
}

function filterUnknown() {
  //loop through list of inventors
  //check if birth years starts with '19'
  //if yes, add inventors to filtered lists
  resetFilteredLists();
  for (var i=0; i < inventors.length; i++){
    var firstTwoNumbers = birthYears[i].substring(0,2);
    if (firstTwoNumbers != "19" && firstTwoNumbers != "18" && firstTwoNumbers != "17"){
      appendItem(filteredBirthYears, birthYears[i]);
      appendItem(filteredInventors, inventors[i]);
      appendItem(filteredOccupations, occupations[i]);
      appendItem(filteredInventions, inventions[i]);
    }
  }
}



//update screen function
function updateScreen1700s() {
  setScreen("1700s");
  var textOutput = "";
  for (var i=0; i<filteredInventors.length; i++){
    var newIndex = i+1;
    textOutput = textOutput + newIndex +". NAME: " +filteredInventors[i] + ", "+ filteredBirthYears[i] + ", "+ filteredOccupations[i] + ", "+ filteredInventions[i]+"\n\n";
  }
  setText("1700sOutput", textOutput);
}


function updateScreen1800s() {
  setScreen("1800s");
  var textOutput = "";
  for (var i=0; i<filteredInventors.length; i++){
    var newIndex = i+1;
    textOutput = textOutput + newIndex +". NAME: " +filteredInventors[i] + ", "+ filteredBirthYears[i] + ", "+ filteredOccupations[i] + ", "+ filteredInventions[i]+"\n\n";
  }
  setText("1800sOutput", textOutput);
}

function updateScreen1900s() {
  setScreen("1900s");
  var textOutput = "";
  for (var i=0; i<filteredInventors.length; i++){
    var newIndex = i+1;
    textOutput = textOutput + newIndex +". NAME: " +filteredInventors[i] + ", "+ filteredBirthYears[i] + ", "+ filteredOccupations[i] + ", "+ filteredInventions[i]+"\n\n";
  }
  setText("1900sOutput", textOutput);
}

function updateScreenUnknown() {
  setScreen("unknown");
  var textOutput = "";
  for (var i=0; i<filteredInventors.length; i++){
    var newIndex = i+1;
    textOutput = textOutput + newIndex +". NAME: " +filteredInventors[i] + ", "+ filteredBirthYears[i] + ", "+ filteredOccupations[i] + ", "+ filteredInventions[i]+"\n\n";
  }
  setText("unknownOutput", textOutput);
}
