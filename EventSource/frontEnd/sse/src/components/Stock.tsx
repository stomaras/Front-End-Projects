import React, { useEffect, useState } from 'react'

const Stock = () => {

    const [stockData, setStockData] = useState({
        stock1Rate:null,
        stock2Rate:null,
    });

    useEffect(() => {
        // opening a connection to the server to begin receiving events from it
        const eventSource = new EventSource("http://localhost:4001/rates");

        // attaching a handler to receive message events
        eventSource.onmessage = (event) => {
            const stockData = JSON.parse(event.data);
            setStockData({...stockData});
        };

        // terminating the connection on component unmount
        return () => eventSource.close();
    },[]);

  return (
    <main>
        <h1>Stock Prices</h1>
        <div>
            <p>Stock 1:{stockData.stock1Rate}</p>
            <p>Stock 2:{stockData.stock2Rate}</p>
        </div>
    </main>
  )
}

export default Stock