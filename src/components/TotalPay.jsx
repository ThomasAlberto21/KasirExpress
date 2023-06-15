/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../utils/numberWithCommas';
import Swal from 'sweetalert2';
import { API_URL } from '../api/api';

export default class TotalPay extends React.Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + 'pesanans', pesanan).then(() => {
      const navigate = useNavigate();
      navigate('/success');
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        title: ' Sukses Memesan',
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  render() {
    const { keranjangs } = this.props;
    const totalBayar = keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
        <div className="flex justify-between">
          <h4 className="text-blue-500 font-bold">Total Bayar :</h4>
          <p className="ms-auto font-semibold text-gray-700">
            Rp. {numberWithCommas(totalBayar)}
          </p>
        </div>

        <button
          className="bg-blue-500 w-full py-3 rounded-md text-white mt-5 font-bold hover:bg-blue-700"
          onClick={() => this.submitTotalBayar(totalBayar)}
        >
          Bayar
        </button>
      </>
    );
  }
}
