import React from 'react';
import { Line as LineChart } from 'react-chartjs';
import classNames from 'class-names';
import { formatAmmount } from '../../utils/currency';
import { CHART_OPTIONS } from '../../utils/constants';
import handShakeIcon from './icons/handshake.svg';
import capitalGainIcon from './icons/renta-anual-estimada.svg';
import rentIcon from './icons/renta-anual-actual.svg';
import './Profits.css';

const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const salesConfig = {
  label: 'Utilidad de Venta',
  fillColor: 'rgba(220,220,220,0.0)',
  strokeColor: '#80afcc',
  pointColor: '#80afcc',
  pointStrokeColor: '#fff',
  pointHighlightFill: '#fff',
  pointHighlightStroke: '#80afcc',
};
const rentsConfig = {
  label: 'Rentas Recibidas',
  fillColor: 'rgba(151,187,205,0.0)',
  strokeColor: '#ff5a60',
  pointColor: '#ff5a60',
  pointStrokeColor: '#fff',
  pointHighlightFill: '#fff',
  pointHighlightStroke: '#ff5a60',
};
const othersConfig = {
  label: 'Otros',
  fillColor: 'rgba(151,187,205,0.0)',
  strokeColor: '#7ed321',
  pointColor: '#7ed321',
  pointStrokeColor: '#fff',
  pointHighlightFill: '#fff',
  pointHighlightStroke: '#7ed321',
};

function Profits(props) {
  const { profits, year, capitalGain } = props;
  const { transactions, totals, value } = profits;
  const filterByYear = transaction => transaction.year === year;
  const mapProfit = transaction => transaction.profit;
  const getProfitsByYear = transactions => (
    transactions
      .filter(filterByYear)
      .map(mapProfit)
  );
  const profitsDatasets = {
    sales: getProfitsByYear(transactions.sales),
    rents: getProfitsByYear(transactions.rents),
    others: getProfitsByYear(transactions.others),
  };
  const chartData = {
    labels,
    datasets: [
      { ...salesConfig, data: profitsDatasets.sales },
      { ...rentsConfig, data: profitsDatasets.rents},
      { ...othersConfig, data: profitsDatasets.others},
    ]
  };

  return (
    <div className='Profit'>
      <div className='Profit-summary'>
        <ProfitValue title="Mi Rendimiento:" value={value} isHeding />
        <div className="plus" />
        <ProfitValue title="Plusvalia" value={capitalGain} icon={capitalGainIcon} />
        <div className="plus" />
        <ProfitValue title="Utilidad de Ventas" value={totals.sales} icon={handShakeIcon} />
        <div className="plus" />
        <ProfitValue title="Rentas Recibidas" value={totals.rents} icon={rentIcon} />
        <div className="plus" />
        <ProfitValue title="Otros" value={totals.others} icon={capitalGainIcon} />
      </div>
      <div className='Profit-chart-container'>
        <LineChart data={chartData} options={CHART_OPTIONS} />
      </div>
    </div>
  );
}

function ProfitValue(props) {
  const {
    title,
    value,
    isHeding,
    icon,
  } = props;
  const divClasses = classNames({
    ProfitValue: true,
    heading: isHeding,
  });

  return (
    <div className={divClasses}>
      {icon && <img src={icon} alt={title} />}
      <div className="values">
        <h3>{title}</h3>
        <p>{formatAmmount(value)}</p>
      </div>
    </div>
  );
}

export default Profits;
