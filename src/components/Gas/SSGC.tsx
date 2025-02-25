import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Spinner } from "@heroui/spinner";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const SSGC: React.FC = () => {
  interface BillData {
    Name: string;
    "Customer Number": string;
    "Billing Month": string;
    "Due Date": string;
    "Amount Payable Within Due Date": string;
    "Late Payment Surcharge": string;
    "Payable After Due Date": string;
    "Bill View Link": string;
  }

  const [consumerNumber, setConsumerNumber] = useState("");
  const [data, setData] = useState<BillData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false); // Track fetch status

  const fetchBill = () => {
    if (!consumerNumber) {
      setError("Please enter a consumer number.");
      return;
    }

    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:8000/ssgc/fetch-bill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ consumer_number: consumerNumber }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
        setIsFetched(true); // Mark as fetched
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center" style={{fontFamily: "kufi"}}>
      <Card className="w-96 p-6">
        <div className="flex items-center mb-4">
          <Avatar src="/images/GasCompaines/SSGC.svg" alt="SSGC Logo" size="lg" />
          <h2 className="ml-3 text-xl font-semibold">SSGC Bill Checker</h2>
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
          <Card className="p-4 shadow-md bg-red-500">
            {/* <CardHeader className="text-lg font-semibold">Bill Details</CardHeader> */}
            <CardBody className="space-y-2">
              <p><strong>Name:</strong> {data?.Name}</p>
              <p><strong>Customer Number:</strong> {data?.["Customer Number"]}</p>
              <p><strong>Billing Month:</strong> {data?.["Billing Month"]}</p>
              <p><strong>Due Date:</strong> {data?.["Due Date"]}</p>
              <p><strong>Amount Payable Within Due Date:</strong> {data?.["Amount Payable Within Due Date"]}</p>
              <p><strong>Late Payment Surcharge:</strong> {data?.["Late Payment Surcharge"]}</p>
              <p><strong>Payable After Due Date:</strong> {data?.["Payable After Due Date"]}</p>
              <div className="flex justify-end items-center">
                <Link href={data?.["Bill View Link"]} target="_blank" rel="noopener noreferrer">
                 <Button>View Bill</Button> 
                </Link>
              </div>
            </CardBody>
          </Card>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </Card>
    </div>
  );
};

export default SSGC;
