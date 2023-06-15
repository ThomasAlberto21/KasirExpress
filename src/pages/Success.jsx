import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import successOrderImg from '../assets/success_order.svg';
import { API_URL } from '../api/api';

export default class Success extends React.Component {
  componentDidMount() {
    axios
      .get(API_URL + 'keranjangs')
      .then((res) => {
        const keranjangs = res.data;
        keranjangs
          .map(function (item) {
            return axios
              .delete(API_URL + 'keranjangs/' + item.id)
              .then((res) => {
                console.log(res);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
