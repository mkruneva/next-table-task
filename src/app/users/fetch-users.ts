import { type User } from "@/app/users/user-types";

const FETCH_USERS_URL = "/api/users";

export const fetchUsers = async ({
  searchTerm,
  onSuccess,
  onError,
  onFinally,
}: {
  searchTerm?: string;
  onSuccess: (users: User[]) => void;
  onError: (error: Error) => void;
  onFinally?: () => void;
}): Promise<void> => {
  try {
    // Construct the URL with the search term if provided
    const url = searchTerm
      ? `${FETCH_USERS_URL}?search=${encodeURIComponent(searchTerm)}`
      : FETCH_USERS_URL;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const users: User[] = await response.json();
    onSuccess(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    onError(
      error instanceof Error ? error : new Error("An unknown error occurred")
    );
  } finally {
    if (onFinally) {
      onFinally();
    }
  }
};
