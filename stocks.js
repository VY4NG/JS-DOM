// Using HTML, Bootstrap, and JavaScript create a single page website that
// contains the following:
//  - A Bootstrap styled table representing your choice of data.
//  - A Bootstrap styled form that allows a user to add a new row to the table when
//    clicking on submit.

let id = 0

document.getElementById('add').addEventListener('click', () => {
    let dateAdded = new Date()
    let table = document.getElementById('list')
    let row = table.insertRow(1)  // Adding new row starting at row 1, since row 0 are the table headers.
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = document.getElementById('new-company').value
    row.insertCell(1).innerHTML = document.getElementById('new-ticker').value
    row.insertCell(2).innerHTML = `${dateAdded.getFullYear()}-${dateAdded.getMonth() + 1}-${dateAdded.getDate()}`
    row.insertCell(3).innerHTML = document.getElementById('new-price').value
    let removeFromList = row.insertCell(4)
    removeFromList.appendChild(createRemoveButton(id++))
    document.getElementById('new-company').value = ''
})

/*
The createRemoveButton creates a button and binds the onclick method to that button so that it will 
delete that row when clicked. It then gets called and returns that button to append child to our 
Remove From List column.
*/

function createRemoveButton(id) {
    let btn = document.createElement('button')
    btn.className = 'btn btn-success'
    btn.id = id
    btn.innerHTML = 'Remove'
    btn.onclick = () => {
        console.log(`Removing row with id: item-${id}`)
        let elementToDelete = document.getElementById(`item-${id}`)
        elementToDelete.parentNode.removeChild(elementToDelete)
    }
    return btn
}