// Event listener for the Calculate button
document.getElementById("calculateBtn").addEventListener("click", function() {
    // Get values from input fields
    let retailApplications = document.getElementById("retailApplications").value;
    let retailLots = document.getElementById("retailLots").value;

    let niiApplications = document.getElementById("niiApplications").value;
    let niiLots = document.getElementById("niiLots").value;

    // Validate if the inputs are numeric and greater than 0
    if (!isPositiveInteger(retailApplications) || !isPositiveInteger(retailLots) ||
        !isPositiveInteger(niiApplications) || !isPositiveInteger(niiLots)) {
        alert("Please enter valid positive integers.");
        return;
    }

    // Convert values to integers
    retailApplications = parseInt(retailApplications);
    retailLots = parseInt(retailLots);
    niiApplications = parseInt(niiApplications);
    niiLots = parseInt(niiLots);

    // Calculate chances of allotment
    let retailChance = (retailLots / retailApplications) * 100;
    let niiChance = (niiLots / niiApplications) * 100;
    let sNiiChance = ((niiLots / 3) / niiApplications) * 100;
    let hNiiChance = ((2 * niiLots / 3) / niiApplications) * 100;

    // Display results
    let resultsHTML = `
        <p><strong>Retail Chances of Allotment:</strong> ${retailChance.toFixed(2)}%</p>
        <p><strong>NII Chances of Allotment:</strong> ${niiChance.toFixed(2)}%</p>
        <p><strong>sNII Chances of Allotment:</strong> ${sNiiChance.toFixed(2)}%</p>
        <p><strong>HNII Chances of Allotment:</strong> ${hNiiChance.toFixed(2)}%</p>
    `;

    document.getElementById("results").innerHTML = resultsHTML;
});

// Event listener for the Reset button
document.getElementById("resetBtn").addEventListener("click", function() {
    // Clear input fields
    document.getElementById("retailApplications").value = '';
    document.getElementById("retailLots").value = '';
    document.getElementById("niiApplications").value = '';
    document.getElementById("niiLots").value = '';
    
    // Clear results area
    document.getElementById("results").innerHTML = '<p><strong>Results will appear here...</strong></p>';
});

// Function to check if a value is a positive integer
function isPositiveInteger(value) {
    return /^[1-9]\d*$/.test(value); // Regex to check if the value is a positive integer
}


// " for retail it is subscribed 409.42 times while the total subscribed applications are 5,83,828 and the total number of lots offered are 1426.
// for NII category it is subscribed 504.45 times while the total subscribed applications are 44,473 and the total number of lots offered are 611. "

// i want to know which one has more chances of allotment now
// if NII has two sub categories sNII(1/3 of number of lots of NII) and HNII(2/3 of number of lots of NII), which one of retail and sni now has better chance
// make an android mobile application for when i would give input of Total subscription, Total applications and Total lots offered for retail and NII category, i would get chances of two main category and two sub categories.