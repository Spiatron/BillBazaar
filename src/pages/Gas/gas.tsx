import DefaultLayout from "@/layouts/default";
import {BillBoxes} from "@/components/Gas/BillBoxes"

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <BillBoxes/>
        </div>
      </section>
    </DefaultLayout>
  );
}
