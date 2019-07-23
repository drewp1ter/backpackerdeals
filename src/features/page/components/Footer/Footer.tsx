import * as React from 'react'

import { Button, Input } from 'components'
import { FooterLinks } from 'features/page/components'

import images from './assets'

import styles from './Footer.module.scss'

export interface IProps {
  readonly handleChange?: () => void
  readonly handleSubmit?: () => void
  readonly email?: string
}

export const Footer: React.FC<IProps> = ({ handleChange, email }) => (
  <footer>
    <h4>Travel discounts up to 40% off</h4>

    <h4>Sent straight to your inbox</h4>

    <div className={styles.emailInput}>
      <Input value={email} onChange={handleChange} placeholder="Your e-mail address" theme="transparent" size="md" />
      <Button className={styles.textButton} size="lg">
        SEARCH
      </Button>
      <Button className={styles.iconButton} form="circle">
        <i className="fas fa-arrow-right" />
      </Button>
    </div>

    <p>By clicking Subscribe, you have agreed to our Terms & Conditions and Privacy Policy</p>

    <div className={styles.contactInfo}>
      <FooterLinks title="Company">
        <ul className={styles.linksList}>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Members Terms of Use</li>
          <li>Chat Terms and Conditions</li>
        </ul>
      </FooterLinks>

      <FooterLinks title="Support">
        <ul className={styles.linksList}>
          <li>Why book with us?</li>
          <li>Reviews</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>RSS Feed</li>
          <li>Sitemap</li>
        </ul>
      </FooterLinks>

      <div className={`${styles.linksWrapper}`}>
        <FooterLinks title="Business">
          <ul className={styles.linksList}>
            <li>Suggest a business</li>
            <li>Merchant Portal</li>
          </ul>
        </FooterLinks>
      </div>

      <FooterLinks title="Work with us">
        <ul className={styles.linksList}>
          <li>Affiliate programs</li>
          <li>Become a Supplier</li>
          <li>Become an influencer</li>
        </ul>
      </FooterLinks>

      <div className={styles.linksWrapper}>
        <FooterLinks title="Contact us">
          <ul className={styles.linksList}>
            <li>+61 3 90163720 (AU)</li>
            <li>+64 9 8892098 (NZ)</li>
            <li>+44 2032901637 (UK)</li>
          </ul>

          <div className={styles.contacts}>
            <span>E-mail:</span>
            <p>support@backpackerdeals.co</p>
          </div>

          <div className={styles.contacts}>
            <span>Skype:</span>
            <p>backpackerdeals</p>
          </div>
        </FooterLinks>
      </div>
    </div>

    <div className={styles.appInfo}>
      <div className={styles.mediaAndPayment}>
        <div className={styles.socialMedia}>
          <span>Social media</span>
          <ul>
            <li>
              <i className="fab fa-facebook-square" />
            </li>
            <li>
              <i className="fab fa-instagram" />
            </li>
            <li>
              <i className="fab fa-google-plus-g" />
            </li>
          </ul>
        </div>

        <div className={styles.payment}>
          <span>Payment Channels</span>
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
            <li dangerouslySetInnerHTML={images.gPay} />
            <li dangerouslySetInnerHTML={images.aliPay} />
            <li className={styles.poli}>
              <img src={images.poli} alt="poli" />
            </li>
          </ul>
        </div>
      </div>

      <button aria-label="download app" className={styles.downloadAppButton}>
        Download Mobile App
      </button>
    </div>

    <hr />

    <div className={styles.copyrightAndPartners}>
      <img className={styles.logo} src={images.logo} alt="logo" />

      <p>
        Backpackerdeals.com is owned and operated by Backpacker
        <br />
        Deals Pty Ltd. ABN 81 600 829 838
        <br />
        Level 22, 120 Spencer Street, Melbourne 3000, Australia
        <br />© 2014-2018 Backpacker Deals All rights reserved.
      </p>

      <div className={styles.firstImagesBlock}>
        <span>Member of</span>
        <img src={images.byata} alt="Byata" />
        <img src={images.adventure} alt="Adventure" />
        <img src={images.wave} alt="Wave" />
      </div>

      <div className={styles.secondImagesBlock}>
        <img src={images.norton} alt="Norton" />
        <img src={images.winner} alt="Winner" />
      </div>
    </div>
  </footer>
)
