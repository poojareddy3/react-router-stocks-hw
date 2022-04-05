import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "../services/constants";

function Stocks(){

    const { symbol } = useParams();
    const [stock, setStock] = useState({});
  
    async function renderData(){
        const response = await fetchData(symbol)
        setStock(response.data)
        console.log(stock)
    }
  
    useEffect(() => {
     renderData()
    }, []);

     return (
      <div className="stockInfo">
        <div id="info">Stock Information</div>
        <p><span>Stock Symbol: </span> {stock.symbol}</p>
        <p><span>Company Name:</span> {stock.companyName}</p>
        <p><span>Primary Exchange: </span>{stock.primaryExchange}</p>
        <p><span>Latest Price: </span>{stock.latestPrice}</p>
        <p><span>52 Week High: </span>{stock.week52High}</p>
        <p><span>52 Week Low: </span>{stock.week52Low}</p>
        <p><span>Market Cap: </span>{stock.marketCap}</p>
      </div>
    );
  }
  

export default Stocks