import { type User } from '@/app/users/user-types'
import { USERS_URL } from '@/app/constants'

export const createUser = async ({
  name,
  email,
  phone,
  // TODO: handle empty image
  image = './placeholder.svg',
}: Partial<Omit<User, 'id'>>): Promise<void> => {
  try {
    const response = await fetch(USERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, image }),
    })

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const updatedUsers = await response.json()
    console.log('updatedUsers', updatedUsers)
    // onSuccess(users);
  } catch (error) {
    console.error('Failed to fetch users:', error)
    // onError(
    //   error instanceof Error ? error : new Error("An unknown error occurred")
    // );
  } finally {
    // redirect
  }
}
