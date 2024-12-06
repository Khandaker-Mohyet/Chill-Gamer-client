

const ExtraSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Extra Section 1: Top Gaming Platforms */}
      <section className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Top Gaming Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/c3GJMSr/11.jpg"
              alt="PC"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">PC</h3>
            <p className="text-gray-600">Experience top-tier gaming on PC.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/Ks3KCd8/12.png"
              alt="PlayStation"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">PlayStation</h3>
            <p className="text-gray-600">Explore incredible exclusives on PlayStation.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/Ytm9JJH/13.jpg"
              alt="Xbox"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Xbox</h3>
            <p className="text-gray-600">Unleash the power of Xbox gaming.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/5LCjT4j/14.jpg"
              alt="Nintendo"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Nintendo</h3>
            <p className="text-gray-600">Relive classic adventures on Nintendo.</p>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Upcoming Games */}
      <section className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Upcoming Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/hY5dMZJ/21.webp"
              alt="Game A"
              className="mx-auto mb-4 w-[250px] h-[250px]"
            />
            <h3 className="text-xl font-semibold">Game A</h3>
            <p className="text-gray-600">Releases on: 2024-12-20</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/PwhWbVc/22.webp"
              alt="Game B"
              className="mx-auto mb-4 w-[250px] h-[250px]"
            />
            <h3 className="text-xl font-semibold">Game B</h3>
            <p className="text-gray-600">Releases on: 2025-01-15</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/CPkN5P8/23.jpg"
              alt="Game C"
              className="mx-auto mb-4 w-[250px] h-[250px]"
            />
            <h3 className="text-xl font-semibold">Game C</h3>
            <p className="text-gray-600">Releases on: 2025-02-10</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;