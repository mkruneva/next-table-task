import Link from 'next/link'

import { UserProvider } from './user-context'
import { UserTable } from './components/user-table'
import { UserSearch } from './components/user-search'

import './users-page.scss'

export default function UsersPage() {
  return (
    <div className="users-page">
      <h1>Users Table</h1>
      <UserProvider>
        <div className="users-page-header">
          <UserSearch />
          <Link href="/users/create" className="button-link">
            Create user
          </Link>
        </div>
        <UserTable />
      </UserProvider>
    </div>
  )
}
