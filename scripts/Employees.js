import { getEmployees } from "./database.js"  //lets this module access this data 
import { getOrders } from "./database.js"  //lets this module access this data

//EVENT LISTENER GOAL: user clicks on empoyee name, pop up shows how many products that employee has sold.

document.addEventListener( //1. instantiate event listener on the document
    "click", //2. specify to listen for a click 
    (clickEvent) => {
        const itemClicked = clickEvent.target  
        if (itemClicked.id.startsWith("employee")) { 
            const [,employeeId] = itemClicked.id.split("--") 
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) { 
                    const employeeOrders = orders.filter(    //GOOGLE HERE FOR JAVASCRIPT ARRAY FILTER
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )
                    window.alert(`${employee.name} sold ${employeeOrders.length} products`)
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

