import * as React from 'react'

import { Input, Button } from 'components'
import { FooterLinks } from 'features/page/components'

import Adventure from './assets/adventure.svg'
import Byata from './assets/byata.svg'
import Logo from './assets/Logo.svg'
import Norton from './assets/norton.svg'
import Wave from './assets/wave.svg'
import Winner from './assets/winner.svg'

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
      <>
        <span className={styles.textButton}>
          <Button size="lg">SEARCH</Button>
        </span>
        <span className={styles.iconButton}>
          <Button form="circle">
            <i className="fas fa-arrow-right" />
          </Button>
        </span>
      </>
    </Input>

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

        <FooterLinks className={styles.mt} title="Students">
          <ul className={styles.linksList}>
            <li>Students Discounts</li>
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
            <h5>E-mail:</h5>
            <p>support@backpackerdeals.co</p>
          </div>

          <div className={styles.contacts}>
            <h5>Skype:</h5>
            <p>backpackerdeals</p>
          </div>
        </FooterLinks>
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
          <h4>Payment Channels</h4>
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

      <button aria-label="download app" className={styles.downloadAppButton}>
        Download Mobile App
      </button>
    </div>

    <hr />

    <div className={styles.copyrightAndPartners}>
      <img className={styles.logo} src={Logo} alt="logo" />

      <p>
        Backpackerdeals.com is owned and operated by Backpacker
        <br />
        Deals Pty Ltd. ABN 81 600 829 838
        <br />
        Level 1, 20 Queen Street, Melbourne 3000, Australia
        <br />© 2014-2018 Backpacker Deals All rights reserved.
      </p>

      <div className={styles.firstImagesBlock}>
        <span>Member of</span>
        <img src={Byata} alt="Byata" />
        <img src={Adventure} alt="Adventure" />
        <img src={Wave} alt="Wave" />
      </div>

      <div className={styles.secondImagesBlock}>
        <img src={Norton} alt="Norton" />
        <img src={Winner} alt="Winner" />
      </div>
    </div>
  </footer>
)
