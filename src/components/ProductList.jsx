/* eslint-disable react/prop-types */
import { numberWithCommas } from '../utils/numberWithCommas';

const ProductList = ({ menu, addCarts }) => {
  const { gambar, category, nama, harga } = menu;

  return (
    <div className="max-w-lg bg-gray-800 rounded-lg shadow">
      <a href="#">
        <img
          className="w-full rounded-t-lg h-52"
          src={gambar}
          alt="Gambar Menu"
        />
      </a>
      <div className="px-5 py-3">
        <p className="my-3 italic text-white opacity-50">--{category.nama}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {nama}
        </h5>
        <p className="mb-3 font-normal text-white">
          Rp. {numberWithCommas(harga)}
        </p>
        <button
          className="w-full px-5 py-3 mt-5 mb-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => addCarts(menu)}
        >
          Tambah Ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductList;
