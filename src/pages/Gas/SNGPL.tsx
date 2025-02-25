import DefaultLayout from "@/layouts/default";
import SNGPL from "@/components/Gas/SNGPL";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <SNGPL/>
        </div>
      </section>
    </DefaultLayout>
  );
}
