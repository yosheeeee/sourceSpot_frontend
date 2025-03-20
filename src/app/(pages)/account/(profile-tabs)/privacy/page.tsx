"use client";
import { generateZodSchema } from "@/functions/generateZodSchema";
import { IInputField } from "@/types/inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const inputFields: IInputField[] = [
  {
    name: "profileVisibility",
    label: "Who can see my profile",
    type: "select",
    options: [
      {
        title: "Nobody",
        value: "nobody",
      },
      {
        title: "Friends",
        value: "friends",
      },
      {
        title: "Everyone",
        value: "all",
      },
    ],
  },
  {
    name: "projectVisibility",
    label: "Who can see my projects",
    type: "select",
    options: [
      {
        title: "Nobody",
        value: "nobody",
      },
      {
        title: "Friends",
        value: "friends",
      },
      {
        title: "Everyone",
        value: "all",
      },
    ],
  },
  {
    name: "sourceVisibility",
    label: "Who can see project source code",
    type: "select",
    options: [
      {
        title: "Nobody",
        value: "nobody",
      },
      {
        title: "Friends",
        value: "friends",
      },
      {
        title: "Everyone",
        value: "all",
      },
    ],
  },
  {
    name: "commentVisibility",
    label: "Who can comment on my projects",
    type: "select",
    options: [
      {
        title: "Nobody",
        value: "nobody",
      },
      {
        title: "Friends",
        value: "friends",
      },
      {
        title: "Everyone",
        value: "all",
      },
    ],
  },
];
export default function PrivacyPage() {
  const formSchema = generateZodSchema(inputFields);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl">Privacy Settings:</h1>
      <form>
        <div className="flex flex-col gap-2">
          {inputFields.map((f) => (
            <div
              className="flex items-center gap-2 justify-between"
              key={f.name}
            >
              <p className="text-xl">{f.label}</p>
              <Controller
                name={f.name as Path<T>}
                control={control}
                render={({ field }) => (
                  <Select
                    // classes={{ root: "w-full" }}
                    {...field}
                    required={f.required}
                    type={f.type}
                    className="w-[400px]"
                    error={!!errors[f.name]}
                    helperText={errors[f.name]?.message ?? ""}
                    key={f.name}
                  >
                    {f.options?.map((opt) => (
                      <MenuItem value={opt.value}>{opt.title}</MenuItem>
                    ))}
                  </Select>
                )}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
