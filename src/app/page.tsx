"use client";

// import styles from "./page.module.css";
import { UserProvider } from "./contexts/user-context";
import { UserTable } from "./components/user-table";

export default function Home() {
  return (
    <UserProvider>
      <div className="users-container">
        <h1>Users Table</h1>
        {/* <UsersSearch /> */}
        <UserTable />
      </div>
    </UserProvider>
  );
}
