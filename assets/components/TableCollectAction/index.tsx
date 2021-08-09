import React from 'react'
import { DropDownMenu, DropDownContent, DropdownItem } from './styles'
import * as RiIcons from 'react-icons/ri'

type Props = {
  actions: {}[]
  visible: boolean
  setDropdownVisible:any
}

const TableCollectAction: React.FC<Props> = ({ actions, visible, setDropdownVisible}) => {

  const handleDropdownClick = () => {
    setDropdownVisible()
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
