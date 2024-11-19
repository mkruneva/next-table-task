import { type User } from "./types";

const FETCH_USERS_URL = "/api/users";

export const fetchUsers = async (): Promise<{
  users: User[];
  isErrored?: boolean;
}> => {
  try {
    const url = `${process.env.URL}${FETCH_USERS_URL}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const users: User[] = await response.json();
    return { users };
  } catch (error) {
    console.error("Failed to fetch users:", error);

    return { users: [], isErrored: true };
  }
};

export default fetchUsers;
