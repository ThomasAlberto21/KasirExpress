import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <Sidebar />
      </div>
      <div className='col-span-2'>
        <ProductList />
      </div>
    </div>
  );
};

export default App;
