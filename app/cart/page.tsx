import Empty from "@/public/empty.gif"
import Image from "next/image";
const Cart = () => {
    return(
        <>
        <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-3xl font-sans font-bold p-10">Seems, you haven't added <br />anything to the Cart yet....</h1>


        {/* <iframe src="https://giphy.com/embed/ez1QgBv3LAzwcYiGDK" width="480" height="480"  ></iframe> */}
        <Image src="https://media.giphy.com/media/3ogwFYbBBADDtLYRqM/giphy.gif" width={500} height={500} alt="" className="rounded-3xl shadow-md" />
        {/* <p><a href="https://giphy.com/gifs/eternalfamilytv-eternal-family-tv-la-pizza-ez1QgBv3LAzwcYiGDK"></a></p> */}
        </div>
        </>
    )
}


export default Cart;