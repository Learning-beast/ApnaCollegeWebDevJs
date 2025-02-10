// Spread with Object Literals :-

const data = {
    email : "harsh@gmail.com",
    password : "abcd"
};
//if we want to copy the data we can use spread using ...
const dataCopy = {...data, id : 123, country : "india"}  ; //here we have copied the data in this object and we have added one additional proprty id :12  
console.log(dataCopy); //{ email: 'harsh@gmail.com', password: 'abcd', id: 12 }