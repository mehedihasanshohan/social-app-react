import '/Users/Lenovo/lws/social-app-react/src/style.css' // For additional glowing effects

const TestLogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800"></div>

      {/* Glowing Circles */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-40 top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[150px] opacity-40 bottom-20 right-20"></div>

      {/* Vertical Line Effects */}
      <div className="absolute flex justify-between items-center top-0 left-0 right-0 bottom-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
          ></div>
        ))}
      </div>

      {/* Login Box */}
      <div className="relative z-10 w-[90%] max-w-lg bg-gray-800 bg-opacity-95 border border-gray-700 rounded-[20px] shadow-2xl p-8">
        {/* Title */}
        <h1 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-6">
          LOGIN IN
        </h1>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full py-3 px-5 text-sm bg-gray-900 text-white rounded-full border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-3 px-5 text-sm bg-gray-900 text-white rounded-full border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-500"
          />
        </div>

        {/* Button */}
        <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transform transition-transform shadow-lg">
          LOGIN
        </button>

        {/* Links */}
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <a href="#" className="hover:text-blue-500">Forgot Password?</a>
          <a href="#" className="hover:text-pink-500">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default TestLogIn;
