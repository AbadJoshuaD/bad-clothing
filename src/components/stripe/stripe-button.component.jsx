import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ITcfbEsA7SzTvvkRTEdog9KP006HE0dTUj';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Bad Clothing Ltd.'
            billingAddress
            shippingAddress
            image =''
            description ={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel ='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )

}

export default StripeCheckoutButton;