/* eslint-disable react/prop-types */
import { BsXLg } from 'react-icons/bs';
import { numberWithCommas } from '../utils/numberWithCommas';

export const Modal = ({ handleCloseModal, keranjangDetail, keterangan }) => {
  if (keranjangDetail) {
    return (
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50"
      >
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg shadow bg-gray-800">
              <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white ">
                  {keranjangDetail.product.nama}
                  <p className="font-semibold text-blue-400 text-lg mt-1">
                    (Rp. {numberWithCommas(keranjangDetail.product.harga)})
                  </p>
                </h1>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  data-drawer-target="default-sidebar"
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  className="text-gray-700 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-3 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <BsXLg />
                </button>
              </div>

              <form action="" className="p-6 space-y-6">
                <div className="mb-6">
                  <p className="text-white font-semibold mb-1">
                    Jumlah Pesanan : {keranjangDetail.jumlah}
                  </p>
                  <p className="text-white font-semibold">
                    Total Harga : Rp.{' '}
                    {numberWithCommas(keranjangDetail.total_harga)}
                  </p>

                  <div className="quantity mt-3">
                    <label
                      htmlFor="quantity"
                      className="text-white font-semibold"
                    >
                      Jumlah Pesanan :
                    </label>
                    <br />
                    <button className="py-1 px-3 bg-white text-gray-700 rounded-md font-bold mt-2">
                      +
                    </button>
                    <strong className="mx-3 text-white font-semibold">0</strong>

                    <button className="py-1 px-3 bg-white text-gray-700 rounded-md font-bold">
                      -
                    </button>
                  </div>
                </div>

                <label
                  htmlFor="keterangan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Keterangan
                </label>
                <textarea
                  id="keterangan"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Contoh : Pedas, Nasi Setengah, dll"
                  value={keterangan}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50"
      >
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg shadow bg-gray-800">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Kosong
                </h3>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  data-drawer-target="default-sidebar"
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  className="text-gray-700 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-3 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <BsXLg />
                </button>
              </div>

              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;