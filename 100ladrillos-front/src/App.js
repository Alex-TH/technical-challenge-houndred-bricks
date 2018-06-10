import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { MyAccount } from './views';
import './App.css';

class App extends Component {
  render() {
    const {
      availableCash,
      totalValue,
      brickInvestment,
      bricksInPurchase,
      revolvingFund,
      capitalGain,
      pendingRents,
      profits,
      fetchingProfits,
      fetchingBricks,
      bricks,
    } = this.props;
    console.log(this.props);

    const myAccountProps = {
      availableCash,
      totalValue,
      brickInvestment,
      bricksInPurchase,
      revolvingFund,
      capitalGain,
      pendingRents,
      profits,
      fetchingProfits,
      year: 2017,
      fetchingBricks,
      bricks,
    };

    return (
      <Router>
        <div>
          <Sidebar availableCash={availableCash} totalValue={totalValue} />
          <div className="App">
            <Route exact path="/" component={() => <MyAccount {...myAccountProps} />}/>
            <Route path="/mi-cuenta" component={() => <MyAccount {...myAccountProps} />}/>
            <Route path="/mis-ladrillos" component={() => <h2>Mis Ladrillos</h2>}/>
            <Route path="/comprar" component={() => <h2>Comprar</h2>}/>
            <Route path="/vender" component={() => <h2>Vender</h2>}/>
            <Route path="/agregar-fondos" component={() => <h2>Agregar Fondos</h2>}/>
            <Route path="/retirar-fondos" component={() => <h2>Retirar Fondos</h2>}/>
            <Route path="/movimientos" component={() => <h2>Movimientos</h2>}/>
            <Route path="/ayuda" component={() => <h2>Ayuda</h2>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
