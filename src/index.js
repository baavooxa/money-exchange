// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return new Object({
            error: "You are rich, my friend! We don't have so much coins for exchange"
        });
    } else if (currency <= 0) {
        return new Object(); 
    }

    let moneyExchange = {};

    let p = currency % 5;
    currency -= p;
    
    let h = Math.floor(currency / 50);
    currency -= h * 50;
    
    let q = Math.floor(currency / 25);
    currency -= q * 25;
    
    let d = Math.floor(currency / 10);
    currency -= d * 10;
    
    let n = Math.floor(currency / 5);
    
    if (p !== 0) moneyExchange.P = p;
    if (h !== 0) moneyExchange.H = h;
    if (q !== 0) moneyExchange.Q = q;
    if (d !== 0) moneyExchange.D = d;
    if (n !== 0) moneyExchange.N = n;

    return moneyExchange; 
};
