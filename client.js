$(document).ready(readyNow);
function readyNow() {
  //submit click listener
  $('#submit').on('click', submitClickHandler);
  $('#employee-table').on('click', '#delete', deleteClickHandler);
}
let monthlyCounter = 0;
// let employees = [];
// const employeeObject = {
//   firstName: firstNameInput,
//   lastName: lastNameInput,
//   idNumber: idNumberInput,
//   jobTitle: jobTitleInput,
//   annualSalary: annualSalaryInput,
// };
//function to collect the info and append to dom
function submitClickHandler() {
  let firstNameInput = $('#first-name-in').val();
  let lastNameInput = $('#last-name-in').val();
  let idNumberInput = $('#id-number-in').val();
  let jobTitleInput = $('#job-title-in').val();
  let annualSalaryInput = $('#annual-salary-in').val();
  // employees.push(employeeObject);

  $('#employee-table').append(`<tr>
  <td class ='table-row'>${firstNameInput}</td>
  <td class ='table-row'>${lastNameInput}</td>
  <td class ='table-row'>${idNumberInput}</td>
  <td class ='table-row'>${jobTitleInput}</td>
  <td class ='table-row'>${annualSalaryInput}</td>
  <td class ='table-row'> <button id="delete">Delete</button</td>`);
  // add annual salary to total monthly costs and append to the DOM

  monthlyCounter += Number($('#annual-salary-in').val());
  $('.monthly-counter').empty();
  $('.monthly-counter').append(monthlyCounter);
  $('input').val('');
  // If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
  if (monthlyCounter > 20000) {
    $('.total-monthly').addClass('monthlyCounterRed');
  }
}
//delete button, deletes the entire employee row when clicked on.
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
