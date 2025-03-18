import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="app" className="flex flex-col h-full overflow-hidden">
      <Header />
      <main className="flex-grow max-w-[1920px] px-4 mx-auto w-full h-full overflow-y-auto">
        {children}
      </main>
      <Footer />
    </section>
  );
}
