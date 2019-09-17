import React, { Component } from 'react';

export default class Suporte extends Component {

     format_moeda = (string, decimals = 2, decimal = ',', thousands = '.', pre = 'R$ ', pos = ' $') => {
        let numbers = string.toString().match(/\d+/g).join([]);
        numbers = numbers.padStart(decimals + 1, "0");
        let splitNumbers = numbers.split("").reverse();
        let mask = '';
        splitNumbers.forEach(function (d, i) {
            if (i == decimals) { mask = decimal + mask; }
            if (i > (decimals + 1) && ((i - 2) % (decimals + 1)) == 0) { mask = thousands + mask; }
            mask = d + mask;
        });
        return pre + mask;
    }

     format_real = (string, decimals = 2, decimal = ',', thousands = '.', pre = 'R$ ', pos = ' $') => {
        let numbers = string.toString().match(/\d+/g).join([]);
        numbers = numbers.padStart(decimals + 1, "0");
        let splitNumbers = numbers.split("").reverse();
        let mask = '';
        splitNumbers.forEach(function (d, i) {
            if (i == decimals) { mask = decimal + mask; }
            if (i > (decimals + 1) && ((i - 2) % (decimals + 1)) == 0) { mask = thousands + mask; }
            mask = d + mask;
        });
        return mask;
    }

}
