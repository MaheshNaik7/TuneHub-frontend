import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    script2.onload = () => initializePayment();
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  function initializePayment() {
    $(document).ready(function () {
      $(".buy-button").click(function (e) {
        e.preventDefault();
        createOrder();
      });
    });
  }

  function createOrder() {
    $.post("/createOrder")
      .done(function (order) {
        order = JSON.parse(order);
        var options = {
          key: "rzp_test_K9yot4tM4awGE7",
          amount: order.amount_due.toString(),
          currency: "INR",
          name: "Tune Hub",
          description: "Test Transaction",
          order_id: order.id,
          handler: function (response) {
            verifyPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature
            );
          },
          prefill: {
            name: "Your Name",
            email: "test@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Your Address",
          },
          theme: {
            color: "#F37254",
          },
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
      })
      .fail(function (error) {
        console.error("Error:", error);
      });
  }

  function verifyPayment(orderId, paymentId, signature) {
    $.post("/verify", { orderId: orderId, paymentId: paymentId, signature: signature })
      .done(function (isValid) {
        if (isValid) {
          alert("Payment successful");
          history.push("/payment-success");
        } else {
          alert("Payment failed");
          history.push("/payment-failure");
        }
      })
      .fail(function (error) {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <h1>Pay</h1>
      <div>
        <h1>Why premium ? </h1>
        <p>text...................</p>

        <form id="payment-form">
          <button type="submit" className="buy-button">
            BUY
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;


// function Payment(){
//     return(
//         <div>
//             <h1>Pay</h1>
//             <div>

//                 <h1>Why premium ? </h1>
//                 <p>text...................</p>
                
//                 <form id="payment-form">
//                     <button type="submit" class="buy-button">BUY</button>
//                 </form>
   
//             </div>

// 	<script>
//         $(document).ready(function() {
//             $(".buy-button").click(function(e) {
//                 e.preventDefault();
//                 var form = $(this).closest('form');
                
                
//                 createOrder();
//             })
//         });

// 	function createOrder() {
		
// 	    $.post("/createOrder")
// 	        .done(function(order) {
// 	            order = JSON.parse(order);
// 	            var options = {
// 	                "key": "rzp_test_K9yot4tM4awGE7",
// 	                "amount": order.amount_due.toString(),
// 	                "currency": "INR",
// 	                "name": "Tune Hub",
// 	                "description": "Test Transaction",
// 	                "order_id": order.id,
// 	                "handler": function (response) {
// 	                    verifyPayment(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
// 	                },
// 	                "prefill": {
// 	                    "name": "Your Name",
// 	                    "email": "test@example.com",
// 	                    "contact": "9999999999"
// 	                },
// 	                "notes": {
// 	                    "address": "Your Address"
// 	                },
// 	                "theme": {
// 	                    "color": "#F37254"
// 	                }
// 	            };
// 	            var rzp1 = new Razorpay(options);
// 	            rzp1.open();
// 	        })
// 	        .fail(function(error) {
// 	            console.error("Error:", error);
// 	        })
// 	}
	
// 		function verifyPayment(orderId, paymentId, signature) {
// 		     $.post("/verify", { orderId: orderId, paymentId: paymentId, signature: signature })
// 		         .done(function(isValid) {
// 		             if (isValid) {
// 		                 alert("Payment successful");
// 		                 window.location.href = 'payment-success';
// 		             } else {
// 		                 alert("Payment failed");
// 		                 window.location.href = 'payment-failure';
// 		             }
// 		         })
// 		         .fail(function(error) {
// 		             console.error("Error:", error);
// 	         })
// 		}
//     </script>
//     </div>
//     )
// }

// export default Pay;

// {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
// 	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> */}