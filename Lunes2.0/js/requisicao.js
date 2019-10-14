// API BTC
axios.get('https://chain.so/api/v2/get_price/BTC')
    .then(function(response) {
        const preco = response.data.data.prices.filter(item => { return item.exchange === 'bitfinex' && item.price_base === "USD" });
        const altera = document.querySelector('.valor-btc');
        altera.innerHTML = 'U$ ' + Math.round(preco[0].price);
    })
    .catch(function(error) {
        console.warn(error);
    });

// API LTC
axios.get('https://chain.so/api/v2/get_price/LTC/USD')
    .then(function(response) {
        const preco = response.data.data.prices.filter(item => { return item.exchange === 'bitfinex' && item.price_base === "USD" });
        const altera = document.querySelector('.valor-ltc');
        altera.innerHTML = 'U$ ' + preco[0].price;
    })
    .catch(function(error) {
        console.warn(error);
    });