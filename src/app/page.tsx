"use client";

// import styles from "./page.module.css";
import { UserProvider } from "./contexts/user-context";
import { UserTable } from "./components/user-table";
import { UserSearch } from "./components/user-search";

export default function Home() {
  return (
    <UserProvider>
      <div className="users-container">
        <h1>Users Table</h1>
        <UserSearch />
        <UserTable />
      </div>
    </UserProvider>
  );
}
