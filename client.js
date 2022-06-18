$(document).ready(readyNow);
function readyNow() {
  //submit click listener
  $('#submit').on('click', submitClickHandler);
  $('#employee-table').on('click', '#delete', deleteClickHandler);
}

//function to collect the info and push to dom
function submitClickHandler() {
  let firstName = $('#first-name-in').val();
  let lastName = $('#last-name-in').val();
  let idNumber = $('#id-number-in').val();
  let jobTitle = $('#job-title-in').val();
  let annualSalary = $('#annual-salary-in').val();
  $('#employee-table').append(`<tr>
  <td class ='table-row'>${firstName}</td>
  <td class ='table-row'>${lastName}</td>
  <td class ='table-row'>${idNumber}</td>
  <td class ='table-row'>${jobTitle}</td>
  <td class ='table-row'>${annualSalary}</td>
  <td class ='table-row'> <button id="delete">Delete</button</td>`);
  $('input').val('');
}

function deleteClickHandler() {
  $(this).parent().parent().remove();
  console.log('deleted');
}
//The application should have an input form that collects:
// employee:
// first name,
// last name,
//  ID number,
//   job title,
//    annual salary_.

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
