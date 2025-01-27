import Image from "next/image"
import hero from '../../../public/hero.png'
import Link from "next/link"


export default function Hero() {
  return (
    <div className="my-5 grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
    <div className="max-md:order-1 max-md:text-center">
      <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10 great-vibes-regular">Discover Flavorful Journeys with Bites & Bliss</h3>
      <p className="mt-4 text-sm text-gray-600">Welcome to our recipe blog, your ultimate destination for discovering the joy of cooking and exploring a world of flavors. Whether you're a seasoned chef, a passionate home cook, or someone just starting their culinary journey, our blog offers something for everyone. Here, you'll find a variety of mouthwatering recipes, from quick and easy weekday meals to indulgent desserts and exotic dishes from around the globe. We share step-by-step guides, helpful cooking tips, and insights into ingredients to help you create delicious meals with confidence. Our blog also features seasonal specials and creative ideas to make every occasion memorable. Join us on this flavorful journey and turn everyday cooking into a delightful adventure!</p>
      <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-[#f0b878] text-white hover:bg-[#fd9c42]">
        <Link href={'/recipe'}>Explore</Link>
      </button>
    </div>
    <div className="md:h-[470px]">
      <Image src={hero} alt={"Into"} className="w-full h-full md:object-contain" />
    </div>
  </div>
  )
}
