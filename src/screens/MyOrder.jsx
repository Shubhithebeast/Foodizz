import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';

const MyOrder = () =>{

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log("fetchorder email: ",localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            console.log("fetch orderdata:",response)
            setorderData(response)

        })

    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <>
            <div>
                <Navbar />
            </div>

            <Container>
                <div className='row'>

                    
                    {orderData.length !==0 ? Array(orderData).map(data => {
                        return (
                            /* `data.orderData` is checking if the `orderData` property exists in the
                            `data` object. If it exists, it means that there is order data available
                            for that particular `data` object. */
                            data.orderData ?
                               
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : "sdfghjklkjhgfds"
                        )
                    }) :
                    <div><h1 className="w-100 text-center m-5">Oops! You don't have any Orders!</h1></div>
                    }
                </div>


            </Container>

            <Footer />
        </>
    )
}

export default MyOrder;