import React from 'react';

function Footer() {
  return (
    <div className='relative bottom-0 left-0 w-full h-auto flex justify-center bg-slate-300'>
      <div className='container flex flex-col md:flex-row justify-between items-center py-4'>
        <div className='flex items-center text-3xl font-bold text-orange-500 ml-4 cursor-pointer'>
          <img className='w-[80px] h-[70px]' src="src/image/images_processed.jpeg" alt="ShopingMart Logo" />
          <span className="ml-2">ShopingMart</span>
        </div>
        <div className='text-center md:text-left'>
          <p className='text-white'>&copy; 2024 All Rights Reserved Terms Of Use And Privacy Policy</p>
        </div>
        <div className='flex gap-4 mt-4 md:mt-0'>
          <img className='w-12 h-12 rounded-xl' src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png" alt="Facebook" />
          <img className='w-12 h-12 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT086HJnYSz0CDS1pha4EdeZUEityKO3mpNRg&s" alt="Instagram" />
          <img className='w-12 h-12 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyLqXB1TommoS7QOLIvfE8i1zW0E0zXnua3kplpVwoP64APsHR7AetoFuHzoPIVbdM5k&usqp=CAU" alt="Twitter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
