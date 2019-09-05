import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import stats from './Stats/stats.json';
import tarifs from './PricingItem/pricingItem.json';
import transactions from './TransactionHistory/transactionHistory.json';

const App = () => {
  return (
    <>
      <Profile
        imgUrl="http://www.soidergi.com/wp-content/uploads/ma/thumb-male-avatar-profile-icon-round-african-american-man-face-flat-vector-illustration-male-avatar-profile-icon-round-african-american-image.jpg"
        alt="Timothy Grant"
        name="Timothy Grant"
        tag="@tgrant"
        location="Sao Paulo, Brazil"
        followers={100}
        views={200}
        likes={300}
      />
      <Stats title="Upload stats" items={stats} />
      <PricingPlan items={tarifs} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
