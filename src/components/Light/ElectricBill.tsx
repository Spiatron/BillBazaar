"use client";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Spinner } from "@heroui/spinner";
import { Skeleton } from "@heroui/skeleton";
import { RadioGroup, Radio } from "@heroui/radio";
import { Divider } from "@heroui/divider";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ElectricBill = () => {
  const [selectedOption, setSelectedOption] = useState("Customer-ID");
  const [inputValue, setInputValue] = useState("");
  const [referenceType, setReferenceType] = useState("U");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setInputValue(""); // Reset input value when option changes
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleReferenceTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setReferenceType(event.target.value);
  };

  const fetchBill = async (appno: string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://bill.pitc.com.pk/${id}/general?appno=${appno}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch the bill. Please try again.");
      }

      const text = await response.text();

      const newTab = window.open();
      if (newTab) {
        newTab.document.write(text);
        newTab.document.close();
      } else {
        throw new Error("Failed to open a new tab.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!inputValue) {
      setError("Please enter a valid input.");
      return;
    }

    const payload =
      selectedOption === "Reference-No"
        ? `${inputValue}${referenceType}`
        : inputValue;

    fetchBill(payload);
  };

  return (
    <div className="flex justify-center items-center" style={{fontFamily:"kufi"}}>
      <Card className="w-96" radius="lg">
        <CardHeader className="flex gap-3">
          <Avatar
            isBordered
            radius="sm"
            size="lg"
            alt="BillBazaar logo"
            src={`/images/ElectricCompaniesImages/bill.svg`}
          />
          <div className="flex flex-col">
            <p className="text-lg text-start">Bill Bazaar</p>
            <p className="text-small text-default-500">
              AB Bill Dekhna Hua Asaan
            </p>
          </div>
        </CardHeader>
        <Divider />

        <CardBody className="overflow-visible py-2">
          <RadioGroup
            orientation="horizontal"
            value={selectedOption}
            onChange={handleOptionChange}
            className="mb-3"
          >
            <Radio value="Reference-No">Reference No</Radio>
            <Radio value="Customer-ID">Customer ID</Radio>
          </RadioGroup>
          {selectedOption === "Reference-No" && (
            <Input
              endContent={
                <div className="flex items-center">
                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="referenceNO"
                    name="referenceNO"
                    value={referenceType}
                    onChange={handleReferenceTypeChange}
                  >
                    <option value="U">U</option>
                    <option value="R">R</option>
                  </select>
                </div>
              }
              placeholder="Enter a valid 14-digit reference no"
              value={inputValue}
              onChange={handleInputChange}
            />
          )}
          {selectedOption === "Customer-ID" && (
            <Input
              type="text"
              placeholder="Enter a valid 10-digit customer ID"
              value={inputValue}
              onChange={handleInputChange}
            />
          )}
        </CardBody>
        <Divider />

        <CardFooter className="justify-end gap-2">
          <Link to="/light">
            <Button color="default" variant="ghost">
              Back
            </Button>
          </Link>
          <Button color="warning" onClick={handleSubmit} disabled={loading}>
            {loading ? "Fetching..." : "Submit"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ElectricBill;
