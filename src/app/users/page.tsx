import { UserProvider } from "./user-context";
import { UserTable } from "./user-table";
import { UserSearch } from "./user-search";

import "./users-page.scss";

export default function Home() {
  return (
    <div className="users-page">
      <h1>Users Table</h1>
      <UserProvider>
        <UserSearch />
        <UserTable />
      </UserProvider>
    </div>
  );
}
