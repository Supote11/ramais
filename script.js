const searchInput = document.getElementById("searchInput");
const table = document.getElementById("phoneTable");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td");
    let found = false;

    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].textContent.toLowerCase();
      if (cellText.includes(filter)) {
        found = true;
        break;
      }
    }

    row.style.display = found ? "" : "none";
  }
});
