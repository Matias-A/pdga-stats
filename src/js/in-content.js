let elems = document.getElementsByClassName("pane-page-title");
if (elems[0] !== undefined) {
    let elemdiv1 = elems[0];
    let elemdiv2 = elemdiv1.getElementsByClassName("pane-content")[0];
    if (elemdiv2 !== undefined) {
        let text = elemdiv2.getElementsByTagName("h1")[0];
        text.innerHTML += " (extension working)";
    }
}

let tables = document.getElementsByClassName("tablesorter");
console.log(tables);
console.log(tables.length);
for (let i = 0; i < tables.length; i++) {
    let table = tables[i];

    console.log(table);
    let rows = table.getElementsByTagName("tr");
    for (let j = 0; j < rows.length; j++) {
        let row = rows[j];
        let newCell = row.insertCell(-1);
        newCell.innerHTML = "(empty)"
    };

};
