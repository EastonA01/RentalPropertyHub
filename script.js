// TODO: Acquire image refs and store them locally on GitHub repository

const properties = [
    {
      name: "Paradise View! - Carolina Beach, NC",
      slug: "paradise-view",
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1283631539165953155/original/24813ea1-2154-4718-85e9-19a337d723c0.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1283631539165953155/original/ac44c9c7-f841-4c72-a16e-d2ad4a0f194e.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1283631539165953155/original/bb48f7a2-175e-4005-946e-1bf2b645703a.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1283631539165953155/original/ca13c1db-f29d-4f19-85f1-fbc5847a7210.jpeg?im_w=1200"
      ],
      link: "https://www.airbnb.com/rooms/1283631539165953155"
    },
    {
      name: "Paradise Found Beachfront Haven - Carolina Beach, NC",
      slug: "paradise-found",
      images: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTExMTg3OTQwNjM1NDE5NDc5NQ%3D%3D/original/bbaa2dc2-ab5d-4cf0-8d35-003adf468cb6.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1111879406354194795/original/3d49ebf1-6678-4d91-b98c-523fe235558b.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTExMTg3OTQwNjM1NDE5NDc5NQ%3D%3D/original/40a8609e-a67c-4784-86f9-11d6d8bc0086.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1111879406354194795/original/07658de7-e531-4a06-969f-18a8f0adf9c6.jpeg?im_w=1440"
      ],
      link: "https://www.airbnb.com/rooms/1111879406354194795"
    },
    {
      name: "Soaring Eagles View - Beech Mountain, NC",
      slug: "soaring-eagles-view",
      images: [
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/AE/image_167189269.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/AE/image_167189270.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/AE/image_167150386.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/AE/image_167150377.jpeg"
      ],
      link: "https://www.carolinacabinrentals.com/Soaring-Eagles-View"
    },
    {
      name: "Pinnacle Ridge Sunrise Sunsets - Beech Mountain, NC",
      slug: "pinnacle-ridge",
      images: [
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167810617.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167683677.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167810615.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167733553.jpeg"
      ],
      link: "https://www.carolinacabinrentals.com/Pinnacle-Ridge-Sunrise-Sunsets"
    },
    {
      name: "Soaring Ravens View - Beech Mountain, NC",
      slug: "soaring-ravens-view",
      images: [
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167713485.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167810972.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167713474.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0E/15/image_167713503.jpeg"
      ],
      link: "https://www.carolinacabinrentals.com/Soaring-Ravens-View"
    },
    {
      name: "What a View - Banner Elk, NC",
      slug: "what-a-view",
      images: [
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/31/image_165319733.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/31/image_165384777.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/31/image_165319698.jpeg",
        "https://gallery.streamlinevrs.com/units-gallery/00/0C/31/image_165319701.jpeg"
      ],
      link: "https://www.carolinacabinrentals.com/What-A-View"
    },
    {
      name: "The Nautilus - Marathon, FL",
      slug: "the-nautilus",
      images: [
        "https://cdn.liverez.com/5/13569/1/190622/800/3.jpg?v=12/31/2024%2010:50:37%20AM",
        "https://cdn.liverez.com/5/13569/1/190622/800/9.jpg?v=12/31/2024%2010:50:42%20AM",
        "https://cdn.liverez.com/5/13569/1/190622/800/15.jpg?v=12/31/2024%2010:50:47%20AM",
        "https://cdn.liverez.com/5/13569/1/190622/800/28.jpg?v=12/31/2024%2010:50:57%20AM"
      ],
      link: "https://www.vacationrentalsofthefloridakeys.com/vacation-rental-home.asp?PageDataID=190622"
    }
  ];
  

const featuredContainer = document.getElementById('featured-property'); // new div for featured
const propertiesContainer = document.getElementById('properties-container'); // existing container

// Get the query parameter "rental" from the URL
const params = new URLSearchParams(window.location.search);
const currentSlug = params.get('rental') || '';

// If there's a matching property, move it to the front
if (currentSlug) {
  const index = properties.findIndex(p => p.slug === currentSlug);
  if (index !== -1) {
    const [matchedProperty] = properties.splice(index, 1);
    properties.unshift(matchedProperty);
  }
}

//  Render the featured property (first in array)
const featuredProperty = properties[0];

const featuredCard = document.createElement('div');
featuredCard.className = 'featured-card';

const featuredTitle = document.createElement('h2');
featuredTitle.textContent = "Featured Rental: " + featuredProperty.name;

const featuredGallery = document.createElement('div');
featuredGallery.className = 'image-gallery';
featuredProperty.images.forEach(imgUrl => {
  const img = document.createElement('img');
  img.src = imgUrl;
  img.classList.add('zoom');
  featuredGallery.appendChild(img);
});

const featuredLink = document.createElement('a');
featuredLink.href = featuredProperty.link;
featuredLink.target = '_blank';
featuredLink.textContent = 'View Listing';

featuredCard.appendChild(featuredTitle);
featuredCard.appendChild(featuredGallery);
featuredCard.appendChild(featuredLink);

featuredContainer.appendChild(featuredCard);

// Render the rest of the properties (starting from index 1)
properties.slice(1).forEach(property => {
  const card = document.createElement('div');
  card.className = 'property-card';

  const title = document.createElement('h2');
  title.textContent = property.name;

  const gallery = document.createElement('div');
  gallery.className = 'image-gallery';
  property.images.forEach(imgUrl => {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.classList.add('zoom');
    gallery.appendChild(img);
  });

  const link = document.createElement('a');
  link.href = property.link;
  link.target = '_blank';
  link.textContent = 'View Listing';

  card.appendChild(title);
  card.appendChild(gallery);
  card.appendChild(link);

  propertiesContainer.appendChild(card);
});

// Lightbox functionality
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let lightboxClose = document.getElementById('lightbox-close');

let currentGallery = [];
let currentImageIndex = 0;

// Attach click event after rendering images
function setupLightbox() {
  document.querySelectorAll('.image-gallery img').forEach(img => {
    img.addEventListener('click', (e) => {
      const images = Array.from(e.target.parentElement.querySelectorAll('img'));
      currentGallery = images.map(img => img.src);
      currentImageIndex = images.indexOf(e.target);
      openLightbox(currentGallery[currentImageIndex]);
    });
  });
}

function openLightbox(src) {
  lightbox.classList.remove('hidden');
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    closeLightbox();
  }
});

// Swipe Detection for Lightbox
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  if (touchEndX < touchStartX - 50) {
    // Swipe left: next image
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    openLightbox(currentGallery[currentImageIndex]);
  }
  if (touchEndX > touchStartX + 50) {
    // Swipe right: previous image
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    openLightbox(currentGallery[currentImageIndex]);
  }
}

setupLightbox();