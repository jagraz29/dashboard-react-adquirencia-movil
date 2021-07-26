import styled from 'styled-components'

export const DropDownMenu = styled.div`
  display: ${(props) => props.theme.display};
  width: '2px';
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  height: 6vw;
  padding: 5px;
  position: relative;
  right: 9.2vw;
  width: 10vw;
  top: 0.8vw;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
`

export const DropDownContent = styled.button`
  background: #ffffff;
  cursor: pointer;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 2vw;
  height: 2vw;
`

export const DropdownItem = styled.div`
  height: 2.3vw;
  top: 1vw;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #40a8e6;
  width: 9vw;
  font-family: Segoe UI;
  font-style: normal;
  font-size: 1.1vw;

  &:hover {
    background-color: #e6e6e6;
  }
  &:active {
    font-weight: 700;
    color: #e6e6e6;
  }
`
