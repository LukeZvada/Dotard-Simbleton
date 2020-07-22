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

            // target the #companySearch input to find what value the user typed
            const businessArr = useBusinesses()
            const searchValue = keyPressEvent.target.value.toLowerCase();


            const foundBusiness = businessArr.find((business) => {
                // to prevent capitalization issue, I assigned business.purchasingAgent to a variable
                // Then transformed it to be all lowercase using (.toLowerCase())
                const agent = business.purchasingAgent;
                const firstName = agent.nameFirst.toLowerCase()
                const lastName = agent.nameLast.toLowerCase()
                
                
                // then above, I made the search value of firstName and lastName all searchable by lowercase (same method)
                // then below, i returned the event that was triggered by charcode 13 (enter button) by using a .includes. 
                // I was also able to do this with an if statement, but using the .includes method saved me from using so many characters.  
                return (firstName.includes(searchValue) || lastName.includes(searchValue))
               
            });
            
            companySearchResultArticle.innerHTML = `
                <h2>
                    ${foundBusiness.companyName}
                </h2>
                <section> 
                    ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                <section>
                    ${foundBusiness.addressFullStreet}
                </section>
                <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                </section>
                `
            }
        });