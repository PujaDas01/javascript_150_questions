// ---------------------------dd-mm-yyyy---------------------------

export const dateFormat = () => {
    let today = new Date();
    let date = today.getDate();
    let currentDate = (date < 10) ? `0${date}` : date;
    let month = today.getMonth() + 1;
    let currentMonth = (month < 10) ? `0${month}` : month;
    let currentYear = today.getFullYear();
    let finalCurrentDateFormat = currentDate + '-' + currentMonth + '-' + currentYear;
    return finalCurrentDateFormat;
}


// -----------------------dd/mm/yyyy--------------------------------
// export const dateFormat = () => {
//     let today = new Date();
//     let date = today.getDate();
//     let currentDate = (date < 10) ? `0${date}` : date;
//     let month = today.getMonth() + 1;
//     let currentMonth = (month < 10) ? `0${month}` : month;
//     let currentYear = today.getFullYear();
//     let finalCurrentDateFormat = currentDate + '/' + currentMonth + '/' + currentYear;
//     return finalCurrentDateFormat;
// }



//  -----------------------------mm-dd-yyyy---------------------------
// export const dateFormat = () => {
    
//     let today = new Date();
//     let date = today.getDate();
//     let currentDate = (date < 10) ? `0${date}` : date;
//     let month = today.getMonth() + 1;
//     let currentMonth = (month < 10) ? `0${month}` : month;
//     let currentYear = today.getFullYear();
//     let finalCurrentDateFormat = currentMonth + '-' + currentDate + '-' + currentYear;
//     return finalCurrentDateFormat;
// }





// ------------------------mm/dd/yyyy-------------------------------
// export const dateFormat = () => {
//     let today = new Date();
//     let date = today.getDate();
//     let currentDate = (date < 10) ? `0${date}` : date;
//     let month = today.getMonth() + 1;
//     let currentMonth = (month < 10) ? `0${month}` : month;
//     let currentYear = today.getFullYear();
//     let finalCurrentDateFormat = currentMonth + '/' + currentDate + '/' + currentYear;
//     return finalCurrentDateFormat;
// }