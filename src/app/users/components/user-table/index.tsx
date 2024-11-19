'use client'

import Image from 'next/image'
import { Table, type TableColumn } from '@/app/components/table'
import { type User } from '../../user-types'
import { useUserContext } from '../../user-context'

const USERS_TABLE_COLUMNS: TableColumn<User, keyof User>[] = [
  {
    label: 'Image',
    accessor: 'image',
    renderCellContent: ({ cellData: { image, name } }) => {
      if (!image) return <div className="placeholder-avatar" />
      return (
        <Image
          className="avatar"
          src={image}
          alt={`${name}'s avatar`}
          width={50}
          height={50}
        />
      )
    },
  },
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Phone', accessor: 'phone' },
]

export const UserTable = () => {
  const { filteredUsers, isErrored, isLoading } = useUserContext()

  return (
    <Table
      data={filteredUsers}
      columns={USERS_TABLE_COLUMNS}
      isLoading={isLoading}
      isErrored={isErrored}
    />
  )
}
