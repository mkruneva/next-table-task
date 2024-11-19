import { UserProvider } from "@/app/contexts/user-context";
import { UserTable } from "@/app/components/user-table";
import { UserSearch } from "@/app/components/user-search";

import { fetchUsers } from "./loader";

export default async function UsersPage() {
  const { users, isErrored } = await fetchUsers();
  console.log("isErrored", isErrored);
  console.log("users", users);
  return (
    <UserProvider initialUsers={users} isErrored={isErrored}>
      <div className="users-container">
        <h1>Users Table</h1>
        <UserSearch />
        <UserTable />
      </div>
    </UserProvider>
  );
}
