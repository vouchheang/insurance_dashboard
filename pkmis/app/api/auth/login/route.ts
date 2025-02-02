import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { createSessionAPI } from "@/services/auth/stateless-session";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Incorrect email address or password" },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Incorrect email address or password" },
        { status: 401 }
      );
    }

    const userId = user.id.toString();
    const session = await createSessionAPI(userId);

    return NextResponse.json({
      message: "Authorized",
      data: { userId, session },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
