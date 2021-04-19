let currUrl = location.href;
let numRe = /.*\/player\/(\d+)(?:\/|$).*/
let match = currUrl.match(numRe);
// TODO: figure out if this is a stable way to find the PDGA number
const pdgaNumber = match[1];

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
        // Fetches the web page for this tournament using jQuery
        $.get(tournamentLink, (page) => {
            $("table.results", page).each((_, table) => {
                let numRows = $("tr", table).length-1;
                $("tr", table).each((_, playerRow) => {
                    let num = $("td.pdga-number", playerRow).text();
                    if (num === pdgaNumber) {
                        // This means that the current table is the correct division
                        // And the currect row corresponds to the correct player
                        let numRounds = $("td.round-rating", playerRow).length;
                        let numProcessed = 0;
                        let ratings = [];
                        $("td.round-rating", playerRow).each((_, cell) => {
                            let rating = $(cell).text();
                            if (rating) {
                                rating = parseInt(rating);
                                ratings.push(rating);
                            }
                            numProcessed += 1;
                            if (numProcessed === numRounds) {
                                updateData(row, {
                                    ratings: ratings,
                                });
                            }
                        });
                    }
                })
                //console.log($(table).html());
            });
        });
        //break; // TODO: delete this row
    }
}

// Takes the relevant data found in fetchData,
// updates the newly added columns in this specific row
function updateData(row, data) {
    const roundRatings = data.ratings;
    const numRounds = roundRatings.length;
    const ratingSum = roundRatings.reduce((a, b) => a + b, 0);
    const ratingAvg = (ratingSum / numRounds) || 0;

    // Average rating (hard coded for now)
    let ratingAvgCell = row.getElementsByClassName("average-round-rating")[0];
    ratingAvgCell.innerHTML = Math.round(ratingAvg);
    // Num of rounds (hard coded for now)
    let numRoundsCell = row.getElementsByClassName("number-of-rounds")[0];
    numRoundsCell.innerHTML = numRounds;
}
