"use client";
import { IInputField } from "@/types/inputs";
import { z } from "zod";

export const generateZodSchema = (inputFields: IInputField[]) => {
  const schemaShape: Record<string, z.ZodTypeAny> = {};

  inputFields.forEach((field) => {
    let fieldSchema: z.ZodTypeAny;

    switch (field.type) {
      case "mail":
        fieldSchema = z
          .string()
          .email({ message: field.helperText ?? "Email is not correct" })
          .nonempty({ message: "Email is required" });
        break;
      case "password":
        fieldSchema = z
          .string()
          .min(6, {
            message:
              field.helperText ?? "Password should be more than 6 symbols",
          })
          .nonempty({ message: "Password is required" });
        break;
      case "number":
        fieldSchema = z.number();
      default:
        fieldSchema = z
          .string()
          .nonempty({ message: `${field.label} is required` });
    }

    if (field.required) {
      fieldSchema = fieldSchema.nonempty({
        message: `${field.label} is required`,
      });
    }

    schemaShape[field.name] = fieldSchema;
  });

  return z.object(schemaShape);
};
