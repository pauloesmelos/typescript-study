"use strict";
function ceil(value) {
    if (typeof value === 'string')
        return Math.ceil(Number(value)).toString();
    else
        return Math.ceil(value);
}
console.log(ceil('24.8'));
