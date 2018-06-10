import React from 'react';
import { Doughnut as DoughnutChart } from 'react-chartjs';
import availableBricks from './icons/ladrillos-disponible.svg';
import { CHART_OPTIONS } from '../../utils/constants';
import './Bricks.css';

function BrickDetail({ title, value }) {
  return (
    <div className="Brick-summary-detail-value">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function Bricks({ bricks, capitalGain }) {
  const {
    onPortfolio,
    onSale,
    total,
    investment,
    industries,
  } = bricks;
  const brickGainData = [
    {
      value: investment,
      color:"#3ab398",
      highlight: "#3ab398",
      label: "Inversión "
    },
    {
      value: capitalGain,
      color: "#d9fff7",
      highlight: "#d9fff7",
      label: "Plusvalía"
    },
  ];
  const brickSectorsData = [
    {
      value: industries.industrial,
      color:"#306aae",
      highlight: "#306aae",
      label: "Industrila",
    },
    {
      value: industries.commercial,
      color: "#4a90e2",
      highlight: "#4a90e2",
      label: "Comercial",
    },
    {
      value: industries.houses,
      color: "#8bb6ea",
      highlight: "#8bb6ea",
      label: "Casa Habitación",
    },
    {
      value: industries.offices,
      color: "#daebff",
      highlight: "#daebff",
      label: "Oficinas",
    },
  ];

  return (
    <div className="Bricks">
      <div className="Bricks-summary">
        <div className="Bricks-summary-total">
          <img src={availableBricks} alt="Ladrillos disponibles" />
          <h3>{total} ladrillos</h3>
        </div>
        <div className="Bricks-summary-detail">
          <BrickDetail title="Ladrillos en portfolio" value={onPortfolio} />
          <div className="plus" />
          <BrickDetail title="Ladrillos en venta" value={onSale} />
        </div>
      </div>
      <div className="Bricks-charts">
        <div className="Bricks-chart-container">
          <DoughnutChart data={brickGainData} options={CHART_OPTIONS} />
        </div>
        <div className="Bricks-chart-container">
          <DoughnutChart data={brickSectorsData} options={CHART_OPTIONS} />
        </div>
      </div>
    </div>
  );
}

export default Bricks;
