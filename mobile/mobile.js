let Samsung = {
  name: "Samsung Galaxy S25 Ultra",
  price: 150000,
  features: ["5G", "128GB Storage", "8GB RAM", "Triple Camera"],
  rating: 4.8,
};

function displayMobileDetailsSamsung() {
document.querySelector("#about").innerHTML =` ${Samsung.name}
 <p> Price: ₹ ${Samsung.price} <p>
 Features: ${Samsung.features.join(", ")}<p>
 Rating: ${Samsung.rating} ⭐`;
}

let vivo = {
  name: "Vivo V50 Pro",
  price: 40000,
  features: ["5G", "256GB Storage", "8GB RAM", "Dual Camera"],
  rating: 4.5,
};

function displayMobileDetailsVivo() {
document.querySelector("#about1").innerHTML =` ${vivo.name}
 <p> Price: ₹ ${vivo.price} <p>
 Features: ${vivo.features.join(", ")}<p>
 Rating: ${vivo.rating} ⭐`;
}

let oneplus = {
  name: "One Plus 11R",
  price: 50000,
  features: ["5G", "256GB Storage", "12GB RAM", "Triple Camera"],
  rating: 4.6,
};

function displayMobileDetailsOneplus() {
document.querySelector("#about2").innerHTML =` ${oneplus.name}
 <p> Price: ₹ ${oneplus.price} <p>
 Features: ${oneplus.features.join(", ")}<p>
 Rating: ${oneplus.rating} ⭐`;
}
let Google = {
  name: "Google Pixel 8 Pro",
  price: 89999,
  features: ["5G", "256GB Storage", "12GB RAM", "Triple Camera"],
  rating: 4.7,
};

function displayMobileDetailsGoogle() {
document.querySelector("#about3").innerHTML =` ${Google.name}
 <p> Price: ₹ ${Google.price} <p>
 Features: ${Google.features.join(", ")}<p>
 Rating: ${Google.rating} ⭐`;
}

let Oppo = {
  name: "Oppo Reno 14 5G",
  price: 39999,
  features: ["5G", "256GB Storage", "12GB RAM", "Triple Camera"],
  rating: 4.6,
};
function displayMobileDetailsOppo() {
document.querySelector("#about4").innerHTML =` ${Oppo.name}
 <p> Price: ₹ ${Oppo.price} <p>
 Features: ${Oppo.features.join(", ")}<p>
 Rating: ${Oppo.rating} ⭐`;
}

let SamsungFold = {
  name: "Samsung Galaxy Z Fold5",
  price: 179999,
  features: ["5G", "512GB Storage", "12GB RAM", "Quad Camera"],
  rating: 4.9,
};

function displayMobileDetailsSamsungFold() {
document.querySelector("#about5").innerHTML =` ${SamsungFold.name}
 <p> Price: ₹ ${SamsungFold.price} <p>
 Features: ${SamsungFold.features.join(", ")}<p>
 Rating: ${SamsungFold.rating} ⭐`;
}
let countItems = 0;

function nowCartItems(countItems) {
  if(countItems >= 0) { 
return alert (`Your cart has ${countItems} items.`); 
}
}

function displayMobileDetails()
{
  function display ()
  {
    displayMobileDetailsSamsung();
    displayMobileDetailsVivo();
    displayMobileDetailsOneplus();
    displayMobileDetailsGoogle(); 
    displayMobileDetailsOppo();
    displayMobileDetailsSamsungFold();
  }
  return display();
}