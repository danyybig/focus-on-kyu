const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPiYKCStjKXjp7BD1pnBVxwhRDM-pnZS3RUCQ1K9SAA2QW1CsmOOvy-s8EgVRrG71pyMXBIg_UfERZ/pub?output=csv";

function convertGoogleDriveLink(url) {
const match = url.match(//d/([a-zA-Z0-9_-]+)/);

```
if (!match) return null;

return `https://drive.google.com/uc?export=view&id=${match[1]}`;
```

}

fetch(SHEET_URL)
.then(response => response.text())
.then(csv => {
const container = document.getElementById("letters-container");

```
    const rows = csv.trim().split("\n").slice(1);

    rows.forEach(row => {
        const imageUrl = convertGoogleDriveLink(row.trim());

        if (!imageUrl) return;

        const card = document.createElement("div");
        card.className = "letter";

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Fan Letter";

        card.appendChild(img);
        container.appendChild(card);
    });
})
.catch(error => {
    console.error(error);
});
```
