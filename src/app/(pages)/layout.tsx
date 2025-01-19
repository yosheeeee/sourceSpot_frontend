import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="app" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </section>
  );
}
