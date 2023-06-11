import { numberWithCommas } from '../utils/numberWithCommas';

/* eslint-disable react/prop-types */
const ProductList = ({ menu }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <img className="w-full h-52" src={menu.gambar} alt="Gambar Menu" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {menu.nama}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rp. {numberWithCommas(menu.harga)}
        </p>
      </div>
    </div>
  );
};

export default ProductList;
