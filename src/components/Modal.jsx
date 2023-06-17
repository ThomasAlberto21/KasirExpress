/* eslint-disable react/prop-types */
import { BsXLg } from 'react-icons/bs';
import { numberWithCommas } from '../utils/numberWithCommas';

const Modal = ({
  handleCloseModal,
  keranjangDetail,
  keterangan,
  jumlah,
  tambahPesanan,
  kurangPesanan,
  handleSubmit,
  changeHandler,
  totalHarga,
  hapusPesanan,
}) => {
  if (keranjangDetail) {
    return (
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
      >
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-gray-800 rounded-lg shadow">
              <div className="flex items-start justify-between p-6 border-b rounded-t dark:border-gray-600">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white ">
                  {keranjangDetail.product.nama}
                  <p className="mt-1 text-lg font-semibold text-blue-400">
                    (Rp. {numberWithCommas(keranjangDetail.product.harga)})
                  </p>
                </h1>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  data-drawer-target="default-sidebar"
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  className="inline-flex items-center p-3 ml-auto text-sm text-gray-700 bg-white rounded-md hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <BsXLg />
                </button>
              </div>

              <div className="px-6 pt-6 mb-6">
                <p className="font-semibold text-white">
                  Total Harga : Rp. {numberWithCommas(totalHarga)}
                </p>

                <div className="mt-2 quantity">
                  <label
                    htmlFor="quantity"
                    className="font-semibold text-white"
                  >
                    Jumlah Pesanan :
                  </label>
                  <br />

                  <button
                    className="px-3 py-1 font-bold text-gray-700 bg-white rounded-md hover:bg-gray-500 hover:text-white"
                    onClick={() => kurangPesanan()}
                  >
                    -
                  </button>
                  <strong className="mx-3 font-semibold text-white">
                    {jumlah}
                  </strong>
                  <button
                    className="px-3 py-1 mt-2 font-bold text-gray-700 bg-white rounded-md hover:bg-gray-500 hover:text-white"
                    onClick={() => tambahPesanan()}
                  >
                    +
                  </button>
                </div>
              </div>

              <form className="p-6 space-y-6" onSubmit={handleSubmit}>
                <label
                  htmlFor="keterangan"
                  className="block text-lg font-medium text-gray-900 dark:text-white"
                >
                  Keterangan
                </label>
                <textarea
                  id="keterangan"
                  rows="6"
                  value={keterangan}
                  onChange={(e) => changeHandler(e)}
                  placeholder="Contoh : Pedas, Nasi Setengah, dll"
                  className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>

                {/* Button */}
                <div className="flex items-center space-x-2 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Simpan Pesanan
                  </button>

                  <button
                    data-modal-hide="defaultModal"
                    className="text-white bg-red-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    onClick={() => hapusPesanan(keranjangDetail.id)}
                  >
                    Hapus Pesanan
                  </button>
                </div>
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
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
      >
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-gray-800 rounded-lg shadow">
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
                  className="inline-flex items-center p-3 ml-auto text-sm text-gray-700 bg-white rounded-md hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
