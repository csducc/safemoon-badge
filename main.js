(function() {
  var image = document.createElement("img");
  document.body.style.position = "relative";
  image.style.position = "fixed";
  var wrapper = document.createElement("a");
  wrapper.setAttribute('href', 'https://safemoon.net');
  image.style.bottom = "20px";
  image.style.right = "20px";
  image.style.width = "200px";
  image.style.height = "auto";
  image.src = "https://res.cloudinary.com/dsfufzpq6/image/upload/v1630491159/sm-b-1_vudes3.svg";
  wrapper.appendChild(image.cloneNode(true));
  return document.body.appendChild(wrapper);
})()