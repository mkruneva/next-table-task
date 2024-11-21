import { type User } from '@/app/users/user-types'
import { USERS_URL } from '@/app/constants'

interface FetchUsersOptions {
  searchTerm?: string
}

export const fetchUsers = async (
  options: FetchUsersOptions = {}
): Promise<User[]> => {
  const { searchTerm } = options

  try {
    // Construct the URL with the search term if provided
    const url = searchTerm
      ? `${USERS_URL}?search=${encodeURIComponent(searchTerm)}`
      : USERS_URL

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(
        `Fetching user data request failed with status ${response.status} ${response.statusText}`
      )
    }

    const data: User[] = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw new Error('An unexpected error occurred while fetching users.')
  }
}
