import React, { useState } from 'react'
import { DropDownMenu, DropDownContent, DropdownItem } from './styles'
import * as RiIcons from 'react-icons/ri'

type Props = {
  actions: {}[]
  setTrx: any
  item: number
}

const TableTransaccionesAction: React.FC<Props> = ({ actions, setTrx, item }) => {
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
        setTrx(item)
      }}
    >
      <RiIcons.RiArrowDownSFill />
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

export default TableTransaccionesAction
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
