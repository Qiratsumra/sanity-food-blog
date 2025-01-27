'use client'

import author from '../../../../public/author.png'
import { SanityClient, urlFor } from "@/sanity/sanity.client";
import { groq } from "next-sanity";
import Image from 'next/image';
import { useParams } from "next/navigation";

export default async function Slug() {
  const {slug} = useParams();

  const data= await SanityClient.fetch(groq `*[_type=='food']`);
    
  const product = data.find((product:any)=>product.slug.current === slug);
  console.log(product);
  return (
    <>
   <div className="max-w-4xl mx-auto p-6 bg-white">
  <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">{product.name}</h1>
  <img
    src={urlFor(product.image).url()}
    alt={product.name}
    className="w-full h-72 object-cover rounded-lg mb-6 shadow-sm"
  />

<div className="flex flex-wrap items-center gap-3">
              <Image src={author} alt='author' className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400 uppercase font-semibold">BY Qirat Saeed</p>
            </div>
  <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
  
</div>

    </>
  )
}
