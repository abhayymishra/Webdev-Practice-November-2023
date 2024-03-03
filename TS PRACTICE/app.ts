// let message: string = 'Hello, World!';
// // create a new heading 1 element
// let heading = document.createElement('h1');
// heading.textContent = message;
// // add the heading the document
// document.body.appendChild(heading);

interface Product {
    id : number,
    name : string,
    price : number
};

function getProduct(id) : Product {
    return {
        id : id,
        name : `Awesome Gadget ${id}`,
        price : 99.5
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);


