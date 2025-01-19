"use client";
import TextOnLine from "@/ui/textOnLine";
import { TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import {
  Controller,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import GitHubOauthItem from "./gitHubOauthItem";
import { IInputField } from "@/types/inputs";
import { generateZodSchema } from "@/functions/generateZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AuthForm<T extends FieldValues>({
  inputFields,
  onSubmit,
  headingText,
  afterfFromText,
  submitButtonText,
  error,
}: {
  inputFields: IInputField[];
  onSubmit: SubmitHandler<T>;
  headingText: string;
  afterfFromText: {
    text: string;
    linkText: string;
    rerdirectLink: string;
  };
  submitButtonText: string;
  error?: string;
}) {
  const formSchema = generateZodSchema(inputFields);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      className="flex flex-col gap-3 p-6 border-gray-500 rounded-md border max-w-full overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl">{headingText}</h1>
      {error?.length != 0 && <Typography color="error">{error}</Typography>}
      {inputFields.map((f) => (
        <Controller
          name={f.name as Path<T>}
          control={control}
          render={({ field }) => (
            <TextField
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
      <Button variant="contained" type="submit">
        {submitButtonText}
      </Button>
      <p className="text-gray-400 text-center">
        {afterfFromText.text}{" "}
        <Link className="underline" href={afterfFromText.rerdirectLink}>
          {afterfFromText.linkText}
        </Link>
      </p>
      <TextOnLine text="or" />
      <div className="flex flex-col gap-1">
        <GitHubOauthItem />
      </div>
    </form>
  );
}
