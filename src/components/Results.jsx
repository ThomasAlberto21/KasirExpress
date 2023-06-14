/* eslint-disable react/prop-types */
import React from 'react';
import { numberWithCommas } from '../utils/numberWithCommas';

export default class Results extends React.Component {
  render() {
    const { keranjangs } = this.props;

    return (
      <div className="w-full">
        {keranjangs.length !== 0 && (
          <div className="w-full">
            {keranjangs.map((menuKeranjang) => (
              <div
                className="flex justify-between w-full "
                key={menuKeranjang.id}
              >
                <div className="bg-gray-100 text-gray-800 text-sm font-semibold w-6 h-6 inline-flex items-center rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                  <p className="text-white mx-auto">{menuKeranjang.jumlah}</p>
                </div>
                <div className="text-black">
                  <h1 className="font-semibold">
                    {menuKeranjang.product.nama}
                  </h1>
                  <p> Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
