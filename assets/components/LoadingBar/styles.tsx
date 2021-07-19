import styled from 'styled-components'

export const Loading = styled.div`
  width: 100%;
  padding: 3rem 0;
  margin: 1rem 0;
  text-align: center;

  span {
    color: #999999;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
    display: block;
  }

  .barra {
    height: 14px;
    border-radius: 5px;
    background: #e9ecef;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    margin: auto;
    position: relative;

    .color {
      position: absolute;
      border-radius: 5px;
      z-index: 0;
      will-change: transform;
      /* left: 0;
      top: 2px; */
      width: 10%;
      height: 10px;
      background: #ff5700;
      animation: carga 0.8s ease-in-out infinite alternate;
    }
  }

  @keyframes carga {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(900%);
    }
  }
`
