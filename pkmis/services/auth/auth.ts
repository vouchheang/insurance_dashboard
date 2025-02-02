"use server";

import { FormState, LoginFormSchema } from "@/services/auth/definitions";
import {
  createSession,
  deleteSession,
} from "@/services/auth/stateless-session";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function login(email: string, password: string): Promise<void> {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Not found!");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid password!");
  }

  const userId = user.id.toString();
  await createSession(userId);
}

export async function loginWithFormData(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const errorMessage = { message: "Invalid login credentials." };

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await prisma.users.findUnique({
    where: {
      email: validatedFields.data.email,
    },
  });
  console.log("user:", user);

  if (!user) {
    return errorMessage;
  }

  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  );

  if (!passwordMatch) {
    return errorMessage;
  }

  const userId = user.id.toString();
  await createSession(userId);
}

export async function logout() {
  deleteSession();
}
