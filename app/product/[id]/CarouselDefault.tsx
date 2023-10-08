import { useEffect, useState } from "react";


export function CarouselDefault(images: any) {


  const [currentImage, setcurrentImage] = useState(images.images[0].url)



  return (

    <div className="flex lg:flex-row flex-col-reverse ">
<div className="lg:w-[20%] w-[50%] flex-row lg:flex-col flex gap-y-4">

  <div className="w-full  shadow-sm hover:brightness-50" >
  <button onClick={() => setcurrentImage(images.images[0].url)}>
  <img
     src={images.images[0].url}
     alt="image 1"
     className="h-full w-full border rounded object-cover "
   />
   </button>
  </div>
  <div className="w-full object-cover hover:brightness-50" >
  <button onClick={() => setcurrentImage(images.images[1].url)}>
  <img
     src={images.images[1].url}
     alt="image 1"
     className="h-full w-full rounded object-cover "
   />
   </button>
  </div>
</div>
        
<div className="p-4">

   <img
     src={currentImage}
     alt="image 1"
     className="h-full w-full object-cover"
   />

</div>
    </div>
  );
}