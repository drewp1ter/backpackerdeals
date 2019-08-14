import classNames from 'classnames'
import React from 'react'
import stepArrow from './assets/step-arrow.svg'
import stepLine from './assets/step-line.svg'
import styles from './Steps.module.scss'

export interface IStepProps {
  index: number,
  title: string,
  active?: boolean
}

export interface IProps {
  readonly steps: IStepProps[],
  readonly className?: string
}

export const Steps: React.FC<IProps> = ({ steps, className }) => {

  const renderStep = (step: IStepProps) => {
    const isLastStep = steps.indexOf(step) === steps.length - 1

    return (
      <div key={step.index} className={classNames(styles.step, step.active ? styles.activeStep : '')}>
        <div className={styles.stepIndex}>
          <span>{step.index}</span>
          <span>Step</span>
        </div>
        <span>{step.title}</span>
        {!isLastStep &&
        <div className={styles.stepArrow}>
          <img src={step.active ? stepArrow : stepLine} alt=""/>
        </div>}
      </div>
    )
  }

  return (
    <div className={classNames(styles.steps, className)}>
      {steps.map(renderStep)}
    </div>
  )
}
