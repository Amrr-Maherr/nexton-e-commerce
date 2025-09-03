"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CartSidebar() {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [payment, setPayment] = useState("cash");

  return (
    <div className="space-y-6">
      {/* Customer Info */}
      <div className="border rounded-lg shadow-sm bg-white p-4">
        <h3 className="text-lg font-semibold mb-4">Customer Info</h3>
        <div className="space-y-3">
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Phone</Label>
            <Input
              type="tel"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Address</Label>
            <Input
              type="text"
              value={customer.address}
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
            />
          </div>
        </div>
      </div>

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
            <Label>Pay Online</Label>
          </div>
          <Button className="w-full">Confirm Order</Button>
        </div>
      </div>
    </div>
  );
}
