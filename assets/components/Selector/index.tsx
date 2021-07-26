import React from 'react'
import Select, { components, SingleValueProps, OptionProps } from 'react-select'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SelectorProps } from '../../types'

const Selector = ({
  items,
  renderOption,
  onSelect,
  defaultValue = { label: 'Seleccione', value: '' },
  disabled,
}: SelectorProps) => {
  const themeContext = useContext(ThemeContext)

  const Option = (props: OptionProps<any, any>) => {
    return (
      <>
        <components.Option {...props}>{renderOption(props.data)}</components.Option>
      </>
    )
  }

  const SingleValue = (props: SingleValueProps<any, any>) => {
    return (
      <>
        <components.SingleValue {...props}>{renderOption(props.data)}</components.SingleValue>
      </>
    )
  }

  return (
    <Select
      defaultValue={defaultValue}
      isDisabled={disabled}
      onChange={(selectedOption) => {
        onSelect(selectedOption?.value)
      }}
      options={items}
      components={{ Option, SingleValue, IndicatorSeparator: null }}
      styles={{
        menu: (provided) => ({
          ...provided,
          zIndex: 30,
        }),
        option: (provided) => ({
          ...provided,
          marign: 0,
          display: 'flex',
          flex: 1,
        }),
        menuList: (provided) => ({
          ...provided,
          maxHeight: '30vh',
          overflow: 'auto',
          scrollbarWidth: 'none',
          padding: '0.5rem',
          zIndex: 3,
        }),
        control: (provided) => ({
          ...provided,
          display: 'flex',
          height: '2.5rem',
          borderRadius: '4px',
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          width: '10%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          width: '200%',
          fontSize: '30px',
        }),
      }}
    />
  )
}

export default React.memo(Selector)
