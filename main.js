$(document).ready(function(){
  $('.SearchClass').on('keyup',function(){
      var searchTerm = $(this).val().toLowerCase();
      $('#paitentList tbody tr').each(function(){
          var lineStr = $(this).text().toLowerCase();
          if(lineStr.indexOf(searchTerm) === -1){
              $(this).hide();
          }else{
              $(this).show();
          }
      });
  });
});
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
  var selectedRow = null

function onFormSubmit(){
  var formData = readFormData();
  if(selectedRow == null)
    insertNewRecord(formData);
  else
  updateRecord(formData)
  resetForm();
}

function readFormData(){

  var formData = {}; 
  formData["Name"] = document.getElementById("Name").value;
  formData["Age"] = document.getElementById("Age").value;
  formData["Contact"] = document.getElementById("Contact").value;
  formData["Disease"] = document.getElementById("Disease").value;
  return formData;
}

function insertNewRecord(data){

  var table = document.getElementById("paitentList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Age;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Contact;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Disease;

  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button class="w3-button w3-black" onClick="onEdit(this)">EDIT</button>
                     <button class="w3-button w3-black" onClick="onDelete(this)">DELETE</button>`;

}
function resetForm(){
  document.getElementById('Name').value ="";
  document.getElementById('Age').value ="";
  document.getElementById('Contact').value ="";
  document.getElementById('Disease').value ="";
}

function onEdit(td){

  selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Contact').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Disease').value = selectedRow.cells[3].innerHTML;
}
function onDelete(td){
  row = td.parentElement.parentElement;
  document.getElementById("paitentList").deleteRow(row.rowIndex);
  resetForm();

}
function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.Name;
  selectedRow.cells[1].innerHTML = formData.Age;
  selectedRow.cells[2].innerHTML = formData.Contact;
  selectedRow.cells[3].innerHTML = formData.Disease;
}