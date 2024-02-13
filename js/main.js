// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


document.getElementById('ultimateFrisbeeButton').addEventListener('click', getRolled);

function getRolled() {
  // Change the variables below to your liking
  const currentURL = "https://shattereddisk.github.io/rickroll/rickroll.mp4";
  const pageTitle = "Loading...";
  // End of changable variables

    document.title = pageTitle;

    window.location.href = currentURL;
    console.log("test");
}

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
