/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import TotalPay from './TotalPay';
import { numberWithCommas } from '../utils/numberWithCommas';
import { API_URL } from '../api/api';

const Results = ({ keranjangs, getListsKeranjangs }) => {
  const [showModal, setShowModal] = useState(false);
  const [keranjangDetail, setKeranjangDetail] = useState(null);
  const [jumlah, setJumlah] = useState(0);
  const [keterangan, setKeterangan] = useState('');
  const [totalHarga, setTotalHarga] = useState(0);

  const handleShowModal = (menuKeranjang) => {
    setShowModal(true);
    setKeranjangDetail(menuKeranjang);
    setJumlah(menuKeranjang.jumlah);
    setKeterangan(menuKeranjang.keterangan);
    setTotalHarga(menuKeranjang.total_harga);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateJumlahAndTotalHarga = (newJumlah) => {
    setJumlah(newJumlah);
    setTotalHarga(keranjangDetail.product.harga * newJumlah);
  };

  const tambahPesanan = () => {
    updateJumlahAndTotalHarga(jumlah + 1);
  };

  const kurangPesanan = () => {
    if (jumlah !== 1) {
      updateJumlahAndTotalHarga(jumlah - 1);
    }
  };

  const changeHandler = (e) => {
    setKeterangan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();

    const data = {
      jumlah,
      total_harga: totalHarga,
      product: keranjangDetail.product,
      keterangan,
    };

    axios
      .put(API_URL + 'keranjangs/' + keranjangDetail.id, data)
      .then(() => {
        getListsKeranjangs();
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

  const hapusPesanan = (id) => {
    handleCloseModal();

    axios
      .delete(API_URL + 'keranjangs/' + id)
      .then(() => {
        getListsKeranjangs();
        Swal.fire({
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
          title: keranjangDetail.product.nama + ' Sukses Dihapus',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {keranjangs.length !== 0 && (
        <div className="h-screen lg:w-96">
          {keranjangs.map((menuKeranjang) => (
            <div
              key={menuKeranjang.id}
              className="flex p-4 mb-6 border-b-2 border-gray-300 cursor-pointer"
              onClick={() => handleShowModal(menuKeranjang)}
            >
              <div className="inline-flex items-center w-6 h-6 mr-2 font-semibold text-white bg-blue-600 rounded-full">
                <p className="mx-auto text-white">{menuKeranjang.jumlah}</p>
              </div>
              <div className="text-black ms-3">
                <h1 className="font-normal">{menuKeranjang.product.nama}</h1>
                <p className="font-normal">
                  Rp. {numberWithCommas(menuKeranjang.product.harga)}
                </p>
              </div>
              <p className="font-semibold text-gray-700 ms-auto">
                Rp. {numberWithCommas(menuKeranjang.total_harga)}
              </p>
            </div>
          ))}

          {showModal && keranjangDetail && (
            <Modal
              showModal={showModal}
              keranjangDetail={keranjangDetail}
              jumlah={jumlah}
              keterangan={keterangan}
              totalHarga={totalHarga}
              handleCloseModal={handleCloseModal}
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
};

export default Results;
