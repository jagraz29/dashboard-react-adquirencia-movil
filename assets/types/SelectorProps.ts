export interface SelectorProps {
  items: Array<{ label: string; value: string }>
  renderOption: (item: { label: string; value: string }) => React.ReactNode
  onSelect: (value: string | undefined) => void
  defaultValue?: { label: string; value: string }
  disabled?: boolean
}
