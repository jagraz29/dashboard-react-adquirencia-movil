import styled from 'styled-components'

export const AlertContent = styled.div`
  .Toastify__toast-container {
    position: relative !important;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 0 0 0 transparent !important;
    padding: 0;
  }

  .Toastify__toast {
    box-shadow: none !important;
  }

  .cont-alert {
    width: 100%;
    margin: 0 0 5px;
    position: relative !important;
    padding: 0 0 0;
    height: auto;
    background: transparent;
    min-height: 0;

    &:last-child {
      margin: 0;
    }

    .alert {
      padding: 0.5em 1em;
      border: 2px solid #d1d1d1;
      background: #e4e4e4;
      color: #4444;
      margin: 0;
      border-radius: 6px;
      position: relative;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

      .icon {
        width: 25px;
        flex: 0 0 25px;
        margin: 0 1em 0 0;
      }

      .texto {
        width: 75%;
        flex: 1 1 auto;
        text-align: left;
        font-size: 1rem;

        p {
          margin: 0;
          color: black;
          padding-right: 1em;
          line-height: 1.4rem;
        }

        .close-alert {
          position: absolute;
          top: 0;
          right: 0;
          width: 30px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          line-height: 30px;
          color: black;
        }
      }
    }

    .green {
      border-color: #64dd17;
      background: #f5fff5;
    }

    .blue {
      border-color: #90caf9;
      background: #f5f5fd;
    }

    .yellow {
      border-color: #ffe082;
      background: #ffffea;
    }

    .red {
      border-color: #ef9a9a;
      background: #fff5f5;
    }
  }

  @keyframes baja {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.95);
      opacity: 0;
    }
  }
  @keyframes sube {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  .baja {
    animation: baja 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  }
  .sube {
    animation: baja 0.3s ease-out 1;
  }

  .alerta-enter {
    opacity: 0;
    transform: scale(0.95);
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .alerta-enter.alerta-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .alerta-exit {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .alerta-exit.alerta-exit-active {
    opacity: 0;
    transform: scale(0.95);
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .green {
    border-color: #64dd17;
    background: #f5fff5;
  }

  .blue {
    border-color: #90caf9;
    background: #f5f5fd;
  }

  .yellow {
    border-color: #ffe082;
    background: #ffffea;
  }

  .red {
    border-color: #ef9a9a;
    background: #fff5f5;
  }

  @media all and (min-width: 768px) {
    .main-container .cont-alert {
    }
  }

  @media all and (min-width: 991px) {
    .main-container .cont-alert {
      .alert {
      }
    }
  }

  @media all and (min-width: 991px) {
    .main-container .cont-alert {
      .alert {
      }
    }
  }

  @media all and (min-width: 1200px) {
    .main-container .cont-alert {
      align-self: flex-start;
    }
  }
`

export const IconAlert = styled.img`
  width: 25px;
  flex: 0 0 25px;
  margin: 0 1em 0 0;
`
