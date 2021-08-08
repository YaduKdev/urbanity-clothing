import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JLbgaSDLb6EOYBqYzzmiienh5vzYqc6VCqo9Ys96jYZKiiqZpWpTw4MQAmcjm2FLHWY3Z8aNMmEq01GdwuHOBSg007HL0ibCC';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name= 'Urbanity Clothing Ltd.'
            billingAddress
            shippingAddress
            image={process.env.PUBLIC_URL+'/Images/logo-short.svg'}
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;