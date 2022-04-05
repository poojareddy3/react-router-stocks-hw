import { Link, Outlet} from 'react-router-dom'

function StocksHome(){
      return(
       <div className="stocks">
          <h1>Welcome to Stocks App</h1>
          {/* <div className="stocks-nav">
             <Link to="/stocks">Stocks</Link>
          </div> */}
          <Outlet />
         
       </div>
    )
}

export default StocksHome