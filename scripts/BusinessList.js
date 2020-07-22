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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            // target the #companySearch input to find what value the user typed
            const businessArr = useBusinesses()
            const searchValue = keyPressEvent.target.value.toLowerCase();


            const foundBusiness = businessArr.find((business) => {
                // to prevent the capitalization issue, I saved business.companyName to a variable
                // Then transformed it to be all lowercase (.toLowerCase())
                const lowerCaseName = business.companyName.toLowerCase()
                // then above, I made the search value all lowercase (same method)
                // then below, i returned the event that was triggered by charcode 13 (enter button) 
                return lowerCaseName.includes(searchValue)
            });

            
            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                `
        }
    });
                // <section>
                // ${foundBusiness.addressFullStreet}

                // </section>
                // <section>
                // ${foundBusiness.addressCity},
                // ${foundBusiness.addressStateCode}
                // ${foundBusiness.addressZipCode}
                // </section>