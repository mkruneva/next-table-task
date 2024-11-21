import { type User } from '@/app/users/user-types'
import { USERS_URL } from '@/app/constants'

export const createUser = async (
  { name, email, phone, image }: Partial<Omit<User, 'id'>>,
  onSuccess?: (createdUser: User) => void,
  onError?: (error: Error | undefined) => void
): Promise<void> => {
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

    const createdUser = await response.json()

    if (onSuccess) {
      onSuccess(createdUser)
    }
  } catch (error) {
    console.error('Failed to create a new user:', error)
    if (onError) {
      onError(
        error instanceof Error ? error : new Error('An unknown error occurred')
      )
    }
  }
}
