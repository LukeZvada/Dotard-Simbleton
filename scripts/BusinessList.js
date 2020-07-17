import { useBusinesses } from "./BusinessProvider.js";
import { business } from "./Business.js";

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