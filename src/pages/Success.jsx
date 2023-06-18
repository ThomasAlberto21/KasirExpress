import { useEffect } from 'react';
import axios from 'axios';
import successOrderImg from '../assets/success_order.svg';
import { Link } from 'react-router-dom';
import { API_URL } from '../api/api';

const Success = () => {
  useEffect(() => {
    const deleteKeranjangs = async () => {
      try {
        const res = await axios.get(API_URL + 'keranjangs');
        const keranjangs = res.data;
        await Promise.all(
          keranjangs.map(async (item) => {
            const response = await axios.delete(
              API_URL + 'keranjangs/' + item.id
            );
            return response;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    deleteKeranjangs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={successOrderImg} alt="Success Order" className="mb-5 w-96" />
      <h1 className="text-4xl font-bold text-gray-700">Sukses</h1>
      <p className="font-normal">Terima Kasih Sudah Memesan</p>

      <Link
        to="/"
        type="button"
        className="px-6 py-2 my-3 mr-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
      >
        Kembali
      </Link>
    </div>
  );
};

export default Success;
