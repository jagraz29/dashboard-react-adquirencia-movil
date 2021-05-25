export type SearchUserInputProps =
  | {
      type: SearchUserInputType
      url?: string
      disabled?: boolean
      onChange: (value: string, isValid: boolean) => void
    }
  | {
      type: 'url'
      url: string
      disabled?: boolean
      onChange: (value: string, isValid: boolean) => void
    }

export type SearchUserInputType = 'email' | 'phone' | 'number' | 'url'
