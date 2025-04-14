document.addEventListener("DOMContentLoaded", () => {
  // Title for the table of contents
  const contentsTitle = "Table of Contents";
  // Array to store the HTML elements for the table of contents
  const tableParts = [
    `
<nav role="navigation" id="" class="card bg-primary bg-opacity-10 text-left">
    <header class="card-header bg-gradient">
      <h5 class="card-title text-center">${contentsTitle}</h5>
      <input
        type="button"
        class="btn topcoat-button close float-end bg-danger bg-opacity-50 me-1 my-3"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        value="❌"
      />
    </header>
    <ul class="vstack list-group-flush bg-body-secondary bg-opacity-50 rounded-bottom border py-2">`
  ];

  // Select the #table-of-contents element
  const tableContainer = document.querySelector("#table-of-contents");
  console.log(tableContainer);
  // Select the <main> element
  const main = document.querySelector("main");

  // Find all <h1>, <h2>, <h3>, <h4>, <h5> and <h6> elements within <main>
  const headers = main.querySelectorAll("h1,h2,h3,h4,h5,h6");

  // Define font sizes for each heading level
  const fontSizeMap = {
    h1: "1.3em",
    h2: "1.1em",
    h3: "0.9em",
    h4: "0.7em",
    h5: "0.6em",
    h6: "0.5em"
  };

  // Iterate over each heading and generate table of contents entries
  headers.forEach((header) => {
    let title = header.textContent;
    let link;

    // Check if the heading has an id, if not, add one
    if (!header.id)
    {
      // Create an id based on the heading text
      const id = title.toLowerCase().replace(/\s+/g, "-");
      // Set the id on the heading element
      header.id = id;
    }

    // Now, use the dynamically assigned id for the link
    link = "#" + header.id;

    // Get the heading level (e.g., 'h2', 'h3')
    const level = header.nodeName.toLowerCase();
    // Get the font size from the map, or default to '1em'
    const fontSize = fontSizeMap[level] || "1em";
    // Calculate margin for indentation (except for h1)
    const margin = level === "h1" ? "" : `${(+header.nodeName[1] - 1) * 2}em`;

    // Create a table of contents entry with dynamically set font size and margin
    tableParts.push(
      `<li class="list-group-item p-1" style="margin-left:${margin}; font-size:${fontSize}"><a href="${link}">${title}</a></li>`
    );
  });

  // Close the table of contents HTML structure
  tableParts.push("</ul></nav>", "<style>#table-of-contents { width: 100%; }</style>");

  // Insert the table of contents into the container
  tableContainer.innerHTML = tableParts.join("");
});
