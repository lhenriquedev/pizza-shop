import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  const { data } = await api.put<UpdateProfileBody>('/profile', {
    name,
    description,
  })
  return data
}
