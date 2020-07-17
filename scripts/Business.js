export const business = (businessObj) => { 
    return `
    <section class="business__list"> 
    <h2 class"business__title> ${businessObj.companyName}</h2>
    <div class="business__street"> ${businessObj.addressFullStreet}</div>
    <div class="business__cityState> ${businessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}
    </section> 
    `
}

export const newYorkBusiness = (nyBisinessObj) => { 
    return `
    <section class="nyBusiness__list"> 
    <h2 class"business__title> ${nyBisinessObj.companyName}</h2>
    <div class="business__street"> ${nyBisinessObj.addressFullStreet}</div>
    <div class="business__cityState> ${nyBisinessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}
    </section> 
    `
}