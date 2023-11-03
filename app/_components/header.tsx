export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 right-0 bottom-0 left-0 pt-10 bg-white h-24 border z-10">
      <div className=" max-w-7xl mx-auto">
        <div className="flex justify-between ">
          <div className="flex space-x-3 items-center font-bold">
            <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
              <div className="text-2xl text-white">T</div>
            </div>
            <div className="text-xl ">Trafalgar</div>
          </div>
          <div className="hidden md:flex space-x-10 text-gray-500">
            <div>Home</div>
            <div>Find a doctor</div>
            <div>Apps</div>
            <div>Testimonials</div>
            <div>About Us</div>
          </div>
        </div>
      </div>
    </header>
  );
};
