import React from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Results from './components/Results';
import axios from 'axios';
import { API_URL } from './api/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: 'Makanan',
      masukKeranjangs: [],
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
    console.log(value);
  };

  render() {
    const { menus, categoriYangDipilih } = this.state;

    return (
      <main className="container">
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
                menus.map((menu) => <ProductList key={menu.id} menu={menu} addCarts={this.addCarts}/>)}
            </div>
          </div>

          <div className="col-span-1">
            <Results />
          </div>
        </div>
      </main>
    );
  }
}
