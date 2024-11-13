fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  // attendi la promise e chiama il metodo json
  .then((response) => response.json())
  .then((posts) => {
    const photoContainer = document.getElementById("photoContainer");

    posts.forEach((post) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";

      const photoDiv = document.createElement("div");
      photoDiv.className =
        "post-container d-flex flex-column h-100 border text-center p-3 position-relative white-background";

      // Img pin
      const pin = document.createElement("div");
      pin.className = "pin";
      const pinImg = document.createElement("img");
      pinImg.src = "./img/pin.svg";
      pin.appendChild(pinImg);
      photoDiv.appendChild(pin);

      // Img
      const img = document.createElement("img");
      img.src = post.url;
      img.alt = post.title;
      img.className = "img-fluid";

      // Title
      const title = document.createElement("p");
      title.className = "fst-italic fs-5 mt-3 mb-0 text-start text-capitalize";
      title.textContent = post.title;

      // Aggiungi img e title
      photoDiv.appendChild(img);
      photoDiv.appendChild(title);
      col.appendChild(photoDiv);
      photoContainer.appendChild(col);

      // Aggiungi addEventListener ai post
      photoDiv.addEventListener("click", () => {
        const overlay = document.getElementById("overlay");
        const overlayImage = overlay.querySelector("img");
        overlayImage.src = post.url;
        overlay.style.display = "flex";
      });
    });
  })
  .catch((error) =>
    console.error("Errore durante il caricamento delle immagini", error)
  );

// Gestione pulsante di chiusura overlay
document.getElementById("closeOverlay").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
});
