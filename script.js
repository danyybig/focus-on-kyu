const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPiYKCStjKXjp7BD1pnBVxwhRDM-pnZS3RUCQ1K9SAA2QW1CsmOOvy-s8EgVRrG71pyMXBIg_UfERZ/pub?output=csv";

fetch(SHEET_URL)
  .then(response => response.text())
  .then(csv => {
    const rows = csv.trim().split("\n").slice(1);

    const container = document.getElementById("letters-container");

    rows.forEach(row => {
      const imageUrl = row.trim();

      if (!imageUrl) return;

      const card = document.createElement("div");
      card.className = "letter";

      card.innerHTML = `
        <img src="${imageUrl}" alt="Fan Letter">
      `;

      container.appendChild(card);
    });
  });
