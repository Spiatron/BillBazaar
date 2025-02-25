import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "react-router-dom";

function BillBoxes() {
  const list = [
    {
      id: "lescobill",
      title: "Lahore Electric Supply Company",
      img: "/images/ElectricCompaniesImages/lesco.png",
    },
    {
      id: "gepcobill",
      title: "Gujranwala Electric Power Company",
      img: "/images/ElectricCompaniesImages/gepco.png",
    },
    {
      id: "fescobill",
      title: "Faisalabad Electric Supply Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "iescobill",
      title: "Islamabad Electric Supply Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "mepcobill",
      title: "Multan Electric Power Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "pescobill",
      title: "Peshawar Electric Supply Company",
      img: "/images/ElectricCompaniesImages/pesco.png",
    },
    {
      id: "hescobill",
      title: "Hyderabad Electric Supply Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "sepcoebill",
      title: "Sukkur Electric Power Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "qescobill",
      title: "Quetta Electric Supply Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "tescobill",
      title: "Tribal Electric Supply Company",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
    {
      id: "kelectricbill",
      title: "K-Electric",
      img: "/images/ElectricCompaniesImages/bill.svg",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8" style={{fontFamily:"kufi"}}>
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Electric Supply Companies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((company) => (
          <Link key={company.id} to={`/bill/${company.id}`} className="block">
            <Card className="p-4 text-center shadow-md hover:shadow-xl transition-shadow bg-[#f5f5f5] dark:bg-[#18181b]">
              <CardHeader className="flex justify-center p-0">
                <Image
                  src={company.img}
                  alt={company.title}
                  className="h-72 w-72 object-contain"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-sm font-semibold dark:text-white text-center">
                  {company.title}
                </h3>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { BillBoxes };
