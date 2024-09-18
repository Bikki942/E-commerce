import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import Api from '../api/Api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleAddToCart = (item) => {
    if (currentUser) {
      dispatch(addToCart({ email: currentUser.email, item }));
    } else {
      alert('Please log in to add items to the cart.');
    }
  };

  return (
    <div className="p-6">
      <Api setProducts={setProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={product.images[0]} 
              className="w-full h-48 object-cover" 
              alt={product.title} 
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../features/cart/cartSlice';
// import Api from '../api/Api';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [category, setCategory] = useState('All');
//   const dispatch = useDispatch();

//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const currentUser = useSelector((state) => state.auth.currentUser);

//   useEffect(() => {
//     if (category === 'All') {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(products.filter((product) => product.category === category));
//     }
//   }, [category, products]);

//   const handleAddToCart = (item) => {
//     if (currentUser) {
//       dispatch(addToCart({ email: currentUser.email, item }));
//     } else {
//       alert('Please log in to add items to the cart.');
//     }
//   };

//   const isNewArrival = (date) => {
//     const productDate = new Date(date);
//     const today = new Date();
//     return (today - productDate) < 30 * 24 * 60 * 60 * 1000;
//   };

//   const handleCategoryChange = (newCategory) => {
//     setCategory(newCategory);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
//       {/* Hero Section */}
//       <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-center overflow-hidden">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}></div>
//         <div className="relative z-10 text-white p-8">
//           <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn">Discover Your Style</h1>
//           <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">Shop the latest trends and enjoy exclusive offers.</p>
//           <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-200 transition duration-300">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <div className="p-8">
//         <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">Our Collection</h2>
//         <div className="flex justify-center space-x-6 mb-6">
//           {['All', 'Women', 'Men', 'Accessories'].map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-6 py-3 rounded-full font-semibold text-lg transition duration-300 ${
//                 category === cat ? 'bg-purple-700 text-white shadow-lg' : 'bg-gray-300 text-gray-800'
//               } hover:bg-purple-600 hover:text-white`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <Api setProducts={setProducts} />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
//             >
//               <div className="relative">
//                 {isNewArrival(product.dateAdded) && (
//                   <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
//                     New
//                   </span>
//                 )}
//                 <img
//                   src={product.images[0]}
//                   className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
//                   alt={product.title}
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-3xl font-semibold text-gray-800">{product.title}</h2>
//                 <p className="text-gray-600 text-sm mt-2">
//                   {product.description?.slice(0, 80)}...
//                 </p>
//                 <div className="flex items-center justify-between mt-4">
//                   <span className="text-3xl font-bold text-purple-700">${product.price}</span>
//                   <div className="flex items-center space-x-1 text-yellow-500">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`w-5 h-5 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`}
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mt-6 flex justify-between items-center">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
//                   >
//                     Add to Cart
//                   </button>
//                   {product.discount > 0 && (
//                     <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
//                       {product.discount}% Off
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Top Rated Products Carousel */}
//       <section className="p-8 bg-gradient-to-r from-purple-700 to-blue-600 text-white mt-12">
//         <h2 className="text-5xl font-bold text-center mb-8">Top Rated Products</h2>
//         <div className="carousel flex overflow-x-auto space-x-6 scroll-smooth">
//           {products
//             .filter((product) => product.rating === 5)
//             .map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white text-black rounded-xl shadow-lg p-4 min-w-[250px] transform transition-transform duration-500 hover:scale-105"
//               >
//                 <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover mb-4" />
//                 <h3 className="text-xl font-bold">{product.title}</h3>
//                 <p className="text-gray-700 text-sm mt-2">{product.description?.slice(0, 60)}...</p>
//                 <span className="text-2xl font-bold text-purple-700 mt-4">${product.price}</span>
//               </div>
//             ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;
