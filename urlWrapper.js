const url = require("url");

const myUrl = new URL(
  "https://google.com:4000/search/something?id=10&name=Aditya"
);

// console.log(myUrl);

console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.hostname);
console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.search);
//Params object

console.log(myUrl.searchParams);
//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(name, value));
