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
    console.log(this.state.menus);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <ProductList />
        </div>
        <div className="col-span-1">
          <Results />
        </div>
      </div>
    );
  }
}
