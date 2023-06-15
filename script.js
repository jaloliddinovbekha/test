// Get the form element
const form = document.getElementById('work-form');

// Get the table body element
const tableBody = document.querySelector('#work-table tbody');

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the form values
    const fullName = document.getElementById('full-name').value;
    const date = document.getElementById('date').value;
    const workDescription = document.getElementById('work-description').value;
    const department = document.getElementById('department').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const timeSpent = document.getElementById('time-spent').value;
    const status = document.getElementById('status').value;

    // Create a new row element
    const newRow = document.createElement('tr');

    // Create the HTML for the new row
    const rowHtml = `
        <td>${fullName}</td>
        <td>${date}</td>
        <td>${workDescription}</td>
        <td>${department}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${timeSpent}</td>
        <td>${status}</td>
        <td><a class="action-btn edit-btn" href="#">Изменить</a></td>
        <td><a class="action-btn delete-btn" href="#">Удалить</a></td>
    `;

    // Set the HTML of the new row
    newRow.innerHTML = rowHtml;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Reset the form
    form.reset();
});

// Event delegation for edit and delete button clicks
tableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit-btn')) {
        const row = e.target.closest('tr');
        const cells = row.querySelectorAll('td');
        
        // Extract the values from the table cells
        const fullName = cells[0].textContent;
        const date = cells[1].textContent;
        const workDescription = cells[2].textContent;
        const department = cells[3].textContent;
        const startTime = cells[4].textContent;
        const endTime = cells[5].textContent;
        const timeSpent = cells[6].textContent;
        const status = cells[7].textContent;

        // Populate the form with the extracted values
        document.getElementById('full-name').value = fullName;
        document.getElementById('date').value = date;
        document.getElementById('work-description').value = workDescription;
        document.getElementById('department').value = department;
        document.getElementById('start-time').value = startTime;
        document.getElementById('end-time').value = endTime;
        document.getElementById('time-spent').value = timeSpent;
        document.getElementById('status').value = status;

        // Remove the row from the table
        tableBody.removeChild(row);
    } else if (e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        
        // Remove the row from the table
        row.remove();
    }
});
