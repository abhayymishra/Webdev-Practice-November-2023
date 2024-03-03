// let message: string = 'Hello, World!';
// // create a new heading 1 element
// let heading = document.createElement('h1');
// heading.textContent = message;
// // add the heading the document
// document.body.appendChild(heading);
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var product = getProduct(1);
console.log("The product ".concat(product.name, " costs $").concat(product.price));
