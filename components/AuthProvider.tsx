'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  user: User | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
})

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = useMemo(() => createClient(), [])
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
        setLoading(false)
      } catch (error) {
        console.error('Error getting user:', error)
        setUser(null)
        setLoading(false)
      }
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          setUser(session?.user ?? null)
          setLoading(false)
          if (event === 'SIGNED_IN') {
            router.refresh()
          }
        } catch (error) {
          console.error('Error in auth state change:', error)
          setUser(null)
          setLoading(false)
        }
      }
    )

    return () => {
      subscription?.unsubscribe()
    }
  }, [router, supabase])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)

