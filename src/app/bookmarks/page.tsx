import React from 'react'
import {getUserBookmarks} from "@/lib/actions";
import {Link} from "next-view-transitions";
import {getSlug} from "@/lib/utils";
import Image from 'next/image'
import getBase64 from "@/lib/get-base64";
import {TvSearchResult} from "@/lib/types";

const Page = async () => {
    const allBookmarks = await getUserBookmarks();

    return (
        <main className={'pb-20 container mt-10'}>
            <h1 className={'font-bold text-2xl'}>
                All bookmarks {allBookmarks.length > 0 && `(${allBookmarks.length})`}
            </h1>
           <div className={'mt-6 grid grid-cols-2 lg:grid-cols-5'}>
               {[...allBookmarks, ...allBookmarks].map(async(bookmark) => {
                   const {id, type, poster_path} = bookmark

                   const displayTitle = 'title' in bookmark ? bookmark.title : (bookmark as TvSearchResult).name;
                   const blurData = await getBase64(`https://image.tmdb.org/t/p/original${poster_path}`)

                   return (
                       <div key={id} className="pl-1">
                               <Link href={`/${type}/${id}/${getSlug(displayTitle)}`} className={'group hover:cursor-pointer'}>
                                   <Image
                                       width={200}
                                       height={165}
                                       src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                       blurDataURL={blurData}
                                       alt={displayTitle}
                                       className={'object-cover rounded'}
                                   />
                                   <h3 className={'max-w-[250px] text-sm font-semibold mt-4 group-hover:text-orange-600 group-hover:underline'}>
                                       {displayTitle}
                                   </h3>
                               </Link>
                       </div>
                   )
               })}
           </div>
        </main>
    )
}
export default Page
