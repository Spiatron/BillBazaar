import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

function BillBoxes() {
  type ButtonColor = "danger" | "primary" | "default" | "secondary" | "success" | "warning";

  const gasCompanies: { id: string; title: string; img: string; icon: string; buttonColor: ButtonColor; link: string }[] = [
    {
      id: "sui-gas-southern",
      title: "Sui Gas Southern",
      img: "/images/GasCompaines/SSGC.svg",
      icon: "/images/GasCompaines/SSGCI.svg",
      buttonColor: "danger",
      link: "/gas/sui-gas-southern",
    },
    {
      id: "sui-gas-northern",
      title: "Sui Gas Northern",
      img: "/images/GasCompaines/SNGPL.png",
      icon: "/images/GasCompaines/SNGPL.svg",
      buttonColor: "primary",
      link: "/gas/sui-gas-northern",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8" style={{ fontFamily: "kufi" }}>
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Gas Supply Companies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {gasCompanies.map((company) => (
          <Link key={company.id} to={`/gas/${company.id}`} className="block">
            <Card className="p-2 text-center shadow-md hover:shadow-xl transition-shadow bg-[#f5f5f5] dark:bg-[#18181b]">
              <CardHeader className="flex items-center gap-3 p-4">
                <div className="flex items-center justify-center">
                  <Image src={company.icon} alt="Gas Icon" className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-semibold">{company.title}</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center flex-col">
                <Image src={company.img} alt={company.title} style={{ width: "240px", height: "240px" }} />
              </CardBody>
              <CardFooter className="flex justify-end items-end">
                <Link to={company.link}>
                  <Button color={company.buttonColor} className="px-4 py-2 text-white transition">
                    View Bill
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { BillBoxes };
