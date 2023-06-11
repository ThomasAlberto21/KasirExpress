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
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + 'products')
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { menus } = this.state;

    return (
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6 gap-4">
          <div className="col-span-1">
            <Sidebar />
          </div>

          <div className="col-span-3 my-5 lg:mx-5 mx-3">
            <h1 className="font-bold text-gray-700 mb-5 text-2xl">
              Daftar Menu
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 ">
              {menus &&
                menus.map((menu) => <ProductList key={menu.id} menu={menu} />)}
            </div>
          </div>

          <div className="col-span-1">
            <Results />
          </div>
        </div>
      </div>
    );
  }
}
