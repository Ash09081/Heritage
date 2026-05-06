window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

const modal = document.getElementById("modal");
const lightbox = document.getElementById("lightbox");

// OPEN MODAL
document.querySelectorAll(".site-card").forEach(card => {
  card.addEventListener("click", () => openModal(card));
});

function openModal(card) {
  modal.style.display = "flex";

  document.getElementById("modalTitle").textContent = card.dataset.title;
  document.getElementById("modalLocation").textContent = card.dataset.location;
  document.getElementById("modalIntro").textContent = card.dataset.intro;
  document.getElementById("modalStory").innerHTML = card.dataset.story;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = "";

  const images = card.dataset.images
  .split("|")
  .filter(item => item.trim() !== "");

for (let i = 0; i < images.length; i += 2) {
  const imgSrc = images[i];
  const caption = images[i + 1] || "";

  if (!imgSrc) continue;

  const img = document.createElement("img");
  img.src = imgSrc.trim();
  img.alt = caption.trim();

  img.onclick = () => {
    document.getElementById("lightboxImg").src = img.src;
    document.getElementById("lightboxCaption").textContent = img.alt;
    lightbox.style.display = "flex";
  };

  gallery.appendChild(img);
}

  document.getElementById("modalMap").src = card.dataset.map;
}

// CLOSE BUTTON
document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// CLOSE WHEN CLICK OUTSIDE
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ESC KEY CLOSE
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    lightbox.style.display = "none";
  }
});

// LIGHTBOX CLOSE
lightbox.onclick = () => {
  lightbox.style.display = "none";
};