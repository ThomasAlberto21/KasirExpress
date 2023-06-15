/* eslint-disable react/prop-types */
import React from 'react';
import { numberWithCommas } from '../utils/numberWithCommas';

export default class TotalPay extends React.Component {
  render() {
    const { keranjangs } = this.props;
    const totalBayar = keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="flex justify-between">
        <h4 className="text-blue-500 font-bold">Total Bayar :</h4>
        <p className="ms-auto font-semibold text-gray-700">
          Rp. {numberWithCommas(totalBayar)}
        </p>
      </div>
    );
  }
}
