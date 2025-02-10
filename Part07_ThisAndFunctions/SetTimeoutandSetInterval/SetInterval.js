//SetInterval is used to set the interval which means for function means ke ye utne time rukega fir execute karega function fir wait karega and fir execute karega


//Set Interval syntax       setinterval(function,timeout)


let id = setInterval(()=>{
    console.log("Hello World");  //this will print "Hello World" every 2 seconds.
},2000); 

//which means it will print "Hello World" every 2 seconds until we set it to stop
let id1 = setInterval(()=>{
    console.log("Hello World bro");  //this will print "Hello World" every 2 seconds.
},2000); 

//To stop the interval, we can use clearInterval() function.

clearInterval(id); //ye stop karne ke kaam ata hai which means ke ab keval id1 he print hoga qst id nhi hoga print