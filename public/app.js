// Public gallery.
// Replace this sample data with your real database/API later.
const images = [];
const gallery = document.querySelector("#gallery");
const empty = document.querySelector("#empty");

function render(){
  gallery.innerHTML="";
  empty.style.display = images.length ? "none" : "block";
  for(const item of images){
    const img=document.createElement("img");
    img.src=item.url;
    img.alt=item.caption || "Gallery image";
    img.onclick=()=>window.open(item.url,"_blank");
    gallery.appendChild(img);
  }
}
render();