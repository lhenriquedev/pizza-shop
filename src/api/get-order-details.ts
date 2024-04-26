import { api } from '@/lib/axios'

export type GetOrderDetailsParams = {
  orderId: string
}

export interface GetOrdersDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'delivered' | 'processing' | 'delivering'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const { data } = await api.get<GetOrdersDetailsResponse>(`/orders/${orderId}`)
  return data
}
