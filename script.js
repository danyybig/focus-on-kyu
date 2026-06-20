const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPiYKCStjKXjp7BD1pnBVxwhRDM-pnZS3RUCQ1K9SAA2QW1CsmOOvy-s8EgVRrG71pyMXBIg_UfERZ/pub?output=csv";

function convertGoogleDriveLink(url) {
const match = url.match(//d/([a-zA-Z0-9_-]+)/);

```
if (!match) {
    return url;
}

const fileId = match[1];

return `https://drive.google.com/uc?export=view&id=${fileId}`;
```

}

fetch(SHEET_URL)
.then(response => response.text())
.then(csv => {
const rows = csv.trim().split("\n").slice(1);

```
    const container = document.getElementById("letters-container");

    rows.forEach(row => {
        const rawUrl = row.trim();

        if (!rawUrl) return;

        const imageUrl = convertGoogleDriveLink(rawUrl);

        const card = document.createElement("div");
        card.className = "letter";

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Fan Letter";
        img.loading = "lazy";

        img.onerror = () => {
            console.error("Failed to load image:", rawUrl);
            card.remove();
        };

        card.appendChild(img);
        container.appendChild(card);
    });
})
.catch(error => {
    console.error("Error loading sheet:", error);
});
```
