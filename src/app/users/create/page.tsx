import { CreateUserForm } from './create-user-form'
import { BackButton } from './back-button'

import '../users-page.scss'

export default function CreateUserPage() {
  return (
    <div className="users-page">
      <BackButton />
      <h2>Create New User</h2>
      <CreateUserForm />
    </div>
  )
}
