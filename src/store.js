
// import React from 'react';
import { createStore } from 'redux'
import produce from 'immer'

const initialState = {

    coins: [
        {
            typeOfCoin1: "XRP",
            icon: "xrpIcon",
            Range: [
                {
                    nameOfCoin: "XPRAUD",
                    price: "1.55",
                    Percent: "-0.57%",
                    numberOfIntres: "121.8k",
                    star: false
                },
                {
                    nameOfCoin: "XPRBTC",
                    price: "0.00002354",
                    Percent: "+0.43%",
                    numberOfIntres: "824.6K",
                    star: false
                },
                {
                    nameOfCoin: "XRPCAD",
                    price: "1.43",
                    Percent: "-0.35%",
                    numberOfIntres: "222.3K",
                    star: false
                },
                {
                    nameOfCoin: "XRPETH",
                    price: "0.0003566",
                    Percent: "+0.39%",
                    numberOfIntres: "230.8K",
                    star: false
                },
                {
                    nameOfCoin: "XRPEUR",
                    price: "0.9560",
                    Percent: "-0.35%",
                    numberOfIntres: "6.450M",
                    star: true
                },
                {
                    nameOfCoin: "XRPGBP",
                    price: "0.8176",
                    Percent: "-0.65%",
                    numberOfIntres: "976.1K",
                    star: false
                },
                {
                    nameOfCoin: "XRPJPY",
                    price: "124.02",
                    Percent: "-0.76%",
                    numberOfIntres: "26.32K",
                    star: false
                },
                {
                    nameOfCoin: "XRPUSD",
                    price: "1.13",
                    Percent: "-0.36%",
                    numberOfIntres: "4.333M",
                    star: false
                },
                {
                    nameOfCoin: "XRPUSDT",
                    price: "1.13",
                    Percent: "-0.35%",
                    numberOfIntres: "825.7K",
                    star: false
                }
            ]
        }
        ,
        {
            typeOfCoin1: "BCH",
            icon: "",
            Range: [
                {
                    nameOfCoin: "BCHAUD",
                    price: "929.99",
                    Percent: "-0.05%",
                    numberOfIntres: "7.58",
                    star: false
                },
                {
                    nameOfCoin: "BCHBTC",
                    price: "0.01347",
                    Percent: "-3.37%",
                    numberOfIntres: "155.61",
                    star: false
                },
                {
                    nameOfCoin: "BCHETH",
                    price: "0.2040",
                    Percent: "-3.32%",
                    numberOfIntres: "64.78",
                    star: false
                },
                {
                    nameOfCoin: "BCHEUR",
                    price: "548.56",
                    Percent: "-4.06%",
                    numberOfIntres: "1.227K",
                    star: false
                },
                {
                    nameOfCoin: "BCHGBP",
                    price: "466.70",
                    Percent: "-4.82",
                    numberOfIntres: "9.65",
                    star: false
                },
                {
                    nameOfCoin: "BCHJPY",
                    price: "70759.00",
                    Percent: "-5.00%",
                    numberOfIntres: "20.61",
                    star: false
                },
                {
                    nameOfCoin: "BCHUSD",
                    price: "646.66",
                    Percent: "-4.00%",
                    numberOfIntres: "2.216K",
                    star: false
                },
                {
                    nameOfCoin: "BCHUSDT",
                    price: "645.70",
                    Percent: "-4.33%",
                    numberOfIntres: "150.12",
                    star: false
                },
               
            
            ]
        },
        {
            typeOfCoin1: "LTC",
            icon: "",
            Range: [
                {
                    nameOfCoin: "LTCAUD",
                    price: "236.88",
                    Percent: "-3.63%",
                    numberOfIntres: "61.66",
                    star: false
                },
                {
                    nameOfCoin: "LTCBTC",
                    price: "0.003587",
                    Percent: "-2.45",
                    numberOfIntres: "2.587k",
                    star: false
                },
              
                {
                    nameOfCoin: "LTCETH",
                    price: "0.05441",
                    Percent: "-2.42%",
                    numberOfIntres: "590.38",
                    star: false
                },
                {
                    nameOfCoin: "LTCEUR",
                    price: "145.99",
                    Percent: "-3.00%",
                    numberOfIntres: "9.36K",
                    star: false
                },
                {
                    nameOfCoin: "LTCGBP",
                    price: "0.124.91",
                    Percent: "-3.05",
                    numberOfIntres: "261.35",
                    star: false
                },
                
            ]
        }
    ]
}

const reducer = produce((state, action) => {
    switch (action.type) {

    }

}, initialState)

const store = createStore(reducer);
window.store = store;
export default store;