import Link from "next/link";

import { UserProvider } from "./user-context";
import { UserTable } from "./user-table";
import { UserSearch } from "./user-search";

import "./users-page.scss";
export default function UserPage() {
  return (
    <div className="users-page">
      <h1>Users Table</h1>
      <Link href="/create-user">Create user</Link>
      <UserProvider>
        <UserSearch />
        <UserTable />
      </UserProvider>
    </div>
  );
}
