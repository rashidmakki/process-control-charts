const data = 347;
const Pchart = (data)=>{
    
    // lcl = p - m * sqrt(p(1-p)/n) 
    // cl = p
    // ucl =  p + m * sqrt(p(1-p)/n) 
//    const totalValue =  data.reduce((accumulator, item)=>{
//         accumulator = accumulator+item;
//         return accumulator;
//     }, 0);
    const m = 30, n =50; 
    const len = 50;
    const p = data/(m*n);
    console.log(p);
    const cl = p;
    const ucl = p + (3 * Math.sqrt((p*Math.abs(1-p))/len)); 
    const lcl = p - (3 * Math.sqrt((p*(1-p))/len)); 
    console.log(ucl); 
    console.log(lcl);
    

}

Pchart(data);