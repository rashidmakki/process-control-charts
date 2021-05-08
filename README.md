# Process Control Charts
process-control-chart is npm package which provides fast methods to solve p-chart, np-chart, c-chart, u-chart.

## Getting Started

### Install process-control-charts package

```
npm install process-control-charts
```

## Example

```
let { pChart } = require('process-control-charts');

let data = [12,15,8, 10, 4, 7, 16, 9, 14, 10, 5, 6, 17, 12, 22 ,8,10, 5 , 13, 11, 20, 18, 24, 15, 9, 12, 7, 13, 9, 6];
let details = pChart(data, 50);
console.log(details);
```
## Help
Raise the issue or problem on this repository.

## Authors
* [Saurabh Tiwari](https://github.com/saurabhtiwarii/)
* [Rashid Makki](https://github.com/rashidmakki/)

