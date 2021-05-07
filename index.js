// p-chart :
// lcl = p - m * √p(1-p)/n) 
// cl = p
// ucl =  p + m * √(p(1-p)/n) 
 
let p_ucl = (p, n)=>{
    let UCL = p + (3 * Math.sqrt((p*(1-p))/n)); 
    return UCL;
}

let p_lcl = (p,n)=>{
    let LCL = p - (3 * Math.sqrt((p*(1-p))/n)); 
    if(LCL < 0){
        LCL=0;
    }
    return LCL;
}
let pChart = (data, sampleSize)=>{
    let count=0;
    let totalItem = data.reduce((accumulator, item)=>{
        return accumulator+item;
    }, 0);
    let details = {
        lcl:0,
        cl:0 ,
        ucl:0,
        samplesOutOfControl:0,
        sampleData: []
    };

 
    let m = data.length, n = sampleSize; 
    let p = totalItem/(m*n);
    let cl = p;
    let upperControlLimit = p_ucl(p,n);
    let lowerControlLimit = p_lcl(p,n);
    
    details.cl = cl;
    details.ucl = upperControlLimit;
    details.lcl = lowerControlLimit;

    data.map((item, sampleNumber)=>{
        let pi = item / n;
        if(pi>upperControlLimit ||pi<lowerControlLimit){
            count=count+1;
            details.samplesOutOfControl=count;
        }
        details.sampleData.push({x: sampleNumber+1, y: pi});
    });

    return details;
}

//Examples For p-chart
//let data = [12,15,8, 10, 4, 7, 16, 9, 14, 10, 5, 6, 17, 12, 22 ,8,10, 5 , 13, 11, 20, 18, 24, 15, 9, 12, 7, 13, 9, 6];
//let details = pChart(data, 50);

//data1=[9,6,12,5,6,4,6,3,7,6,2,4,3,6,5,4,8,5,6,7,5,6,3,5];
//let details1=pChart(data1,50);
 
//console.log(details, details1);


// np-chart
// UCL=np + 3*(√np(1-p))
// CL=np
// LCL= np - 3*(√np(1-p))


let np_ucl = (p, n)=>{
    let UCL = n*p + (3 * Math.sqrt((n*p)*(1-p))); 
    return UCL;
}

let np_lcl = (p,n)=>{
    let LCL = n*p - (3 * Math.sqrt((n*p)*(1-p))); 
    if(LCL < 0){
        LCL=0;
    }
    return LCL;
}
let npChart = (data, sampleSize)=>{
    let count=0;
    let totalItem = data.reduce((accumulator, item)=>{
        return accumulator+item;
    }, 0);
    let details = {
        lcl:0,
        cl:0 ,
        ucl:0,
        samplesOutOfControl:0,
        sampleData: []
    };
 
    let m = data.length, n = sampleSize; 
    let p = totalItem/(m*n);
    let cl = n*p;
    let upperControlLimit = np_ucl(p,n);
    let lowerControlLimit = np_lcl(p,n);
    
    details.cl = cl;
    details.ucl = upperControlLimit;
    details.lcl = lowerControlLimit;

    data.map((item, sampleNumber)=>{
        let pi = item;
        if(pi>upperControlLimit ||pi<lowerControlLimit){
            count=count+1;
            details.samplesOutOfControl=count;
        }
        details.sampleData.push({x: sampleNumber+1, y: pi});
    });

    return details;

}

let data = [12,15,8, 10, 4, 7, 16, 9, 14, 10, 5, 6, 17, 12, 22 ,8,10, 5 , 13, 11, 20, 18, 24, 15, 9, 12, 7, 13, 9, 6];
let details = npChart(data, 50);
console.log(details);

module.exports={
    pChart:pChart,
    npChart:npChart 
}