import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './homePage.css'


const Home = () => {
    const navigate = useNavigate();

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [price, setPrice] = useState(0)
    const [dataMin, setDataMin] = useState()
    const [dataMax, setDataMax] = useState()


    console.log(from)
    console.log(to)
    console.log(price)


    const sendData = async (e) => {
        e.preventDefault();

        let result = await fetch(`https://currency-converter-back-ptxpg4s4x-raj3028.vercel.app/currencyConverter?from=${from}&to=${to}&price=${price}`, {
            method: "get",
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)

        } else {
            console.log(result.data);
            setDataMin(result.data.min);
            setDataMax(result.data.max);
        }
    }

    const currencyName = ['INR', 'KRW', 'USD', 'EUR', 'CNY']

    return (

        <>
            <div className="container-fluid">

                {/* <h3>Hello, I'm Priyanka...😊</h3> */}

                <br />
                <br />
                <br />
                <br />
                <br />

                <h2>Currency Converter</h2>

                <hr />
                <div className="container">
                    <br />
                    <br />

                    {/* <h3><b>Converted Price: {convertedPrice}</b></h3> */}

                    <br />
                    <div className="form-inline" >
                        <form action="/action_page.php">
                            <br />

                            <div className="form-group">
                                <label htmlFor="price"><b>Price</b></label><br />
                                <input type="number" className="form-control input" id="price" placeholder="Enter price to convert" name="price"
                                    value={price} min="0"
                                    onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <br />

                            <div className="form-group">
                                <label htmlFor="from"><b>From</b></label><br />
                                <select name="from" id="from" onChange={(e) => setFrom(e.target.value)} required>

                                    <option disabled selected value="">-- select an currency --</option>
                                    {currencyName.map((val) => {
                                        return (<option value={val} >{val}</option>)
                                    })}

                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="to"><b>To</b></label><br />
                                <select name="to" id="to" onChange={(e) => setTo(e.target.value)} required>

                                    <option disabled selected value="">-- select an currency --</option>
                                    {currencyName.map((val) => {
                                        return (<option value={val} >{val}</option>)
                                    })}

                                </select>
                            </div>
          
                            <br />
                            <br />

                            <button type="submit" className="btnn" onClick={sendData}>Convert</button>
                        </form>

                        <br />

                        <div className="container">
                            <h5><b>Minimum <br /> Exchange Amount:</b><br /><br /><span>{dataMin}</span> </h5>
                            <h5><b>Maximum <br /> Exchange Amount:</b> <br /> <br /><span>{dataMax}</span>  </h5>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home