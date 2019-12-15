const imageUrlArray = ['url(https://cdn.pixabay.com/photo/2019/11/16/21/44/christmas-4631194_960_720.jpg)','url(background.jpg)', 'url(https://cdn.pixabay.com/photo/2012/03/03/22/57/bag-21467_1280.jpg)', 'url(https://cdn.pixabay.com/photo/2017/11/08/18/41/girl-2931287__180.jpg)' ];

let count=0;

const imagesIndicator = document.getElementById("image-selected-indicator");

for(let index in imageUrlArray){
  const selectedIndicator = document.createElement("div");
  selectedIndicator.className="indicator";
  imagesIndicator.appendChild(selectedIndicator);
}

imagesIndicator.childNodes[1].id = "active";

const galleryContainer = document.getElementById("gallery-container");
galleryContainer.style.backgroundImage = imageUrlArray[0];

const imageNumber = document.getElementById("selected-number");

function changeImage(){
  count++;
  if(count > imageUrlArray.length-1){
    count=0;
  }
  galleryContainer.style.backgroundImage = imageUrlArray[count];
  imageNumber.innerHTML = "0" + (count+1);
  
  for(let childIndex in imagesIndicator.childNodes){
    imagesIndicator.childNodes[childIndex].id = "";
    if(childIndex == count + 1){
      imagesIndicator.childNodes[count + 1].id = "active";
    }
  }
}
