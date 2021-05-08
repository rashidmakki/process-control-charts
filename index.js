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

//let data = [12,15,8, 10, 4, 7, 16, 9, 14, 10, 5, 6, 17, 12, 22 ,8,10, 5 , 13, 11, 20, 18, 24, 15, 9, 12, 7, 13, 9, 6];
//let details = npChart(data, 50);
//console.log(details);


// c-chart
// UCL=c + 3*√c
// CL=c
// LCL= c - 3*√c


let c_ucl = (c)=>{
    let UCL = c + (3 * Math.sqrt(c)); 
    return UCL;
}

let c_lcl = (c)=>{
    let LCL = c - (3 * Math.sqrt(c)); 
    if(LCL < 0){
        LCL=0;
    }
    return LCL;
}
let cChart = (data)=>{
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
 
    let m = data.length; 
    let c = totalItem/(m);
    let cl = c;
    let upperControlLimit = c_ucl(c);
    let lowerControlLimit = c_lcl(c);
    
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

//let data = [21,24,16,12,15,5,28,20,31,25,20,24,16,19,10,17,13,22,18,39,30,24,16,19,17,15];
//let details = cChart(data);
//console.log(details);


// u-chart
// UCL=u + 3*√u/n
// CL=u
// LCL= u - 3*√u/n


let u_ucl = (u,n)=>{
    let UCL = u + (3 * Math.sqrt((u/n))); 
    return UCL;
}

let u_lcl = (u,n)=>{
    let LCL = u - (3 * Math.sqrt((u/n))); 
    if(LCL < 0){
        LCL=0;
    }
    return LCL;
}
let uChart = (data,sampleSize)=>{
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
 
    let m = data.length;
    let n= sampleSize;
    let ui = totalItem/n;
    let u=ui/m;
    let cl = u;
    let upperControlLimit = u_ucl(u,n);
    let lowerControlLimit = u_lcl(u,n);
    
    details.cl = cl;
    details.ucl = upperControlLimit;
    details.lcl = lowerControlLimit;

    data.map((item, sampleNumber)=>{
        let ui = item/n;
        if(ui>upperControlLimit ||ui<lowerControlLimit){
            count=count+1;
            details.samplesOutOfControl=count;
        }
        details.sampleData.push({x: sampleNumber+1, y: ui});
    });

    return details;

}

//let data = [2,3,8,1,1,4,1,4,5,1,8,2,4,3,4,1,8,3,7,4];
//let details = uChart(data,50);
//console.log(details);


module.exports={
    pChart:pChart,
    npChart:npChart,
    cChart:cChart,
    uChart:uChart
}
