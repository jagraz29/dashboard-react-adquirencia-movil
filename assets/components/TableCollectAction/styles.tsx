import styled from 'styled-components'

export const DropDownMenu = styled.div`
  display: ${(props) => props.theme.display};
  width: '2px';
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;

  padding: 5px;
  position: relative;
  right: 9vw;
  width: 10vw;
  top: 2vw;
`

export const DropDownContent = styled.button`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 2vw;
  height: 2vw;
`

export const DropdownItem = styled.div`
  justify-content: flex-start;
  height: 1.3vw;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;

  &:hover {
    background-color: #00ffff;
  }
  &:active {
    font-weight: 700;
    color: #00ffff;
  }
`
