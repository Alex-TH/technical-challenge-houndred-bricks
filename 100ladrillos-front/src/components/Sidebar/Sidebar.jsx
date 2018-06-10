import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'class-names';
import logo from '../../logo.svg';
import bricks from './icons/mis-ladrillos.svg';
import addFounds from './icons/agregar-fondos.svg';
import help from './icons/ayuda.svg';
import buy from './icons/comprar.svg';
import transactions from './icons/ic-movimietos-active.svg';
import sell from './icons/nav-bar-vender.svg';
import retrieveFounds from './icons/retirar-fondos.svg';
import { formatAmmount } from '../../utils/currency';
import './Sidebar.css';

function IconLink(props) {
  const {
    title,
    to,
    icon,
    hasBorder,
    isActive,
  } = props;
  const liClassName = classNames({
    'with-border-bottom': hasBorder,
    isActive,
  });

  return (
    <li className={liClassName}>
      <Link to={to}>
        <img src={icon} alt={title}/>
        <p>{title}</p>
      </Link>
    </li>
  );
}

function Sidebar({ availableCash, totalValue }) {
  return (
    <aside className="Sidebar">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li className="with-border">
          <h3>Valor de la cuenta</h3>
          <p className="ammount">{formatAmmount(totalValue)}</p>
        </li>
        <li className="with-border">
          <h3>Saldo disponible</h3>
          <p className="ammount">{formatAmmount(availableCash)}</p>
        </li>
        <IconLink title="Mi Cuenta" icon={bricks} to="/mi-cuenta" isActive />
        <IconLink title="Mis Ladrillos" icon={bricks} to="/mis-ladrillos" />
        <IconLink to="/comprar" title="Comprar" icon={buy} />
        <IconLink to="/vender" title="Vender" icon={sell} />
        <IconLink to="/agregar-fondos" title="Agregar Fondos" icon={addFounds} />
        <IconLink to="/retirar-fondos" title="Retirar Fondos" icon={retrieveFounds} />
        <IconLink to="/movimientos" title="Movimientos" icon={transactions} />
        <IconLink to="/ayuda" title="" icon={help} hasBorder/>
      </ul>
    </aside>
  );
}

export default Sidebar;