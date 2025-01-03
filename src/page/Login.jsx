function Login() {
  function handelSubmit(e) {
    e.preventDefault();
    console.log("test");
  }
  return (
    <div className="font-montserrat bg-[#f5eeee91] w-full h-full flex flex-col  justify-center items-center p-4">
      <form
        onSubmit={handelSubmit}
        className="flex flex-col gap-2 bg-white shadow-md  rounded-md p-4 justify-evenly w-full md:w-1/3 aspect-square"
      >
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-md bg-transparent border-gray-300 border border-1 "
        />

        <input
          type="password"
          placeholder="password"
          className="p-3 rounded-md bg-transparent border-gray-300 border border-1"
        />
        <button
          className="bg-[#00512c] text-white text-sm font-semibold p-3 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
