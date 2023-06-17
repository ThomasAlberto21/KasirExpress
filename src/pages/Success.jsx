import React from 'react';
import axios from 'axios';
import successOrderImg from '../assets/success_order.svg';
import { Link } from 'react-router-dom';
import { API_URL } from '../api/api';

export default class Success extends React.Component {
  componentDidMount() {
    axios
      .get(API_URL + 'keranjangs')
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(async function (item) {
          const res = await axios.delete(API_URL + 'keranjangs/' + item.id);
          return res;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={successOrderImg} alt="Sucess Order" className="mb-5 w-96" />
        <h1 className="text-4xl font-bold text-gray-700">Sukses</h1>
        <p className="font-normal">TerimaKasih Sudah Memesan</p>

        <Link
          to="/"
          type="button"
          className="px-6 py-2 my-3 mr-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 "
        >
          Kembali
        </Link>
      </div>
    );
  }
}
