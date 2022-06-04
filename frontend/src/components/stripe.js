import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios'


const Key = "pk_test_51KodqiE7ClCVAh8TDPPlavEnZXdhTITbtNYn7EcEWIk6R2kpe4OHkQjl2SBwwjjbi0FkXUzBqDZga8itNt1SLQ1h00h8rvDXRT"

const Stripe = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) =>{
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

  return (
    <StripeCheckout
        name="E-Commerce"
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={Key}
    >
        <button>Pay</button>
    </StripeCheckout>
  )
}

export default Stripe