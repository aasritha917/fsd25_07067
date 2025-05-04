for (let key in data) {
    let user = data[key];
    let row = document.createElement("tr");
    row.id = `row-${key}`; // Assign a unique row ID
  
    let nameCell = document.createElement("td");
    nameCell.textContent = user.name;
  
    let emailCell = document.createElement("td");
    emailCell.textContent = user.email;
  
    let deleteCell = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteUser(key);
  
    deleteCell.appendChild(deleteBtn);
  
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(deleteCell);
    tableBody.appendChild(row);
  }
  