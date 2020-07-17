import { useBusinesses } from "./BusinessProvider.js";
import { businessHTML } from "./Business.js";
import { agentHTML } from "./Business.js";
import { newYorkCompanies } from "./BusinessProvider.js";
import { purchasingAgent } from "./BusinessProvider.js";

const contentTarget = document.querySelector("#container")

export const businessList = () => { 
    const businessArr = useBusinesses()
    contentTarget.innerHTML = "<h1>Business List</h1>"

    businessArr.forEach (
        (businessObj) => { 
            contentTarget.innerHTML += businessHTML(businessObj)
        }
    )
}

export const nyBusinessList = () => { 
    const nyBusinessArr = newYorkCompanies
    contentTarget.innerHTML += "<h2>New York Companies</h2>"

    nyBusinessArr.forEach (
        (nyBusinessObj) => { 
            contentTarget.innerHTML += businessHTML(nyBusinessObj)
        }
    )
}
export const agent = () => { 
    contentTarget.innerHTML += "<h3> Purchasing Agents</h3>"

    purchasingAgent.forEach ( 
        (agentObj) => {
            contentTarget.innerHTML += agentHTML(agentObj)
        }
    )
}