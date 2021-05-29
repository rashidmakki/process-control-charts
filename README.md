# Process Control Charts
process-control-chart is npm package which provides fast methods to solve p-chart, np-chart, c-chart, u-chart.

## Getting Started
* [Live Demo](https://rashidmakki.github.io/process-control-charts-example/)
* [Example](https://github.com/rashidmakki/process-control-charts-example/)

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
  lcl: 0,
  cl: 0.074,
  ucl: 0.1850599837925434,
  samplesOutOfControl: 0,
  sampleData: [
    { x: 1, y: 0.04 },  { x: 2, y: 0.06 },
    { x: 3, y: 0.16 },  { x: 4, y: 0.02 },
    { x: 5, y: 0.02 },  { x: 6, y: 0.08 },
    { x: 7, y: 0.02 },  { x: 8, y: 0.08 },
    { x: 9, y: 0.1 },   { x: 10, y: 0.02 },
    { x: 11, y: 0.16 }, { x: 12, y: 0.04 },
    { x: 13, y: 0.08 }, { x: 14, y: 0.06 },
    { x: 15, y: 0.08 }, { x: 16, y: 0.02 },
    { x: 17, y: 0.16 }, { x: 18, y: 0.06 },
    { x: 19, y: 0.14 }, { x: 20, y: 0.08 }
  ],
  lclPlot: [
    { x: 1, y: 0 },  { x: 2, y: 0 },
    { x: 3, y: 0 },  { x: 4, y: 0 },
    { x: 5, y: 0 },  { x: 6, y: 0 },
    { x: 7, y: 0 },  { x: 8, y: 0 },
    { x: 9, y: 0 },  { x: 10, y: 0 },
    { x: 11, y: 0 }, { x: 12, y: 0 },
    { x: 13, y: 0 }, { x: 14, y: 0 },
    { x: 15, y: 0 }, { x: 16, y: 0 },
    { x: 17, y: 0 }, { x: 18, y: 0 },
    { x: 19, y: 0 }, { x: 20, y: 0 }
  ],
  clPlot: [
    { x: 1, y: 0.074 },  { x: 2, y: 0.074 },
    { x: 3, y: 0.074 },  { x: 4, y: 0.074 },
    { x: 5, y: 0.074 },  { x: 6, y: 0.074 },
    { x: 7, y: 0.074 },  { x: 8, y: 0.074 },
    { x: 9, y: 0.074 },  { x: 10, y: 0.074 },
    { x: 11, y: 0.074 }, { x: 12, y: 0.074 },
    { x: 13, y: 0.074 }, { x: 14, y: 0.074 },
    { x: 15, y: 0.074 }, { x: 16, y: 0.074 },
    { x: 17, y: 0.074 }, { x: 18, y: 0.074 },
    { x: 19, y: 0.074 }, { x: 20, y: 0.074 }
  ],
  uclPlot: [
    { x: 1, y: 0.1850599837925434 },
    { x: 2, y: 0.1850599837925434 },
    { x: 3, y: 0.1850599837925434 },
    { x: 4, y: 0.1850599837925434 },
    { x: 5, y: 0.1850599837925434 },
    { x: 6, y: 0.1850599837925434 },
    { x: 7, y: 0.1850599837925434 },
    { x: 8, y: 0.1850599837925434 },
    { x: 9, y: 0.1850599837925434 },
    { x: 10, y: 0.1850599837925434 },
    { x: 11, y: 0.1850599837925434 },
    { x: 12, y: 0.1850599837925434 },
    { x: 13, y: 0.1850599837925434 },
    { x: 14, y: 0.1850599837925434 },
    { x: 15, y: 0.1850599837925434 },
    { x: 16, y: 0.1850599837925434 },
    { x: 17, y: 0.1850599837925434 },
    { x: 18, y: 0.1850599837925434 },
    { x: 19, y: 0.1850599837925434 },
    { x: 20, y: 0.1850599837925434 }
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

##Example 
* [Process Control Charts Example](https://github.com/rashidmakki/process-control-charts-example)