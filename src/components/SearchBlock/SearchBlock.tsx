import { Input } from "@mui/material";
import Form from "next/form";
import { redirect } from "next/navigation";

export default function SearchBlock() {
	const onSubmit = async (data: FormData) => {
		"use server";
		console.log(data);
		const query = data.get("query") || "";
		if (query) redirect(`/search?q=${query}`);
	};

	return (
		<Form
			className="hidden md:block w-full max-w-[450px]"
			action={onSubmit}
		>
			<Input
				name="query"
				className="w-full h-11"
				type="text"
				placeholder="Search..."
			/>
		</Form>
	);
}
