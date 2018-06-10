import React from 'react';
import { formatAmmount } from '../../utils/currency';
import './AccountSummary.css';

function Value(props) {
  const {
    title,
    value,
    isTotal,
    isGreenAmmount,
    action,
  } = props;
  const divClassName = isTotal ? 'total-value' : 'other-value';
  const pClassName = isGreenAmmount ? 'green-ammount' : '';

  return (
    <div className={divClassName}>
      <h3>{title}</h3>
      <p className={pClassName}>{formatAmmount(value)}</p>
      {action && <a>{action}</a>}
    </div>
  );
}

function AccountSummary(props) {
  const {
    totalValue,
    availableCash,
    brickInvestment,
    bricksInPurchase,
    revolvingFund,
    capitalGain,
    pendingRents,
  } = props;

  return (
    <div className="AccountSummary">
      <div className="container">
        <Value title="Valor de la cuenta:" value={totalValue} isTotal />
        <div className="total-value-after"/>
        <Value title="Inversión Ladrillos" value={brickInvestment} />
        <div className="plus" />
        <Value title="Plusvalia:" value={capitalGain} />
        <div className="plus" />
        <Value title="Fondo Revolvente: " value={revolvingFund} />
        <div className="plus" />
        <Value title="Ladrillos en proceso de compra:" value={bricksInPurchase} />
        <div className="plus" />
        <Value title="Renta Pendiente de liberar: " action="Liberar" value={pendingRents} />
        <div className="plus" />
        <Value title="Dinero Disponible" value={availableCash} isGreenAmmount />
      </div>
    </div>
  );
}

export default AccountSummary;