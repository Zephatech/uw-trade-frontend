import { useQuery } from '@tanstack/react-query'

export const getCurrentUserId = () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/getCurrentUserId`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
}

export const logout = () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/logout`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export const login = async (email: string, password: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/login`,
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  )
  const data = await res.json()
  if (res.status == 200) {
    data.success = true
  } else {
    data.success = false
  }
  return data
}

export const verifyEmail = async (email: string, verificationCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/verifyEmail`,
    {
      method: 'POST',
      body: JSON.stringify({ email, verificationCode }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  )
  const data = await res.json()
  if (res.ok) {
    data.success = true
  } else {
    data.success = false
  }
  return data
}

export const register = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
}

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: getCurrentUserId,
  })
}

export const requestResetPassword = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/requestResetPassword`,
    {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()
  if (res.ok) {
    data.success = true
  } else {
    data.success = false
  }
  return data
}

export const resetPassword = async (
  email: string,
  verificationCode: string,
  newPassword: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/resetPassword`,
    {
      method: 'POST',
      body: JSON.stringify({ email, verificationCode, newPassword }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()
  if (res.ok) {
    data.success = true
  } else {
    data.success = false
  }
  return data
}

/* Potentially useful for server side get auth */
// import { cookies } from 'next/headers'
// export default async function getCurrentUserId() {
//     const res = await fetch('${process.env.NEXT_PUBLIC_API_URL_PREFIX}/auth/getCurrentUserId', {
//         cache: 'no-cache',
//         headers: {
//             Cookie: cookies()
//                 .getAll()
//                 .map(({ name, value }) => `${name}=${value}`)
//                 .join('; '),
//         },
//     })
//     const data = await res.json()
//     console.log(data)
//     const userId = data?.userId
//     return userId != null
//         ? { status: 'SIGNED_IN', userId }
//         : { status: 'SIGNED_OUT', userId: null }
// }
