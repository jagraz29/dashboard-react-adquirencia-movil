export type GetListTransactionReducerType = {
  listTransactionData: {
    transactions: {
      referencePayco: number
      referenceClient: string
      transactionDate: string
      description: string
      paymentMethod: string
      amount: number
      status: string
      test: boolean
      currency: string
      transactionDateTime: string
      iva: number
      bank: string
      card: string
      receipt: string
      authorization: string
      response: string
      trmdia: number
      docType: string
      document: string
      names: string
      lastnames: string
    }[]
  }
  loading: boolean
}
