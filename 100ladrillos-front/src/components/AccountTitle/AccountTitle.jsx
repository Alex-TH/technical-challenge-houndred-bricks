import React from 'react';
import './AccountTitle.css';

function AccountTitle({ isFirst, title, buttonText }) {
  return (
    <div className="AccountTitle">
      {isFirst && <h2>{title}</h2>}
      {!isFirst && <h3>{title}</h3>}
      <button>{buttonText}</button>
    </div>
  );
}

export default AccountTitle;
