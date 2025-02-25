import DefaultLayout from "@/layouts/default";
import ElectricBill from "@/components/Light/ElectricBill";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
            <ElectricBill/>
        </div>
      </section>
    </DefaultLayout>
  );
}
