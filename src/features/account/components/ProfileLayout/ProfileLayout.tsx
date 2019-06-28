import React from 'react'

import styles from './ProfileLayout.module.scss'

export interface IProps {
  readonly children: JSX.Element
}

export const ProfileLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.profileLayout}>
      <div className={styles.sidebar}>
        <div>
          <div className={styles.image}>JD</div>
          <h4>John Doe</h4>
        </div>
        <ul>
          <li><i className="fas fa-envelope" />Johnd1996@gmail.com</li>
          <li className={styles.phone}><i className="fas fa-phone" />+ 44 767 786 78</li>
          <li><i className="fas fa-map-marker-alt" />Sydney, Australia</li>
          <li><i className="fas fa-edit" />Edit my profile</li>
        </ul>
        <ul>
          <li><i className="fas fa-table" />My Dashboard</li>
          <li><i className="fas fa-shopping-cart" />My Bookings</li>
          <li><i className="fas fa-heart" />My Wishlist</li>
          <li><i className="fas fa-trophy" />My Rewards</li>
          <li><i className="fas fa-user" />My Profile</li>
          <li><i className="fas fa-lock"/>Update password</li>
        </ul>
      </div>
      {children}
    </div>
  )
}
