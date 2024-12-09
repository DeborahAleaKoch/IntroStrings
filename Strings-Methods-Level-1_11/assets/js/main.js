let x = "Hello ";

let y = "World";

let z = x + y;
console.log(z);

// document.write(`${z}`);

document.write("<p>" + z + "</p>");

let n = x + "" + y;
console.log(n);
document.write(`${n}`);

x += "World";
console.log(x);

document.write("<p>" + x + "</p>");

let meinString = "Ich bin Erste:r";
meinString += "- ich komme auf Platz zwei.";

console.log(meinString);

document.write(meinString);
