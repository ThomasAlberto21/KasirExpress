import React from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Results from './components/Results';
import { API_URL } from './api/api';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };

    componentDidMount() {

    }
  }

  render() {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='col-span-3'>
          <ProductList />
        </div>
        <div className='col-span-1'>
          <Results />
        </div>
      </div>
    );
  }
}
