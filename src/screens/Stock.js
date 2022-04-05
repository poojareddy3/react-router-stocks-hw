import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import fetchData from "../services/constants";

function Stock(){
    const navigate = useNavigate()
    // const [stocks, setStocks] = useState({})
    const [symbol, setSymbol] = useState("")

    const handleOnChange = (e) => {
         e.preventDefault()
         setSymbol(e.target.value)
    }

//    async function handleBtnClick(e) {
//             const response = await fetchData(symbol)
//             setStocks(response.data)
//             console.log(stocks)
//             setSymbol('')
//         }

    return(
    <div className="stocksDiv">
        <div className="searchDiv">
        <input type="text" placeHolder="Enter Stock Symbol" onChange={(e) => {handleOnChange(e)}}/>
        {/* <button onClick={(e) => {handleBtnClick(e)}}>Search</button> */}
        </div>
        <div className="symbol">
        <h3 onClick={() => navigate(`/stocks/${symbol}`)}>{symbol}</h3>
        </div>
    </div>
    )
}

export default Stock