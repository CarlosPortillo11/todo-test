import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const compare = await bcrypt.compare(body.password, body.hashedPassword);

  return NextResponse.json(compare);
};
