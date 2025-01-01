import { SupabaseClientType } from '@/services/lib/supabase'

export function getUsers(client: SupabaseClientType) {
  return client.from('User').select('*')
}