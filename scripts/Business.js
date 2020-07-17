export const businessHTML = (businessObj) => { 
    return `
    <section class="business__list"> 
        <h2 class="business__title"> ${businessObj.companyName}</h2>
        <div class="business__street"> ${businessObj.addressFullStreet}</div>
        <div class="business__cityState"> ${businessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}
    </section> 
    `
}

export const agentHTML = (agentObj) => {
    console.log(agentObj)
    return ` 
    <section class="agent__list">
        <h2 class="agent__title">${agentObj.fullName}</h2>
        <div class="agent__company">${agentObj.company}</div>
        <div class="agent__phone">${agentObj.phoneNumber} </div>
    </section>
    `
}