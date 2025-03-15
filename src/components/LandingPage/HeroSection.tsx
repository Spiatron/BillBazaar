import { Button } from "@heroui/button";
import { Card, CardHeader } from "@heroui/card";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // Floating effect
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const billCategories = [
  {
    title: "Electricity Bills",
    img: "/images/heroSection/electricBill.svg",
  },
  {
    title: "Gas Bills",
    img: "/images/heroSection/gasBill.svg",
  },
  {
    title: "Internet Bills",
    img: "/images/heroSection/internetBill.svg",
  },
  {
    title: "Water Bills",
    img: "/images/heroSection/waterBill.svg",
  },
];

function HeroSection() {
  return (
    <section style={{ fontFamily: "kufi" }}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12">
        
        {/* Text Section - Appears first on all screens */}
        <div className="mr-auto place-self-center lg:col-span-7 order-1 lg:order-first">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Sab Bills Ek Hi Jagah
          </h1>
          <div className="inline-block max-w-xl text-center justify-center">
            <span className="text-2xl">Ab Na Ho Koi </span>
            <ReactTyped
              className="text-2xl"
              strings={["Confusion", "Tension"]}
              typeSpeed={70}
              backSpeed={70}
              backDelay={1000}
              loop={true}
            />
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <Button color="warning" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center">
              Get started
            </Button>
            <Button variant="bordered" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center">
              Learn more
            </Button>
          </div>
        </div>

        {/* Bills Cards Section - Appears below text on small & medium screens */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-5 order-2 lg:order-last">
          {billCategories.map((bill, index) => (
            <motion.div
              key={index}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            >
              <Card className="p-6 text-center shadow-lg bg-[#f5f5f5] dark:bg-[#18181b]">
                <CardHeader className="p-0">
                  <img
                    src={bill.img}
                    alt={bill.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
