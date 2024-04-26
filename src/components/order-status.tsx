export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'delivered'
  | 'processing'
  | 'delivering'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  processing: 'Em preparo',
  delivering: 'Em entrega',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="w-2 h-2 rounded-full bg-slate-500"
        />
      )}
      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="w-2 h-2 rounded-full bg-rose-500"
        />
      )}
      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="w-2 h-2 rounded-full bg-emerald-500"
        />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span
          data-testid="badge"
          className="w-2 h-2 rounded-full bg-amber-500"
        />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
