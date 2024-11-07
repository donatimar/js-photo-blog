fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((post) => {
    const photoContainer = document.getElementById("photoContainer");

    post.forEach((photo) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4 d-flex";

      const photoDiv = document.createElement("div");
      photoDiv.className =
        "d-flex flex-column h-100 border text-center p-3 position-relative";
      photoDiv.style.backgroundColor = "white";

      // Img pin
      const pin = document.createElement("div");
      pin.className = "pin";
      const pinImg = document.createElement("img");
      pinImg.src = "./img/pin.svg";
      pin.appendChild(pinImg);
      photoDiv.appendChild(pin);

      // Img
      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;
      img.className = "img-fluid";

      // Img Title
      const title = document.createElement("p");
      title.className = "fst-italic mt-3 mb-0";
      title.textContent = photo.title;

      // Aggiungi img e title
      photoDiv.appendChild(img);
      photoDiv.appendChild(title);
      col.appendChild(photoDiv);
      photoContainer.appendChild(col);
    });
  })
  .catch((error) =>
    console.error("Errore durante il caricamento delle immagini:", error)
  );
