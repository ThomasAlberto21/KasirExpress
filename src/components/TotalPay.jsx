/* eslint-disable react/prop-types */
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../utils/numberWithCommas';
import { API_URL } from '../api/api';

const TotalPay = ({ keranjangs }) => {
  const navigate = useNavigate();
  const submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: keranjangs,
    };

    axios
      .post(API_URL + 'pesanans', pesanan)
      .then(() => {
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          title: 'Sukses Memesan',
        });

        navigate('/success');
      })
      .catch((error) => {
        console.error('Terjadi kesalahan dalam mengirim pesanan:', error);
      });
  };

  const totalBayar = keranjangs.reduce(function (result, item) {
    return result + item.total_harga;
  }, 0);

  return (
    <>
      <div className="flex justify-between">
        <h4 className="font-bold text-blue-500">Total Bayar :</h4>
        <p className="font-semibold text-gray-700 ms-auto">
          Rp. {numberWithCommas(totalBayar)}
        </p>
      </div>

      <button
        className="w-full py-3 mt-5 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
        onClick={() => submitTotalBayar(totalBayar)}
      >
        Bayar
      </button>
    </>
  );
};

export default TotalPay;
