import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'



const stripePromise = loadStripe("pk_test_51NF5LVFpv48uzEKQaX5jYicyexHL4YETACq0So8UYEFJR0VYSjnyC2io2ozA5hDfdd6OFnztstRv1BotsySrkUrN00adgB8SY6")

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if(!error){
      console.log(paymentMethod);
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post('http://localhost:8085/', {
          id,
          amount: 10000
        })
  
        console.log(data);
  
        elements.getElement(CardElement).clear();
        
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <img 
        src='https://cdn-icons-png.flaticon.com/512/32/32069.png' 
        alt='corte'
      />
      <h3 className='text-center'>Precio: 100$</h3>
      <CardElement />
      <button className='border bg-green-500 rounded px-4' disabled={!stripe}>
        Pagar
      </button>
    </form>
  )
}
function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <div className='container p-'>
        <CheckoutForm />
      </div>
    </Elements>
  )
}

export default Stripe;
