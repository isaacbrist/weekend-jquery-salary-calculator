$(document).ready(readyNow);
function readyNow() {
  //submit click listener
  $('#submit').on('click', submitClickHandler);
  $('#employee-table').on('click', '#delete', deleteClickHandler);
}
let monthlyCounter = 0;

//function to collect the info and append to dom
function submitClickHandler() {
  let firstNameInput = $('#first-name-in').val();
  let lastNameInput = $('#last-name-in').val();
  let idNumberInput = $('#id-number-in').val();
  let jobTitleInput = $('#job-title-in').val();
  let annualSalaryInput = $('#annual-salary-in').val();

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

// I wasn't sure if it was required to create an object for all of the employees.
//However, since there was no need for that sort of functionality, I opted to just create variables instead.
//This is the beginning of the code that I would use if I needed to create an object to store their information, .
// let employees = [];
// const employeeObject = {
//   firstName: firstNameInput,
//   lastName: lastNameInput,
//   idNumber: idNumberInput,
//   jobTitle: jobTitleInput,
//   annualSalary: annualSalaryInput,
// };
