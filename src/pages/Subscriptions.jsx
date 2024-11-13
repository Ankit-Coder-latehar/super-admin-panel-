import React from 'react'
import Subscription from '../components/Subscriptions/Subscription'
import SubscriptionSidebar from '../components/Subscriptions/SubscriptionSidebar'

const Subscriptions = () => {
  return (
    <div>
      <SubscriptionSidebar/>
      <Subscription/>
    </div>
  )
}

export default Subscriptions