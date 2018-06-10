import React, { Component } from 'react';
import accountGateway from '../gateways/account';
console.log(accountGateway);

function ConnectAppContainer(AppComponent) {
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fetchingAccount: true,
        fetchingProfits: true,
        fetchingBricks: true,
      };

      this.processMyAccountData = this.processMyAccountData.bind(this);
      this.processProfitData = this.processProfitData.bind(this);
      this.processMyBricks= this.processMyBricks.bind(this);

      this.fetchAccountData();
    }

    fetchAccountData() {
      accountGateway.getMyAccount()
        .then(this.processMyAccountData);
      accountGateway.getMyProfits()
        .then(this.processProfitData);
      accountGateway.getMyBricks()
        .then(this.processMyBricks);
    }

    processMyAccountData(accountData) {
      const {
        available_cash: availableCash,
        brick_investment: brickInvestment,
        capital_gain: capitalGain,
        revolving_fund: revolvingFund,
        bricks_in_purchase: bricksInPurchase,
        pending_rents: pendingRents,
      } = accountData;
      const totalValue = availableCash + brickInvestment + capitalGain + revolvingFund + bricksInPurchase + pendingRents;

      this.setState({
        availableCash,
        brickInvestment,
        bricksInPurchase,
        revolvingFund,
        capitalGain,
        pendingRents,
        totalValue,
        fetchingAccount: false,
      });
    }

    processProfitData(profitData) {
      const { profit, transactions } = profitData;

      this.setState({
        profits: {
          value: profit,
          transactions: transactions.reduce((result, transaction) => {
            const { year, month, profits } = transaction;
            const addProffit = profit => ({ year, month, profit });

            return {
              sales: [...result.sales, addProffit(profits.sales)],
              rents: [...result.rents, addProffit(profits.rents)],
              others: [...result.others, addProffit(profits.others)],
            };
          }, { sales: [], rents: [], others: [] }),
          totals: transactions.reduce((result, transaction) => {
            const { profits } = transaction;

            return {
              sales: result.sales += profits.sales,
              rents: result.rents += profits.rents,
              others: result.others += profits.others,
            };
          }, { sales: 0, rents: 0, others: 0 }),
        },
        fetchingProfits: false,
      });
    }

    processMyBricks(bricksData) {
      const {
        on_portfolio: onPortfolio,
        on_sale: onSale,
        investment,
        industries,
      } = bricksData;

      this.setState({
        fetchingBricks: false,
        bricks: {
          onPortfolio,
          onSale,
          total: onPortfolio + onSale,
          investment,
          industries,
        },
      });
    }

    render() {
      return <AppComponent {...this.state} />
    }
  }

  App.displayName = 'AppContainer';

  return App;
}
export default ConnectAppContainer;
