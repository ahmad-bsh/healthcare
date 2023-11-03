import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col relative">
      <div className="md:grid md:grid-cols-2 h-full flex-1 min-w-96">
        <div className="relative aspect-[693/598]">
          <Image
            src={"/hero.png"}
            alt=""
            fill
            className="md:hidden absolute w-full h-full"
          />
          <div className="sm:hidden absolute bg-white left-0 right-0  -bottom-32 bg-opacity-50 flex justify-center items-center">
            <div className="max-w-96 w-96 border  p-2.5 rounded-lg md:border-none  backdrop-blur-md md:backdrop-blur-none ">
              <div className="text-3xl font-bold">
                Virtual Healthcare for you
              </div>

              <div className="text-gray-500 mt-2">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone Consult today
              </div>
            </div>
          </div>
          <div className="hidden sm:flex absolute bg-white right-5  sm:left-none -bottom-32 md:top-0 md:right-0 md:bottom-0 md:left-0 bg-opacity-50 justify-center items-center">
            <div className="max-w-96 w-96 border p-2.5 rounded-lg backdrop-blur-md md:backdrop-blur-none border md:border-none">
              <div className="text-3xl font-bold">
                Virtual Healthcare for you
              </div>
              <div className="text-gray-500 mt-2">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone Consult today
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
    </div>
  );
};
