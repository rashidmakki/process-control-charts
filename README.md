# Process Control Charts
process-control-chart is npm package which provides fast methods to solve p-chart, np-chart, c-chart, u-chart.

## Getting Started

### Install process-control-charts package

```
npm install process-control-charts
```

## Example

```js
// index.js
let { pChart } = require('process-control-charts');

let data = [12,15,8, 10, 4, 7, 16, 9, 14, 10, 5, 6, 17, 12, 22 ,8,10, 5 , 13, 11, 20, 18, 24, 15, 9, 12, 7, 13, 9, 6];
let details = pChart(data, 50);
console.log(details);

/* 
x --> Sample number
y --> Sample fraction nonconforming
*/

```

### Run
```
npm start
```

### Output
```

{
  lcl: 0.05242754807192823,
  cl: 0.23133333333333334,
  ucl: 0.41023911859473844,
  samplesOutOfControl: 2,
  sampleData: [
    { x: 1, y: 0.24 },  { x: 2, y: 0.3 },
    { x: 3, y: 0.16 },  { x: 4, y: 0.2 },
    { x: 5, y: 0.08 },  { x: 6, y: 0.14 },
    { x: 7, y: 0.32 },  { x: 8, y: 0.18 },
    { x: 9, y: 0.28 },  { x: 10, y: 0.2 },
    { x: 11, y: 0.1 },  { x: 12, y: 0.12 },
    { x: 13, y: 0.34 }, { x: 14, y: 0.24 },
    { x: 15, y: 0.44 }, { x: 16, y: 0.16 },
    { x: 17, y: 0.2 },  { x: 18, y: 0.1 },
    { x: 19, y: 0.26 }, { x: 20, y: 0.22 },
    { x: 21, y: 0.4 },  { x: 22, y: 0.36 },
    { x: 23, y: 0.48 }, { x: 24, y: 0.3 },
    { x: 25, y: 0.18 }, { x: 26, y: 0.24 },
    { x: 27, y: 0.14 }, { x: 28, y: 0.26 },
    { x: 29, y: 0.18 }, { x: 30, y: 0.12 }
  ]
}

```

## Methods Available
| Method Name   | Parameter              | Output Type   |
| ------------- | ---------------------  | ------------- |
| pChart        | ( [data], SampleSize ) | { Object }    |
| npChart       | ( [data], SampleSize ) | { Object }    |
| cChart        | ( [data])              | { Object }    |
| uChart        | ( [data], SampleSize ) | { Object }    |

## Help
Raise the issue or problem on this repository.

## Authors
* [Saurabh Tiwari](https://github.com/saurabhtiwarii/)
* [Rashid Makki](https://github.com/rashidmakki/)

