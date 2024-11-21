'use client'

import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from 'react'
import { useDebounce } from 'use-debounce'

import { type User } from '@/app/users/user-types'
import { fetchUsers } from '@/app/users/fetch-users'

type UserContextType = {
  filteredUsers: User[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  clearSearch: () => void
  isLoading: boolean
  isErrored: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const initialUsers: User[] = []

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isErrored, setIsErrored] = useState(false)
  const [debouncedFilter] = useDebounce(searchTerm, 300)

  useEffect(() => {
    fetchUsers({
      searchTerm,
      onSuccess: (users) => {
        setUsers(users)
        setFilteredUsers(users)
      },
      onError: (error) => {
        console.error('Failed to fetch users:', error)
        setIsErrored(true)
      },
      onFinally: () => setIsLoading(false),
    })
  }, [debouncedFilter])

  const clearSearch = useCallback(() => {
    setSearchTerm('')
    setFilteredUsers(users)
  }, [users])

  const contextValue: UserContextType = {
    filteredUsers,
    searchTerm,
    setSearchTerm,
    clearSearch,
    isLoading,
    isErrored,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
