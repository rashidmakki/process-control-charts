   // lcl = p - m * sqrt(p(1-p)/n) 
    // cl = p
    // ucl =  p + m * sqrt(p(1-p)/n) 
//    const totalValue =  data.reduce((accumulator, item)=>{
//         accumulator = accumulator+item;
//         return accumulator;
//     }, 0);
const ucl = (p, n)=>{
    const UCL = p + (3 * Math.sqrt((p*Math.abs(1-p))/n)); 
    return UCL;
}

const lcl = (p,n)=>{
    const LCL = p - (3 * Math.sqrt((p*(1-p))/n)); 
    return LCL;
}
const data = [12,15,8, 10, 4, 7, 16, 9, 14, 10, 5, 6, 17, 12, 22 ,8,10, 5 , 13, 11, 20, 18, 24, 15, 9, 12, 7, 13, 9, 6];

const pChart = (data, sampleSize)=>{
    
    const totalItem = data.reduce((accumulator, item)=>{
        return accumulator+item;
    }, 0);
    const details = {
        lcl:0,
        cl:0 ,
        ucl:0,
        sampleData: []
    };

 
    const m = data.length, n = sampleSize; 
    const p = totalItem/(m*n);
    const cl = p;
    const upperControlLimit = ucl(p,n);
    const lowerControlLimit = lcl(p,n);
    
    details.cl = cl;
    details.ucl = upperControlLimit;
    details.lcl = lowerControlLimit;

    data.map((item, sampleNumber)=>{
        let pi = item / n;
        details.sampleData.push({x: sampleNumber+1, y: pi});
    });

    return details;
    

}

const details = pChart(data, 50);
console.log(details);