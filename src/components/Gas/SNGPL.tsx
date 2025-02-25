import React, { useState } from "react";
import { Card } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Spinner } from "@heroui/spinner";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const SNGPL: React.FC = () => {
  const [consumerNumber, setConsumerNumber] = useState("");
  const [billData, setBillData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const fetchBill = async () => {
    if (!consumerNumber) {
      setError("Please enter a consumer number.");
      return;
    }

    setLoading(true);
    setError(null);
    setBillData(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/sngpl/fetch-bill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ consumer_number: consumerNumber }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setLoading(false);
      setBillData(data);
      setIsFetched(true);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ fontFamily: "kufi" }}
    >
      <Card className="w-96 p-6">
        <div className="flex items-center mb-4">
          <Avatar
            src="/images/GasCompaines/SNGPL.svg"
            alt="SNGPL Logo"
            size="lg"
          />
          <h2 className="ml-3 text-xl font-semibold">SNGPL Bill Checker</h2>
        </div>

        {/* Input Field */}
        <Input
          type="text"
          placeholder="Enter Consumer Number"
          value={consumerNumber}
          onChange={(e) => setConsumerNumber(e.target.value)}
          className="mb-4"
        />

        {/* Button or Bill Details */}
        {!isFetched ? (
          <Button color="danger" onPress={fetchBill} className="w-full">
            {loading ? (
              <div className="flex items-center gap-2">
                <Spinner color="default" size="sm" /> Fetching...
              </div>
            ) : (
              "View Bill"
            )}
          </Button>
        ) : (
          <Card className="p-4 shadow-md bg-blue-500 text-white">
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {billData?.data?.Name}
              </p>
              <p>
                <strong>Customer Number:</strong>{" "}
                {billData?.data?.["Account ID"]}
              </p>
              <p>
                <strong>Billing Month:</strong>{" "}
                {billData?.data?.["Billing Month"]}
              </p>
              <p>
                <strong>Due Date:</strong> {billData?.data?.["Due Date"]}
              </p>
              <p>
                <strong>Amount Payable Within Due Date:</strong>{" "}
                {billData?.data?.["Payable Within Due Date"]}
              </p>
              <p>
                <strong>Amount After Due Date:</strong>{" "}
                {billData?.data?.["Amount After Due Date"]}
              </p>
              <div className="flex justify-end items-center">
                {billData?.data?.["View Bill Link"] && (
                  <Link
                    href={billData?.data?.["View Bill Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="default">View Bill</Button>
                  </Link>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </Card>
    </div>
  );
};

export default SNGPL;
