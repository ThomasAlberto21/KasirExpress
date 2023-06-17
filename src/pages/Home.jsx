import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Results from '../components/Results';
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL } from '../api/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: 'Makanan',
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + 'products?category.nama=' + this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(API_URL + 'keranjangs')
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios
        .get(API_URL + 'keranjangs')
        .then((res) => {
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + 'products?category.nama=' + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addCarts = (value) => {
    axios
      .get(API_URL + 'keranjangs?product.id=' + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + 'keranjangs', keranjang)
            .then(() => {
              Swal.fire({
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                title: keranjang.product.nama + ' Sukses Masuk Keranjang',
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + 'keranjangs/' + res.data[0].id, keranjang)
            .then(() => {
              Swal.fire({
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                title: keranjang.product.nama + ' Sukses Masuk Keranjang',
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, categoriYangDipilih, keranjangs } = this.state;

    return (
      <main className="container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-1 gap-4 lg:ml-0 md:ml-80">
          <div className="col-span-1">
            <Sidebar
              changeCategory={this.changeCategory}
              categoriYangDipilih={categoriYangDipilih}
            />
          </div>

          <div className="col-span-3 lg:my-4 md:mb-5 lg:mx-5 mx-3 ">
            <h1 className="font-bold text-gray-700 mb-5 text-2xl">
              Daftar Menu
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
              {menus &&
                menus.map((menu) => (
                  <ProductList
                    key={menu.id}
                    menu={menu}
                    addCarts={this.addCarts}
                  />
                ))}
            </div>
          </div>

          <div className="col-span-1 my-4 mx-5 w-full">
            <h1 className="font-bold text-gray-700 mb-5 text-2xl">Keranjang</h1>
            <Results keranjangs={keranjangs} />
          </div>
        </div>
      </main>
    );
  }
}
