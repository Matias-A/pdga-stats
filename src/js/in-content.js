let tablesLoaded = false;
let extraCols = [
    {
        "name" : "# Rounds"
    }
]

document.addEventListener('readystatechange', (event) => {
    // Prevents infinite loops when new data is loaded
    if (tablesLoaded) return;

    let tables = document.getElementsByClassName("tablesorter");
    // Waits until the table is populated
    if (tables.length === 0) return;

    for (let i = 0; i < tables.length; i++) {
        let table = tables[i];
        console.log(table);

        let thead = table.getElementsByTagName("thead");
        let headerRows = thead[0].getElementsByTagName("tr");
        let tbody = table.getElementsByTagName("tbody");
        let bodyRows = tbody[0].getElementsByTagName("tr");

        // Adds each of the extra columns and fetches the relevant data
        for (let j=0; j<extraCols.length; j++) {
            // First updates the column header
            let columnHeader = document.createElement("TH");
            let columnHeaderDiv = document.createElement("DIV");
            columnHeaderDiv.innerHTML = extraCols[j].name;
            columnHeaderDiv.className = "tablesorter-header-inner";
            columnHeader.appendChild(columnHeaderDiv);
            headerRows[0].appendChild(columnHeader);

            for (let k=0; k<bodyRows.length; k++) {
                let row = bodyRows[k];
                let newCell = row.insertCell(-1);
                newCell.innerHTML = "(loading...)"
            };
        }
    };

    tablesLoaded = true;
});
