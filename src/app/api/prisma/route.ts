import { prisma } from "@/config/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

//Separar la lógica para evitar utilizar el PrismaAdapter en el runtime de auth.ts
export const POST = async (req: NextRequest) => {
  const body = await req.json();

  console.log("BODY: ", body);

  const userFromDB = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  /* console.log({ userFromDB }); */

  return NextResponse.json(userFromDB);
};
