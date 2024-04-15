const url = require("node:url");

const myUrl = new URL(
  "http:/mywebsite.com:8000/hello.html?id=100&status=active"
);
//serialized URL
console.log("Href: ", myUrl.href);
console.log("Href to string: ", myUrl.toString());
//get host
console.log("Host: ", myUrl.host);
//get host name (does not include port)
console.log("Host: ", myUrl.hostname);
//path name
console.log("path name: ", myUrl.pathname);
//serialized query
console.log("Everything after ?: ", myUrl.search);
//params obj
console.log("Parameters: ", myUrl.searchParams);
//apepend param
myUrl.searchParams.append("newParam", "hola");
console.log("append parameter: ", myUrl.searchParams);
//loop through params
console.log("Loop params...");
myUrl.searchParams.forEach((value, name) => console.log(`${value}: ${name}`));
