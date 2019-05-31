import * as React from 'react'

import { Input, OrangeButton } from 'components/base'

import styles from './Footer.module.scss'

export interface IProps {
  readonly handleChange?: () => void
  readonly handleSubmit?: () => void
  readonly email?: string
}

export const Footer: React.FC<IProps> = ({ handleChange, handleSubmit, email }) => (
  <footer>
    <h2>Travel discounts up to 40% off</h2>

    <h3>Sent straight to your inbox</h3>

    <Input className={styles.emailInput} value={email} onChange={handleChange} placeholder="Your e-mail address" theme="email" size="md">
      <OrangeButton onClick={handleSubmit} theme="rounded">
        SEARCH
      </OrangeButton>
    </Input>

    <p>By clicking Subscribe, you have agreed to our Terms & Conditions and Privacy Policy</p>

    <div className={styles.contactInfo}>
      <div className={styles.socialBlock}>
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Members Terms of Use</li>
          <li>Chat Terms and Conditions</li>
        </ul>
      </div>

      <div className={styles.socialBlock}>
        <h4>Support</h4>
        <ul>
          <li>Why book with us?</li>
          <li>Reviews</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>RSS Feed</li>
          <li>Sitemap</li>
        </ul>
      </div>

      <div>
        <div className={styles.socialBlock}>
          <h4>Business</h4>
          <ul>
            <li>Suggest a business</li>
            <li>Merchant Portal</li>
          </ul>
        </div>

        <div className={`${styles.socialBlock} ${styles.mt}`}>
          <h4>Students</h4>
          <ul>
            <li>Students Discounts</li>
          </ul>
        </div>
      </div>

      <div className={styles.socialBlock}>
        <h4>Work with us</h4>
        <ul>
          <li>Affiliate programs</li>
          <li>Become a Supplier</li>
          <li>Become an influencer</li>
        </ul>
      </div>

      <div>
        <div className={styles.socialBlock}>
          <h4>Contact us</h4>
          <ul>
            <li>+61 3 90163720 (AU)</li>
            <li>+64 9 8892098 (NZ)</li>
            <li>+44 2032901637 (UK)</li>
          </ul>
        </div>

        <div className={styles.contacts}>
          <h5>E-mail:</h5>
          <p>support@backpackerdeals.co</p>
        </div>

        <div className={styles.contacts}>
          <h5>Skype:</h5>
          <p>backpackerdeals</p>
        </div>
      </div>
    </div>

    <div className={styles.appInfo}>
      <div className={styles.mediaAndPayment}>
        <div className={styles.socialMedia}>
          <h4>Social media</h4>
          <ul>
            <li>
              <i className="fab fa-facebook-square" />
            </li>
            <li>
              <i className="fab fa-twitter" />
            </li>
            <li>
              <i className="fab fa-instagram" />
            </li>
            <li>
              <i className="fab fa-instagram" />
            </li>
          </ul>
        </div>

        <div className={styles.payment}>
          <h4>Payment we receive</h4>
          <ul>
            <li>
              <i className="fab fa-cc-visa" />
            </li>
            <li>
              <i className="fab fa-cc-mastercard" />
            </li>
            <li>
              <i className="fab fa-cc-amex" />
            </li>
            <li>
              <i className="fab fa-cc-paypal" />
            </li>
            <li>
              <i className="fab fa-cc-apple-pay" />
            </li>
            <li>
              <i className="fab fa-cc-apple-pay" />
            </li>
            <li>
              <i className="fab fa-cc-apple-pay" />
            </li>
            <li>
              <i className="fab fa-cc-apple-pay" />
            </li>
          </ul>
        </div>
      </div>

      <button className={styles.downloadAppButton}>Download Mobile App</button>
    </div>

    <hr />

    <div className={styles.copyrightAndPartners}>
      <img className="logo" src="" alt="" />

      <p>
        Backpackerdeals.com is owned and operated by
        <br />
        Backpacker Deals Pty Ltd. ABN 81 600 829 838
        <br />
        Level 1, 20 Queen Street, Melbourne 3000, Australia
        <br />© 2014-2018 Backpacker Deals All rights reserved.
      </p>

      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  </footer>
)
