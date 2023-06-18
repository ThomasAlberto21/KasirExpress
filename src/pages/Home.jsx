/* eslint-disable react-hooks/exhaustive-deps */

import Swal from 'sweetalert2';
import axios from 'axios';
import Results from '../components/Results';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { useState, useEffect } from 'react';
import { API_URL } from '../api/api';

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState('');
  const [keranjangs, setKeranjangs] = useState([]);
  const [categoriYangDipilih, setCategoriYangDipilih] = useState('Makanan');

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
      await getListsKeranjangs();
    };

    const interval = setInterval(fetchData, 50);

    return () => {
      clearInterval(interval);
    };
  }, [categoriYangDipilih, keranjangs]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        API_URL + 'products?category.nama=' + categoriYangDipilih
      );
      const menus = res.data;
      setMenus(menus);
    } catch (error) {
      console.log(error);
    }
  };

  const getListsKeranjangs = async () => {
    try {
      const res = await axios.get(API_URL + 'keranjangs');
      const keranjangs = res.data;
      setKeranjangs(keranjangs);
    } catch (error) {
      console.log(error);
    }
  };

  const changeCategory = (value) => {
    setCategoriYangDipilih(value);
    setMenus([]);
  };

  const addCarts = async (value) => {
    try {
      const res = await axios.get(
        API_URL + 'keranjangs?product.id=' + value.id
      );

      if (res.data.length === 0) {
        const keranjang = {
          jumlah: 1,
          total_harga: value.harga,
          product: value,
        };

        await axios.post(API_URL + 'keranjangs', keranjang);

        getListsKeranjangs();

        Swal.fire({
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          title: keranjang.product.nama + ' Sukses Masuk Keranjang',
        });
      } else {
        const keranjang = {
          jumlah: res.data[0].jumlah + 1,
          total_harga: res.data[0].total_harga + value.harga,
          product: value,
        };

        await axios.put(API_URL + 'keranjangs/' + res.data[0].id, keranjang);

        Swal.fire({
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          title: keranjang.product.nama + ' Sukses Masuk Keranjang',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (search) => {
    setSearch(search);
  };

  const filteredProducts = menus.filter((menu) =>
    menu.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container w-full">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 md:grid-cols-1 lg:ml-0 md:ml-80">
        <div className="col-span-1">
          <Sidebar
            changeCategory={changeCategory}
            categoriYangDipilih={categoriYangDipilih}
          />
        </div>

        <div className="col-span-3 mx-3 lg:my-4 md:mb-5 lg:mx-5 ">
          <h1 className="mb-5 text-2xl font-bold text-gray-700">Daftar Menu</h1>
          <SearchBar handleSearch={handleSearch} />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-1">
            {filteredProducts.map((menu) => (
              <ProductList key={menu.id} menu={menu} addCarts={addCarts} />
            ))}
          </div>
        </div>

        <div className="w-full col-span-1 mx-5 my-4">
          <h1 className="mb-5 text-2xl font-bold text-gray-700">Keranjang</h1>
          <Results
            keranjangs={keranjangs}
            getListsKeranjangs={getListsKeranjangs}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
