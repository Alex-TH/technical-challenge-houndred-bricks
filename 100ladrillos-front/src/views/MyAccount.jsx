import React from 'react';
import AccountSummary from '../components/AccountSumary';
import AccountTitle from '../components/AccountTitle';
import Profits from '../components/Profits';
import Bricks from '../components/Bricks';
import Rents from '../components/Rents';
import BuySell from '../components/BuySell';
import './MyAccount.css';

function MyAccount(props) {
  const {
    totalValue,
    availableCash,
    brickInvestment,
    bricksInPurchase,
    revolvingFund,
    capitalGain,
    pendingRents,
    fetchingProfits,
    profits,
    year,
    fetchingBricks,
    bricks,
  } = props;
  const accountSummaryProps = {
    totalValue,
    availableCash,
    brickInvestment,
    bricksInPurchase,
    revolvingFund,
    capitalGain,
    pendingRents,
  };
  const profitsProps = { year, profits, capitalGain };
  const bricksProps = {
    fetchingBricks,
    bricks,
    capitalGain,
  }

  return (
    <div className="MyAccount">
      <AccountTitle title="Mi Cuenta" buttonText="Ver Flujo de Efectivo" isFirst />
      <AccountSummary {...accountSummaryProps} />
      <h3>Mis Rendimientos</h3>
      {!fetchingProfits && <Profits {...profitsProps} />}
      <AccountTitle title="Mis Ladrillos" buttonText="Ver Mis Ladrillos" />
      {!fetchingBricks && <Bricks {...bricksProps} />}
      <div className="divisions-container">
        <div className="divisions-first-content">
          <AccountTitle title="Mis Rentas" buttonText="Ver Mis Rentas" />
          <Rents />
        </div>
        <div className="divisions-second-content">
          <AccountTitle title="Mis Compras / Ventas" buttonText="Historico de Ventas" />
          <BuySell />
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
