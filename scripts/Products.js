//Using code from the last project as an example, attempt adding a click event listener that presents an alert box showing the price of a product when it is clicked by the user.

import { getProducts } from "./database.js" //access to the products array data via the exported getProducts() funtion from database module

document.addEventListener(  //element.event listener
    "click", //event being listened for 
    (clickEvent) => { //handler function, responds to the click event
        const itemClicked = clickEvent.target  //variable itemClicked is the target of the click event
        if (itemClicked.id.startsWith("product")) { //if the user clicks something with an id property value starting with string "product"
            const [,productId] = itemClicked.id.split("--") //then the id's value will be split into separate strings at the -- character ["product--1"  ->  "product--"   "1"   ->  const ["product--", "1"]  ->  const [, "1"]

            for (const product of products) { //for each object in the product array
                if (product.id === parseInt(productId)) { //if the object's id value is strictly equal to the number part of the split above 
                    window.alert(`${product.name} costs $${product.price}`)//then a window will open with this interpolated sentence
                }
            }
        }
    }
)

const products = getProducts() //calling the getProducts function from the database module and referencing/storing it within the products variable on this module

export const Products = () => { //defining a function Products that's data can potentially be imported into another module.  
    let html = "<ul>"  // instantiate a reassignable variable html set to an empty unordered list starting bracket [will be built onto later to create list

    for (const product of products) {  //for each obj [refered to with variable 'product' in the products array (imported from database module line 1, stored in variable at line 21 in this module) iterate through the product object
        html += `<li id="product--${product.id}">${product.name}</li>`  //reassign unordered list html to build onto itself adding interpolated sentences as list items that include each walker object's values for the id and name properties.
    }

    html += "</ul>"   //build onto the existing value referenced by html by adding the closing tag for the unordered list.

    return html  //javascript goes in and gets the current value referenced by html so it can be used.
}

//*****QUESTION:  Where did the "--" on line 10 of this module come from?