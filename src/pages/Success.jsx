import React from 'react';
import { Link } from 'react-router-dom';
import successOrderImg from '../assets/success_order.svg';

export default class Success extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={successOrderImg} alt="Sucess Order" className="w-96 mb-5" />
        <h1 className="font-bold text-4xl text-gray-700">Sukses</h1>
        <p className="font-normal">TerimaKasih Sudah Memesan</p>

        <Link
          to="/"
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-6 py-2 mr-2 my-3 "
        >
          Kembali
        </Link>
      </div>
    );
  }
}
