'use client'
import { groq } from "next-sanity"
import { SanityClient, urlFor } from "@/sanity/sanity.client"
import Link from "next/link";


export default async function Food() {
    const data = await SanityClient.fetch(groq` *[_type == "food"]{
        name,description,image,slug}`)
    console.log(data);
    
  return (
    <div className="bg-white font-sans">
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center">
        <h2 className="text-3xl font-extralight text-slate-400 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-slate-400 after:rounded-lg-full">Fast Food</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
        
       
       {data.map((food:any)=>(
      <Link href={`/food/${food.slug.current}`}>
        <div className="bg-white cursor-pointer overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
        <img src={urlFor(food.image).url()} alt={food.name} className="w-full h-96 object-cover" />
        <div className="p-6 absolute bottom-0 left-0 right-0 bg-slate-200 opacity-90">
          <span className="text-sm block text-gray-800 mb-2">27 Jan 2025 | BY Qirat Saeed</span>
          <h3 className="text-xl font-bold text-gray-800">{food.name}</h3>
          <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
            <p className="text-gray-800 text-sm">{food.description}</p>
          </div>
        </div>
      </div>
      </Link>
       ))}
       
       
      </div>
    </div>
  </div>
  )
}

