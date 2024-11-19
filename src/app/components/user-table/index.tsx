"use client";

// import Image from "next/image";
import { useUserContext } from "../../contexts/user-context";

export const UserTable = () => {
  const { filteredUsers } = useUserContext();

  return (
    <div>
      {filteredUsers.map((user) => (
        <li key={user.id}>
          <img
            src={user.image}
            alt={user.name}
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Phone: {user.phone}</div>
        </li>
      ))}
    </div>
  );
};
