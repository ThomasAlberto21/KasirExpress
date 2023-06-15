/* eslint-disable react/prop-types */
import React from 'react';
import { numberWithCommas } from '../utils/numberWithCommas';
import TotalPay from './TotalPay';

export default class Results extends React.Component {
  render() {
    const { keranjangs } = this.props;

    return (
      <>
        {keranjangs.length !== 0 && (
          <div className="lg:w-96 h-screen">
            {keranjangs.map((menuKeranjang) => (
              <div
                className="flex mb-6 border-b-2 border-gray-300 p-4"
                key={menuKeranjang.id}
              >
                {/* Badge */}
                <div className="bg-blue-600 text-white font-semibold w-6 h-6 inline-flex items-center rounded-full mr-2">
                  <p className="text-white mx-auto">{menuKeranjang.jumlah}</p>
                </div>

                {/* Deskripsi */}
                <div className="text-black ms-3">
                  <h1 className="font-normal">{menuKeranjang.product.nama}</h1>
                  <p className="font-normal">
                    Rp. {numberWithCommas(menuKeranjang.product.harga)}
                  </p>
                </div>

                {/* Total Harga */}
                <p className="font-semibold ms-auto text-gray-700">
                  Rp. {numberWithCommas(menuKeranjang.total_harga)}
                </p>
              </div>
            ))}

            <TotalPay keranjangs={keranjangs} {...this.props} />
          </div>
        )}
      </>
    );
  }
}
