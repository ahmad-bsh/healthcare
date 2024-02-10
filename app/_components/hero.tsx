import Image from "next/image";

export const Hero = () => {
  return (
    <div className="max-h-[calc(100vh-6rem)] flex flex-col relative py-8 px-4 2xl:px-0">
      <div className="md:grid md:grid-cols-2 h-full flex-1 min-w-96">
        <div className="relative aspect-[693/598]">
          <Image
            src={"/hero.png"}
            alt=""
            fill
            className="md:hidden absolute w-full h-full"
          />
          <div className="hidden md:flex absolute bg-white right-5  sm:left-none -bottom-32 md:top-0 md:right-0 md:bottom-0 md:left-0 bg-opacity-50  items-center">
            <div className="p-2.5 rounded-lg ">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                Virtual Healthcare for you
              </div>
              <div className="text-gray-500 mt-2 lg:text-lg xl:text-xl">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </div>
              <div className="bg-blue-400 text-white font-bold text-xl px-4 pt-2.5 pb-3.5 flex justify-center items-center mt-5 w-fit rounded-full">
                Consult today
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative  aspect-[693/598] ">
          <Image
            src={"/hero.png"}
            alt=""
            fill
            className="absolute w-full h-full"
          />
        </div>
      </div>
      <div className="flex md:hidden  bg-white right-5  sm:left-none -bottom-32 md:top-0 md:right-0 md:bottom-0 md:left-0 bg-opacity-50 justify-center items-center pt-4">
        <div className="flex flex-col items-center text-center p-2.5 rounded-lg ">
          <div className="text-4xl font-bold">Virtual Healthcare for you</div>
          <div className="text-gray-500 mt-2">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </div>
          <div className="bg-blue-400 text-white font-bold text-xl px-4 pt-2.5 pb-3.5 flex justify-center items-center mt-5 w-fit rounded-full">
            Consult today
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
