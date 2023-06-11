import React from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Results from './components/Results';

export default class App extends React.Component {
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
