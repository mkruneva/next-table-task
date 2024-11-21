import { type User } from '@/app/users/user-types'
import { USERS_URL } from '@/app/constants'

export const createUser = async ({
  name,
  email,
  phone,
  image,
}: Partial<Omit<User, 'id'>>): Promise<User> => {
  try {
    const response = await fetch(USERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, image }),
    })

    if (!response.ok) {
      throw new Error(
        `Create user request failed with status ${response.status} ${response.statusText}`
      )
    }

    const createdUser: User = await response.json()

    return createdUser
  } catch (error) {
    console.error('Failed to create a new user:', error)
    // TODO: improve error handling
    throw new Error('An unexpected error occurred while creating new user.')
  }
}
