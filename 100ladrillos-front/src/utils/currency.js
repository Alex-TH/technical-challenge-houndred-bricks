import currencyFormatter from 'currency-formatter';

export const formatAmmount = ammount => currencyFormatter.format(ammount, { code: 'MXN' });
