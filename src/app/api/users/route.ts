import { NextRequest, NextResponse } from "next/server";

export type User = {
  id: number;
  name: string;
  image: string;
  email: string;
  phone: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Emily Johnson",
    email: "emily.johnson@x.dummyjson.com",
    image: "https://dummyjson.com/icon/emilys/128",
    phone: "+81 965-431-3024",
  },
  {
    id: 2,
    name: "Michael Williams",
    email: "michael.williams@x.dummyjson.com",
    image: "https://dummyjson.com/icon/michaelw/128",
    phone: "+49 258-627-6644",
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia.brown@x.dummyjson.com",
    image: "https://dummyjson.com/icon/sophiab/128",
    phone: "+81 210-652-2785",
  },
  {
    id: 4,
    name: "James Davis",
    email: "james.davis@x.dummyjson.com",
    image: "https://dummyjson.com/icon/jamesd/128",
    phone: "+49 614-958-9364",
  },
];

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
  const { name } = body;

  // TODO: additional validation
  if (!name) {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    image: `/placeholder.svg?height=40&width=40&text=${encodeURIComponent(
      name[0]
    )}`,
    email: "test.testov@test.test",
    phone: "+81 965-431-3024",
  };

  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
