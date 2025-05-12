export default function AboutHeroSection() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about.jpg')" }}></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* Decorative Elements */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl -top-10 -left-20"></div>
      <div className="absolute w-[200px] h-[200px] bg-pink-500 opacity-30 rounded-full blur-2xl -bottom-10 -right-10"></div>

      {/* Content */}
      <div className="relative z-10 text-white py-40 md:py-56">
        <div className="container mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Empowering Dreams
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              About Us
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Learn more about Creating Opportunities International and our mission to empower dreams.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#mission"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition duration-200"
            >
              Our Mission
            </a>
            <a
              href="#team"
              className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-24"
        >
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
