export const business = (businessObj) => { 
    return `
    <section class="business__list"> 
    <h2 class"business__title> ${businessObj.companyName}</h2>
    <div class="business__street"> ${businessObj.addressFullStreet}</div>
    <div class="business__cityState> ${businessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}
    </section> 
    `
}

export const newYorkBusiness = (nyBusinessObj) => { 
    return `
    <section class="nyBusiness__list"> 
    <h2 class"business__title> ${nyBusinessObj.companyName}</h2>
    <div class="business__street"> ${nyBusinessObj.addressFullStreet}</div>
    <div class="business__cityState> ${nyBusinessObj.addressCity}, ${nyBusinessObj.addressStateCode}, ${nyBusinessObj.addressZipCode}
    </section> 
    `
}