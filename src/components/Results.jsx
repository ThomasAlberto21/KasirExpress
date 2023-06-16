/* eslint-disable react/prop-types */
import React from 'react';
import Modal from './Modal';
import TotalPay from './TotalPay';
import { numberWithCommas } from '../utils/numberWithCommas';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: null,
    };
  }

  handleShowModal(menuKeranjang) {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { keranjangs } = this.props;
    const { showModal, keranjangDetail } = this.state;

    return (
      <>
        {keranjangs.length !== 0 && (
          <div className="lg:w-96 h-screen">
            {keranjangs.map((menuKeranjang) => (
              <div
                key={menuKeranjang.id}
                className="flex mb-6 border-b-2 border-gray-300 p-4 cursor-pointer"
                onClick={() => this.handleShowModal(menuKeranjang)}
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

            {showModal && keranjangDetail && (
              <Modal
                handleCloseModal={() => this.handleCloseModal()}
                {...this.state}
              />
            )}

            <TotalPay keranjangs={keranjangs} />
          </div>
        )}
      </>
    );
  }
}
