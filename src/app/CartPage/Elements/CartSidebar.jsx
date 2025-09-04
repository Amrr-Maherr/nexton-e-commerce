"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCart from "@/Hooks/useCart";
import PayPalButton from "@/Payment/PayPalButton";
import Loader from "@/components/Loader/Loader";

export default function CartSidebar() {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [payment, setPayment] = useState("cash");

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", { ...customer, payment });
  };

  const { cart, loading, error } = useCart();

  if (loading) return <Loader />;
  if (error) return <p>Error loading cart</p>;

  const total = cart?.data?.totalCartPrice || 0;

  return (
    <div className="space-y-6">
      {/* Payment Method */}
      <div className="border rounded-lg shadow-sm bg-white p-4">
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={payment === "cash"}
              onChange={() => setPayment("cash")}
            />
            <Label>Cash on Delivery</Label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={payment === "online"}
              onChange={() => setPayment("online")}
            />
            <Label>Pay Online (Visa / Mastercard)</Label>
          </div>

          <Button type="submit" className="w-full">
            Confirm Order
          </Button>
          {payment === "online" && <PayPalButton amount={total} />}
        </div>
      </div>
      {payment === "cash" && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Info */}
          <div className="border rounded-lg shadow-sm bg-white p-4">
            <h3 className="text-lg font-semibold mb-4">Customer Info</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={customer.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={customer.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="+20 123 456 7890"
                value={customer.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border rounded-lg shadow-sm bg-white p-4">
            <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
            <div className="space-y-3">
              <div>
                <Label>Street Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="123 Main St"
                  value={customer.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="Cairo"
                  value={customer.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  placeholder="Egypt"
                  value={customer.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Postal Code</Label>
                <Input
                  type="text"
                  name="postalCode"
                  placeholder="12345"
                  value={customer.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
