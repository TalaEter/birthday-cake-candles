function birthdayCakeCandles(...candles){0
    let count=0;
    let max= candles.reduce( (a, b) => a>b ? a : b);
    for(let candle of candles) if(candle === max)count++;
    return count;
}