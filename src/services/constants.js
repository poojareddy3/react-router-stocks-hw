import axios from "axios";

async function fetchData(symb) {
  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symb}/quote?token=pk_5995059784f44b3f96e697fc024553a0`
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;