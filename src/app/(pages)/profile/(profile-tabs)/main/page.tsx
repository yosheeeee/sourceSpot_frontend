"use client";
import { generateZodSchema } from "@/functions/generateZodSchema";
import { IInputField } from "@/types/inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlignVerticalCenter } from "@mui/icons-material";
import { Avatar, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const inputFields: IInputField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "nickName",
    label: "Nick Name",
    type: "text",
    required: true,
  },
  // Новые поля
  {
    name: "birthDate",
    label: "Date of Birth",
    type: "date",
    required: true,
  },
  {
    name: "status",
    label: "Status",
    type: "text",
    required: false,
  },
  {
    name: "about",
    label: "About Yourself",
    type: "textarea",
    required: false,
  },
];

export default function ProfileMainTabPage() {
  const formSchema = generateZodSchema(inputFields);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formSchema),
  });
  const avatarInputRef = useRef(null);
  const [avatarFile, setAvatarFile] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      <div className="hero flex gap-3 items-center">
        <button
          className="relative cursor-pointer"
          onClick={() => avatarInputRef.current.click()}
        >
          <Avatar src={avatarFile} sx={{ width: 100, height: 100 }} />
        </button>
        <input
          className="sr-only"
          type="file"
          accept="image/*"
          ref={avatarInputRef}
          onChange={(e) => setAvatarFile(e.target.files[0])}
        />
        <h1 className="text-3xl">Antipin Egor</h1>
      </div>
      <form>
        <div className="grid grid-cols-[auto_auto_auto] gap-2">
          {inputFields.map((f) => (
            <Controller
              name={f.name as Path<T>}
              control={control}
              render={({ field }) => (
                <TextField
                  classes={{ root: "w-full" }}
                  {...field}
                  required={f.required}
                  type={f.type}
                  placeholder={f.placeholder}
                  label={f.label}
                  className="w-[400px]"
                  error={!!errors[f.name]}
                  helperText={errors[f.name]?.message ?? ""}
                />
              )}
              key={f.name}
            />
          ))}
          <Button type="submit" variant="contained" className="col-start-3">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
