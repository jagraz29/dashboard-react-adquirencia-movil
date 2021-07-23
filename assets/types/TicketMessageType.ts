import { TicketDocument } from './TicketDocumentType'

export type TicketMessage = {
  id: number
  created_at: string
  tipo_user: number
  creado_por: string
  texto: string
  firma: string
  tiporespuesta: number
  estadosrespuestas_id: number
  tickets_id: number
  asunto: null
  documentos: TicketDocument[]
}
