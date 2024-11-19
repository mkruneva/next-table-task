import { NextRequest, NextResponse } from "next/server";
import { users } from "./userData";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");

  if (search) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    return NextResponse.json(filteredUsers);
  } else {
    return NextResponse.json(users);
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, image } = body;

  // TODO: additional validation
  if (!name) {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }

  const newUser = {
    id: users.length + 1,
    name,
    image,
    email,
    phone,
  };

  users.unshift(newUser);
  return NextResponse.json(users, { status: 201 });
}
