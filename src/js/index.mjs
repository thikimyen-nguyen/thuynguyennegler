const imagesAPI = "http://34.82.129.237/wp-json/wp/v2/media?per_page=100";

async function getImages() {
  const response = await fetch(imagesAPI);
  const images = await response.json();
  console.log(images)
  const neglerImages =  images.filter(item => {
   
    return item.categories[0];
  });
  console.log(neglerImages)
  return neglerImages
}

const carouselContainer = document.querySelector("#carousel-images")
const loader = document.querySelector(".loader")

async function showCarousel() {
  loader.innerHTML = "";
  const images = await getImages();
  images.forEach((image, index) => {
    const { source_url } = image;
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("carousel-item", "text-center");
    carouselContainer.append(imageContainer);
    if (index === 0) {
      imageContainer.classList.add("active");
    }
    const nailImage = document.createElement("img")
    imageContainer.append(nailImage)
    nailImage.src = source_url;
    nailImage.alt = "thuynguyennegler nail in halden negler i halden"
    nailImage.classList.add("nailImage", "img-fluid");
    // nailImage.style.objectFit = "cover";
    
})
}

showCarousel()