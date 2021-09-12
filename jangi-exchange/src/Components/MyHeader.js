import React from 'react'
import './myheader.css';
export default function MyHeader() {
    return (
        <div className = "headerBody">
           <div className = "maindiv1">
               JANGI Exchange
           </div>
           <div className = "maindiv2">
                <div className = "div1">
                    Buy Crypto(FCFA)
                </div>
                <div className = "div2">
                    Markets
                </div>
                <div className = "div3">
                    Swap
                </div>
                <div className = "div4">
                        Finance
                </div>
           </div>
           <div className = "maindiv3">
                <div className = "div5">
                    Register
                </div>
                <div className = "div6">
                    Login
                </div>
                <div className = "div7">
                    Language
                </div>
                <div className = "div8">
                    Currency
                </div>
           </div>
        </div>
    );
}
