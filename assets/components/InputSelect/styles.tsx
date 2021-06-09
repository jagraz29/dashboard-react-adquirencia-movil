import styled from 'styled-components'

export const Select = styled.select`
  width: ${props => props.style?.width};
  background: #FAFAFA;
  color: gray;
  border: 1px solid #BDBDBD;
  border-radius: 3px;
  padding: 5px;
  font-size: 1vw;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;