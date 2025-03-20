import Sidebar from "./sidebar";

export default function MainLayout({ children }: React.PropsWithChildren) {
	return (
		<section className="md:grid md:grid-cols-[6fr_2fr] gap-[20px] w-full">
			{children}
			<Sidebar />
		</section>
	);
}
