import { NextRequest, NextResponse } from 'next/server'
import { type User } from '@/app/users/user-types'
import { users } from './userData'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search')

  if (search) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    return NextResponse.json(filteredUsers)
  } else {
    return NextResponse.json(users)
  }
}

export async function POST(request: NextRequest) {
  const body: User = await request.json()
  const { name, email, phone, image } = body

  const validationResponse = validateUser({ name, email, phone })

  if (validationResponse) {
    return validationResponse
  }

  const newUser = {
    id: users.length + 1,
    name,
    image,
    email,
    phone,
  }

  users.unshift(newUser)
  return NextResponse.json(newUser, { status: 201 })
}

const validateUser = ({ name, email, phone }: Omit<User, 'id'>) => {
  const missingFields = []

  if (!name) missingFields.push('Name')
  if (!email) missingFields.push('Email')
  if (!phone) missingFields.push('Phone')

  if (missingFields.length > 0) {
    const message = `${missingFields.join(', ')}: required`
    return NextResponse.json({ message }, { status: 400 })
  }

  return null
}
