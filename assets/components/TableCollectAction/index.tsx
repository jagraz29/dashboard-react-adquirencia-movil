import React, { useState } from 'react'
import { DropDownMenu, DropDownContent, DropdownItem } from './styles'

type Props = {
  actions: {}[]
}

const TableCollectAction: React.FC<Props> = ({ actions }) => {
  const [visible, setVisible] = useState(false)
  const [showItem, setShowItem] = useState({ display: 'none' })

  const handleDropdownClick = () => {
    setVisible(!visible)
    if (!visible) {
      setShowItem({ display: 'flex' })
    } else {
      setShowItem({ display: 'none' })
    }
  }
  return (
    <DropDownContent
      onClick={() => {
        handleDropdownClick()
      }}
    >
      <DropDownMenu theme={showItem}>
        {actions.map((item: any, key: any) => (
          <DropdownItem key={key} onClick={() => item.funcion(item.value)}>
            {item.name}
          </DropdownItem>
        ))}
      </DropDownMenu>
    </DropDownContent>
  )
}

export default TableCollectAction
function usePopper(
  referenceRef: any,
  popperRef: any,
  arg2: {
    placement: string
    modifiers: { name: string; enabled: boolean; options: { offset: number[] } }[]
  }
): { styles: any; attributes: any } {
  throw new Error('Function not implemented.')
}
