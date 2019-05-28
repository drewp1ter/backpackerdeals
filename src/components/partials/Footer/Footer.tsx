import * as React from 'react'

import { FooterInput } from 'components/ui'
import classNames from 'classnames'

import styles from './Footer.scss'

export interface IProps {
  readonly handleChange?: () => void
  readonly handleSubmit?: () => void
  readonly email?: string
}

export const Footer: React.FC<IProps> = ({
  handleChange,
  handleSubmit,
  email
}) => (
  <div className={classNames(styles, "footer")}>

    <div className="title">
      <h2>Travel discounts up to 40% off</h2>
      <p>Sent straight to your inbox</p>
    </div>

    <FooterInput 
      email={ email } 
      handleChange={ handleChange } 
      handleSubmit={ handleSubmit } 
    />

    <p>By clicking Subscribe, you have agreed to our Terms & Conditions and Privacy Policy</p>

    <div className="contact-info">
      <h4>Company</h4>
      <ul>
        <li>About Us</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Members Terms of Use</li>
        <li>Chat Terms and Conditions</li>
      </ul>

      <h4>Support</h4>
      <ul>
        <li>Why book with us?</li>
        <li>Reviews</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>RSS Feed</li>
        <li>Sitemap</li>
      </ul>

      <div>

        <h4>Business</h4>
        <ul>
          <li>Suggest a business</li>
          <li>Merchant Portal</li>
        </ul>

        <h4>Students</h4>
        <ul>
          <li>Students Discounts</li>
        </ul>

      </div>

      <h4>Work with us</h4>
      <ul>
        <li>Affiliate programs</li>
        <li>Become a Supplier</li>
        <li>Become an influencer</li>
      </ul>

      <div>

        <h4>Contact us</h4>
        <ul>
          <li>+61 3 90163720 (AU)</li>
          <li>+64 9 8892098 (NZ)</li>
          <li>+44 2032901637 (UK)</li>
        </ul>

        <div></div>
        <div></div>

      </div>

    </div>

  </div>
)