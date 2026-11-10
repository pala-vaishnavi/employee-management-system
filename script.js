
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = document.getElementById("salary").value;

    if (name == "" || id == "" || salary == "") {
        alert("Please enter all details");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = name + " - " + id + " - Rs." + salary;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
}
