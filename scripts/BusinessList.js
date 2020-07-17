import { useBusinesses } from "./BusinessProvider.js";
import { business } from "./Business.js";
import { newYorkCompanies } from "./BusinessProvider.js";
import { purchasingAgent } from "./BusinessProvider.js";

const contentTarget = document.querySelector("#container")

export const businessList = () => { 
    const businessArr = useBusinesses()
    contentTarget.innerHTML = "<h1>Business List</h1>"

    businessArr.forEach (
        (businessObj) => { 
            contentTarget.innerHTML += business(businessObj)
        }
    )
}

export const nyBusinessList = () => { 
    const nyBusinessArr = newYorkCompanies
    contentTarget.innerHTML += "<h2>New York Companies</h2>"

    nyBusinessArr.forEach (
        (nyBusinessObj) => { 
            contentTarget.innerHTML += business(nyBusinessObj)
        }
    )
}
export const Agent = () => { 
    const purchasingAgentArr = purchasingAgent
    contentTarget.innerHTML += "<h3> Purchasing Agents</h3>"

    purchasingAgentArr.forEach ( 
        (agentObj) => {
            contentTarget.innerHTML += business(agentObj)
        }
    )
}