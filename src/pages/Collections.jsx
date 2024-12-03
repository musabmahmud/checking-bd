import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {

  const { products, search, showSearch, categories } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }

  }
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, showSearch, search]);


  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, showSearch, search]);

  useEffect(() => {
    sortProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);


  return (
    <div className='flex sm:flex-row flex-col gap-1 sm:gap-10 py-10 border-t'>
      {/* lEFT Filter Option */}
      <div className="min-w-60">
        <a onClick={() => setShowFilter(!showFilter)} className='flex items-center gap-2 my-2 text-xl cursor-pointer'>FILTERS
          <img className={`h-3 sm:hidden  transition ease-in-out duration-200 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </a>
        {/* Category Filter  */}
        <div className={`border border-gray-300 pl-5 rounded py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 font-medium text-sm">CATEGORIES</p>
          <div className="flex flex-col gap-5 font-medium text-gray-700 text-sm">

            {
              categories.map((item, index) => (
                <p className="flex gap-5" key={index}>
                  <input type="checkbox" className='w-3' name="" id="" value={item.id} onChange={toggleCategory} /> {item.name}
                </p>
              ))
            }
          </div>
        </div>
      </div>

      {/* Right Side Products  */}
      <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e) => setSortType(e.target.value)} name="" id="" className="border-2 border-gray-300 px-2 text-sm">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High </option>
            <option value="high-low">Sort by: High to Low </option>
          </select>
        </div>

        {/* products */}
        <div className="gap-4 gap-y-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Collections