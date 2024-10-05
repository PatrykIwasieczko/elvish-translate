export const HeroBanner = () => {
  return (
    <div className="relative h-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/legolas.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-1 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Talk to Elves!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Ever wanted to chat with Legolas? Now you can translate your
            messages to Elvish and impress your friends (or confuse them). Time
            to take the hobbits to Isengard!
          </p>
          <button>Start Translating</button>
        </div>
      </div>
    </div>
  );
};
