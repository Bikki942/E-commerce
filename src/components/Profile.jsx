// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// function Profile() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const currentUser = useSelector((state) => state.auth.currentUser);

//   const handleLogout = (e) => {
//     e.preventDefault();
//     dispatch(logout(false));
//     navigate('/');
//   };

//   const backToProfile = (e) =>{
//     e.preventDefault();
//     navigate(-1);
//   }

//   return (
//     <div className='flex justify-end'>
//       <div className='bg-white shadow-md mt-8 p-4 mr-4 w-40 h-45'>
//         <div className='flex justify-end'><h1 className='text-slate-900 font-bold cursor-pointer' onClick={backToProfile}>X</h1></div>
//         <div className='flex justify-center items-center'><img src="src/image/download.png" alt="profile_image" className='border-2 rounded-[50%] p-2'/></div>
//         {currentUser && (
//           <div className='mt-4 text-center'>
//             <h2 className='text-gray-600 font-bold'>{currentUser.username}</h2>
//             <p className='text-gray-500 font-semibold'>{currentUser.email}</p>
//           </div>
//         )}
//         <div className='flex justify-center align-center mt-3'>
//           <button onClick={handleLogout}><img src="/src/image/icons8-exit-30.png" alt="Logout" className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 rounded focus:outline-none focus:shadow-outline'/></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout(false));
    navigate('/');
  };

  const backToProfile = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="flex justify-end ">
      <div className="bg-gradient-to-b from-blue-500 to-purple-500 shadow-2xl rounded-lg p-8 w-96 h-auto">
        <div className="flex justify-end">
          <button onClick={backToProfile} className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <img src="src/image/download.png" alt="profile_image" className="border-4 border-white rounded-full p-1 w-24 h-24 object-cover shadow-lg" />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.707 6.293a1 1 0 00-1.414 0L10 12.586 7.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>

          {currentUser && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-white">{currentUser.username}</h2>
              <p className="text-gray-200">{currentUser.email}</p>
            </div>
          )}

          {/* Additional profile information */}
          <div className="mt-6 text-center text-white">
            <p><span className="font-semibold">Joined:</span> January 10, 2023</p>
            <p><span className="font-semibold">Location:</span> New York, USA</p>
            <p><span className="font-semibold">Phone Number:</span> +1 (123) 456-7890</p>
            <p><span className="font-semibold">Address:</span> 123 Main St, New York, NY</p>
            <p><span className="font-semibold">Membership:</span> Premium</p>
          </div>

          {/* Bio section */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Bio</h3>
            <p className="text-gray-500 mt-2">Hi, I'm {currentUser.username}! I love exploring new tech and building amazing web experiences. Let's connect!</p>
          </div>

          {/* Logout button */}
          <div className="mt-8">
            <button onClick={handleLogout} className="flex items-center bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-6 rounded-full transition ease-in-out duration-300 shadow-md">
              <img src="/src/image/icons8-exit-30.png" alt="Logout" className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
