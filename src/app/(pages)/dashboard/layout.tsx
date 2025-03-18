import DashboardSidebar from "./dashboardSidebar";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <section className="grid grid-cols-[7fr_3fr] gap-[20px]">
      {children}
      <DashboardSidebar />
    </section>
  );
}
