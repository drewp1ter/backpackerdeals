import classNames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.scss'

// fixed - компонент будет отрендерен в портал
// raltive - в древе текущего элемента с position: absolute
enum Position {
  fixed = 'fixed',
  relative = 'relative',
}

export interface IProps {
  readonly isOpen: boolean
  readonly onClose?: () => void
  readonly className?: string
  readonly children: JSX.Element
  readonly position?: keyof typeof Position
}

export interface IState {
  readonly animated: boolean
}

export class Modal extends React.Component<IProps, IState> {

  public static defaultProps: Partial<IProps> = {
    position: Position.fixed
  }

  public state = {
    animated: false
  }

  private node: any

  handleClose = () => {
    const { onClose } = this.props
    this.setState({ animated: true })
    setTimeout(() => {
      this.setState({ animated: false })
      onClose && onClose()
    }, 500)
  }

  renderMask = () => {
    const { animated } = this.state
    return <div data-animated={animated} className={styles.mask} onClick={this.handleClose} />
  }

  renderIcon = () => <i onClick={this.handleClose} className={classNames(styles.close, 'fas fa-times')} />

  componentDidMount = () => {
    this.node = document.getElementById('modal-root')
  }

  renderModal = () => {
    const { isOpen, className, children, position} = this.props
    const { animated } = this.state
    return (
      <div data-animated={animated} data-position={position} className={styles.modal}>
        <div className={classNames(styles.body, className)}>
          {position === Position.fixed ? (
            this.renderIcon()
          ) : (
            <div className={styles.iconContainer} onClick={this.handleClose}>
              {this.renderIcon()}
            </div>
          )}
          {children}
        </div>
        {position === Position.fixed ? this.renderMask() : this.node && isOpen && ReactDOM.createPortal(this.renderMask(), this.node)}
      </div>
    )
  }

  render = () => {
    const { isOpen, position } = this.props
    if (!isOpen) { return null }
    return position === Position.fixed ? ReactDOM.createPortal(this.renderModal() , this.node) : this.renderModal()
  }
}