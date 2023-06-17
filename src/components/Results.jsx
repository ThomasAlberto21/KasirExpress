/* eslint-disable react/prop-types */
import React from 'react';
import Modal from './Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import TotalPay from './TotalPay';
import { numberWithCommas } from '../utils/numberWithCommas';
import { API_URL } from '../api/api';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: '',
      totalHarga: 0,
    };
  }

  handleShowModal = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
      totalHarga: menuKeranjang.total_harga,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  tambahPesanan = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  kurangPesanan = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (e) => {
    this.setState({
      keterangan: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleCloseModal();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + 'keranjangs/' + this.state.keranjangDetail.id, data)
      .then(() => {
        this.props.getListsKeranjangs();
        Swal.fire({
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          title: data.product.nama + ' Sukses Diupdate',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  hapusPesanan = (id) => {
    this.handleCloseModal();

    axios
      .delete(API_URL + 'keranjangs/' + id)
      .then(() => {
        this.props.getListsKeranjangs();
        Swal.fire({
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
          title: this.state.keranjangDetail.product.nama + ' Sukses Dihapus',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { keranjangs } = this.props;
    const { showModal, keranjangDetail } = this.state;
    const {
      tambahPesanan,
      kurangPesanan,
      changeHandler,
      handleSubmit,
      hapusPesanan,
    } = this;

    return (
      <>
        {keranjangs.length !== 0 && (
          <div className="h-screen lg:w-96">
            {keranjangs.map((menuKeranjang) => (
              <div
                key={menuKeranjang.id}
                className="flex p-4 mb-6 border-b-2 border-gray-300 cursor-pointer"
                onClick={() => this.handleShowModal(menuKeranjang)}
              >
                {/* Badge */}
                <div className="inline-flex items-center w-6 h-6 mr-2 font-semibold text-white bg-blue-600 rounded-full">
                  <p className="mx-auto text-white">{menuKeranjang.jumlah}</p>
                </div>

                {/* Deskripsi */}
                <div className="text-black ms-3">
                  <h1 className="font-normal">{menuKeranjang.product.nama}</h1>
                  <p className="font-normal">
                    Rp. {numberWithCommas(menuKeranjang.product.harga)}
                  </p>
                </div>

                {/* Total Harga */}
                <p className="font-semibold text-gray-700 ms-auto">
                  Rp. {numberWithCommas(menuKeranjang.total_harga)}
                </p>
              </div>
            ))}

            {showModal && keranjangDetail && (
              <Modal
                {...this.state}
                handleCloseModal={() => this.handleCloseModal()}
                tambahPesanan={tambahPesanan}
                kurangPesanan={kurangPesanan}
                changeHandler={changeHandler}
                handleSubmit={handleSubmit}
                hapusPesanan={hapusPesanan}
              />
            )}

            <TotalPay keranjangs={keranjangs} />
          </div>
        )}
      </>
    );
  }
}
