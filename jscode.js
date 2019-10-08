function addLine() {
  var hidtable = document.getElementById("hiddenTable"); //prende id della tabella nascosta
  var row = document.getElementById("hiddenRow"); //prende riga template dalla tabella nascosta
  var clone = row.cloneNode(true); //clona riga template
  var table = document.getElementById("indexTable"); //prende id della tabella
  table.appendChild(clone); //inserisce riga alla fine della tabella
}

function removeLine() {
  document.getElementById("indexTable").deleteRow(-1); //cancella ultima riga con -1
}
