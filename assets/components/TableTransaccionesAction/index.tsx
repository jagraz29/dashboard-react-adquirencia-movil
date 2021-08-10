import React from 'react'
import { DropDownMenu, DropDownContent, DropdownItem } from './styles'
import * as RiIcons from 'react-icons/ri'

type Props = {
  actions: {}[]
  setTrx: any
  item: number
  setDropdownVisible:any
  visible:boolean
}

const TableTransaccionesAction: React.FC<Props> = ({ actions, setTrx, item, visible, setDropdownVisible }) => {

  const handleDropdownClick = () => {
    setDropdownVisible()
    setTrx(item)
  }
  return (
    <DropDownContent
      onClick={handleDropdownClick}
    >
      <RiIcons.RiArrowDownSFill />
      <DropDownMenu data-visible={visible}>
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
