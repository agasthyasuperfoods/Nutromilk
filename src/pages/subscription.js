import React from 'react';
import Menu from '../components/Menu';
import SubscriptionComponent from '../components/sub'; // Importing from sub.js
import ContactFooter from '../components/Footer';

export default function SubscriptionPage() {
  return (
    <>
      <Menu />
      <SubscriptionComponent />
      <ContactFooter />
    </>
  );
}