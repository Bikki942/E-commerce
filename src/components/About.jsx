// import React from 'react'

// function About() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 sm:px-6 lg:px-8">
//     <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-center text-3xl font-extrabold text-gray-900">About Us</h2>
//       <p className="mt-4 text-gray-600 text-lg">
//         Welcome to our store! We are passionate about providing the best products to our customers. Our mission is to deliver quality and satisfaction through our diverse range of products. Our team works tirelessly to ensure that each product meets the highest standards.
//       </p>
//       <p className="mt-4 text-gray-600 text-lg">
//         We believe in the power of customer feedback and continuously strive to improve our offerings based on your suggestions. Thank you for choosing us and being a part of our journey.
//       </p>
//     </div>
//   </div>
//   )
// }

// export default About
import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 lg:px-12 py-12">
      <div className="max-w-5xl w-full space-y-12 bg-white p-10 rounded-xl shadow-lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mx-auto max-w-2xl">
            Welcome to our store! We are passionate about providing the best products to our customers. Our mission is to deliver quality and satisfaction through our diverse range of products. Our team works tirelessly to ensure that each product meets the highest standards.
          </p>
        </div>

        {/* Company History */}
        <section className="bg-gray-50 p-8 rounded-xl shadow-md mb-12">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2020, our company has grown from a small startup to a leading retailer in the industry. We started with a vision to revolutionize the way people shop online, offering an unparalleled shopping experience with an emphasis on quality and customer service.
          </p>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 p-8 rounded-xl shadow-md mb-12">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-40 h-40 object-cover rounded-full mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Jane Doe</h4>
              <p className="text-gray-600 text-lg">Founder & CEO</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-40 h-40 object-cover rounded-full mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">John Smith</h4>
              <p className="text-gray-600 text-lg">Chief Technology Officer</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-40 h-40 object-cover rounded-full mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Alice Johnson</h4>
              <p className="text-gray-600 text-lg">Head of Marketing</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6">Join Us on Our Journey</h3>
          <p className="text-gray-700 text-lg leading-relaxed mx-auto max-w-2xl mb-8">
            We are always looking for talented individuals to join our team and help us achieve our mission. If you're passionate about innovation and customer satisfaction, we'd love to hear from you.
          </p>
          <a href="/careers" className="inline-block bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
            Explore Careers
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;
