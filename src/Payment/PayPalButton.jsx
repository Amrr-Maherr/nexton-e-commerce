import { useRef } from "react";
import Script from "next/script";

export default function PayPalButton({ amount }) {
  const clientId =
    "AX3nvZtR_VZwQRhN44tjU22Whsw-IV0tdSuJSwzjXbF8s7SL1XCWEJW1UkYAXjBMsyd_K4JoekphoEho";
  const paypalRef = useRef(null);

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`}
        strategy="afterInteractive"
        onLoad={() => {
          if (paypalRef.current) {
            window.paypal
              .Buttons({
                createOrder: (data, actions) => {
                  return actions.order.create({
                    purchase_units: [{ amount: { value: amount.toFixed(2) } }],
                  });
                },
                onApprove: (data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(
                      "تم الدفع بنجاح بواسطة " + details.payer.name.given_name
                    );
                  });
                },
              })
              .render(paypalRef.current);
          }
        }}
      />
      <div ref={paypalRef}></div>
    </>
  );
}
