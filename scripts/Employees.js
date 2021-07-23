import { getEmployees } from "./database.js"  //lets this module access this data 
import { getOrders } from "./database.js"  //lets this module access this data

//EVENT LISTENER GOAL: user clicks on empoyee name, pop up shows how many products that employee has sold.

document.addEventListener( //1. instantiate event listener on the document
    "click", //2. specify to listen for a click 
    (clickEvent) => { //3. list details about click event.  
        const itemClicked = clickEvent.target //4. the target of the event is the item that is clicked on 

        if (itemClicked.id.startsWith("employee")) {  //5. user clicks on html item placed generated on screen because of main.js: 12.  Each of those li's id's looks like "employee--#" because of the for loop creating the IDs at the bottom of this module. 

            const [,employeeId] = itemClicked.id.split("--") //6. the item from number five (looks like "employee--#") gets split, at right of --, into separate strings in an array.  We store the 2nd string in variable employeeId.

            for (const employee of employees) { //7. We iterate through each object in the employees array in the database module
                if (employee.id === parseInt(employeeId)) { //8. check for this condition: if the value of an object's id property matches the stored value from the split in step 6 (after we convert it from string to number), we continue to step 9.

                    const employeeOrders = orders.filter(    //9. we instantiate a variable called employeeOrders to reference the return of a function that will filter the orders array from the database module

                        (order) => { //*******10.the function will go through each order?
                            if (order.employeeId === employee.id) { //11.  If the value of the employeeId property in an orders array object matches the value of the id property in an employees array object...

                                return true //12. then the function will return the boolean TRUE.  If step 11 isn't true, nothing will return.
                            }
                        }
                    )
                    window.alert(`${employee.name} sold ${employeeOrders.length} products`) //13.  If every step up to this point has happened, a pop up window will display an interolated sentence.  The sentence references the value of an employee name from the employees array, and the *******amount of "true" booleans in the array created by the filter function inside of the click event?*********.
                }
            }
        }
    }
)
const employees = getEmployees()
const orders = getOrders()
export const Employees = () => {
    let html = "<ul>"
    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }
    html += "</ul>"
    return html
}

