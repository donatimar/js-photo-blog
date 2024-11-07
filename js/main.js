fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((post) => {
    const photoContainer = document.getElementById("photoContainer");

    post.forEach((photo) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";

      const photoDiv = document.createElement("div");
      photoDiv.className = "border text-center";

      // Img
      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;
      img.className = "img-fluid";

      // Img Title
      const title = document.createElement("p");
      title.className = "mt-3";
      title.textContent = photo.title;

      // Aggiung img e title
      photoDiv.appendChild(img);
      photoDiv.appendChild(title);
      col.appendChild(photoDiv);
      photoContainer.appendChild(col);
    });
  })
  .catch((error) =>
    console.error("Errore durante il caricamento delle immagini:", error)
  );
