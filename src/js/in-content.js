let tablesLoaded = false;
let extraCols = [
    {
        "name" : "# Rounds",
        "className" : "number-of-rounds"
    },
    {
        "name" : "Avg Rating",
        "className" : "average-round-rating"
    },
];

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
        let tbody = table.getElementsByTagName("tbody");

        let headerRows = thead[0].getElementsByTagName("tr");
        let bodyRows = tbody[0].getElementsByTagName("tr");

        addExtraCols(headerRows[0], bodyRows);
        fetchData(bodyRows);
    };

    // Finally updates tablesLoaded to make sure the function is only run once
    tablesLoaded = true;
});

// Adds each of the extra columns
// Populates the header cell, adds a dummy "loading" message to each body cell
function addExtraCols(headerRow, bodyRows) {
    for (let j=0; j<extraCols.length; j++) {
        // First updates the column header
        let columnHeader = document.createElement("TH");
        let columnHeaderDiv = document.createElement("DIV");
        columnHeaderDiv.innerHTML = extraCols[j].name;
        columnHeaderDiv.className = "tablesorter-header-inner";
        columnHeader.appendChild(columnHeaderDiv);
        headerRow.appendChild(columnHeader);

        // Then adds the "loading" message to each of the rows
        for (let k=0; k<bodyRows.length; k++) {
            let row = bodyRows[k];
            let newCell = row.insertCell(-1);
            newCell.innerHTML = "<i>Loading...</i>"
            newCell.className = extraCols[j].className;
        };
    }
}

// Loops over each row in a table, starting the content fetching process
function fetchData(bodyRows) {
    for (let i=0; i<bodyRows.length; i++) {
        let row = bodyRows[i];
        let tournamentCell = row.getElementsByClassName("tournament")[0];
        let tournamentLink = tournamentCell.getElementsByTagName("a")[0];
        console.log(tournamentLink.href);
        $.get(tournamentLink, (response)=>console.log(response));
    }
}

// Takes the relevant data found in fetchData,
// updates the newly added columns in this specific row
function updateData(row, data) {
    // TODO: fill this in
}
