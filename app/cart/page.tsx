import Image from "next/image";
const Cart = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-3xl font-sans font-bold p-10">
          Seems, you haven't added <br />
          anything to the Cart yet....
        </h1>
        <Image
          src="https://media.giphy.com/media/3ogwFYbBBADDtLYRqM/giphy.gif"
          width={500}
          height={500}
          alt=""
          className="rounded-3xl shadow-md"
        />
      </div>
    </>
  );
};

export default Cart;
