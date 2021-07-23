export type InputSelectType = {
  name: string
  value?: any
  placeholder: string
  width: string
  onClick: any
  onChange: any
  dataSelect: {
    id?: number
    value: string
    label: string
    displayText?: string
    locale?: string
    flag?: string
  }[]
  returnComplete?: boolean
}
