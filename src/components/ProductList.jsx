import { numberWithCommas } from '../utils/numberWithCommas';

/* eslint-disable react/prop-types */
const ProductList = ({ menu }) => {
  return (
    <div className="max-w-lg rounded-lg shadow bg-gray-800  ">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-52"
          src={menu.gambar}
          alt="Gambar Menu"
        />
      </a>
      <div className="px-5 py-3">
        <p className="text-white opacity-50 my-3 italic">
          --{menu.category.nama}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {menu.nama}
        </h5>

        <p className="mb-3 font-normal text-white">
          Rp. {numberWithCommas(menu.harga)}
        </p>
      </div>
    </div>
  );
};

export default ProductList;
