import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ModalComp from './index'
//commit

export default class ShowModalComp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ReactDOM.createPortal(
      <ModalComp
        className={`${this.props.className}`}
        title={this.props.title}
        enter={this.props.show}
        onExit={this.props.onExit}
        buttonConfirm={this.props.buttonConfirm || false}
        buttonCancel={this.props.buttonCancel || false}
        buttonConfirmText={this.props.buttonConfirmText || 'Confirmar'}
        onConfirm={this.props.onConfirm || this.props.onExit}
        onLoadButton={this.props.onLoadButton || false}
        iconHidden={this.props.iconHidden}
        {...this.props}
      >
        {this.props.children}
      </ModalComp>,
      document.getElementById('cont-modal')
    )
  }
}
