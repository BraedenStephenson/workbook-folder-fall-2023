let name = "Braeden Stephenson";
let address = "123 Main St ";
let city = "Hometown";
let state = "Pennsylania";
let zip = "15122";

function displayMailLabel(name, address, city, state, zip) {
  let label = `
    ${name}
    ${address}
    ${city}, ${state} ${zip}
  `
  console.log(label);
}

displayMailLabel(name, address, city, state, zip);