import Image from "next/image";
import healthy from '../../../public/category/healthy.png'
import events from '../../../public/category/events.png'
import foodie from  '../../../public/category/image.png'
import Link from "next/link";

export default function FoodCategories() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Healthy Food */}

        <div className="relative group ">
        <Link href={'/healthy'}>
        <Image src={healthy} alt="Healthy Food" className="w-full mt-14"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-center bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-sm font-semibold tracking-wide text-green-500 uppercase">Healthy Food </h3>
              <p className="text-lg font-bold text-gray-900">Start Living Properly</p>
            </div>
          </div>
        </Link>
        </div>

        {/* Events */}
        <div className="relative group">
          <Link href={'/food'}>
          <Image  src={foodie} alt="Food Event" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-center bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-sm font-semibold tracking-wide text-blue-500 uppercase">Events </h3>
              <p className="text-lg font-bold text-gray-900"> Foodies, Save the Date</p>
            </div>
          </div>
          </Link>
        </div>

        {/* Sweets */}
        <div className="relative group">
          <Link href={'/dessert'}>
          <Image src={events} alt="Sweets" className="w-full mt-14" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-center bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-sm font-semibold tracking-wide text-pink-500 uppercase"> Sweets </h3>
              <p className="text-lg font-bold text-gray-900">  The Best Desserts Ideas  </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
