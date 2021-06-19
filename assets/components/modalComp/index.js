import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { Flex } from '../local/ui'
import Button from '../UI-Componentes/Button'
import ToastDashboard from '../local/toast'
import zIndex from '@material-ui/core/styles/zIndex'

//commit
export default class ModalComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      in: false,
      entered: false,
    }

    this.toggleEnterState = this.toggleEnterState.bind(this)
    this.myCallback = this.myCallback.bind(this)
  }

  toggleEnterState() {
    this.setState({ in: !this.state.in })
  }

  myCallback() {
    if (this.props.callback) this.props.callback()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.enter !== prevProps.enter) {
      if (!this.props.enter) {
        document
          .getElementById('modal-comp')
          .removeEventListener('contextmenu', (event) => event.preventDefault())
      }
    }
  }

  componentDidMount() {
    if (this.props.enter) {
      document
        .getElementById('modal-comp')
        .addEventListener('contextmenu', (event) => event.preventDefault())
    }
  }

  render() {
    return (
      <Transition
        timeout={100}
        in={this.props.enter}
        unmountOnExit
        onExited={() => this.myCallback()}
      >
        {(state) => {
          return (
            <section
              className={`modal-comp on-${state}`}
              id={'modal-comp'}
              onClick={() => {}}
              style={{ zIndex: this.props.zIndex, fontFamily: 'Kanit', fontWeight: 400 }}
            >
              <div className="area">
                <div
                  className={`ventana f02 jcfs shadow ${this.props.reset ? 'reset p-2' : ''}`}
                  style={this.props.style}
                >
                  {!this.props.hideClose && (
                    <div
                      hidden={this.props.iconHidden}
                      className="close"
                      onClick={this.props.onExit}
                    >
                      <i className={'fa fa-times'}> </i>
                    </div>
                  )}

                  {this.props.title && (
                    <div className="titulo">
                      <b>{this.props.title}</b>
                    </div>
                  )}

                  {!this.props.reset && (
                    <div className={`modal-contenido ${this.props.className}`}>
                      {this.props.toast && this.props.toast.status && (
                        <ToastDashboard
                          scroll={' '}
                          id={'toast-modal'}
                          status={this.props.toast.status}
                          typeMessage={this.props.toast.type}
                          message={this.props.toast.message}
                          handleChangeToast={this.props.toast.handler}
                          noAutoClose={this.props.toast.noAutoClose}
                          limit={1}
                        />
                      )}
                      {this.props.icon && (
                        <div className={'wc py-3 text-center'}>
                          <img
                            src={`https://multimedia.epayco.co/dashboard/modal_icons/${this.props.icon}.png`}
                            alt="Icono estado de la información"
                            height={'70px'}
                            width={'auto'}
                            className={'mx-auto'}
                          />
                        </div>
                      )}
                      {this.props.children}
                    </div>
                  )}

                  {this.props.reset && <div className={'wc'}>{this.props.children}</div>}

                  {(this.props.buttonConfirm || this.props.buttonCancel) && (
                    <div className="wc p-3 f01 jcfs">
                      {this.props.buttonConfirm && (
                        <Flex elastic={'0 0 180px'}>
                          <Button
                            mw={'180px'}
                            loading={this.props.onLoadButton}
                            onClick={this.props.onConfirm}
                            disabled={
                              this.props.confirmDisabled ||
                              this.props.onLoadButton ||
                              this.props.disabled
                            }
                          >
                            {this.props.buttonConfirmText}
                          </Button>
                        </Flex>
                      )}
                      {this.props.buttonCancel && (
                        <Flex elastic={'0 0 auto'}>
                          <Button
                            type={'reset'}
                            disabled={this.props.disabled}
                            className={`btn-tw ${this.props.onLoadButton ? 'dn' : ''}`}
                            onClick={this.props.onCancel ? this.props.onCancel : this.props.onExit}
                          >
                            Cancelar
                          </Button>
                        </Flex>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )
        }}
      </Transition>
    )
  }
}
