import formatPrice from "@/lib/format";

interface CheckoutOrderEntryProps {

}

const CheckoutOrderEntry = ({item} : any ) => {
    const product = item.product
  return (
    <>
      <li className="grid grid-cols-7 gap-2 border-b-1">
        <div className="col-span-1 self-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded w-full"
          />
        </div>
        <div className="flex flex-col col-span-3 pt-2">
          <span className="text-gray-600 text-md font-semi-bold">
            {product.name}
          </span>
          <span className="text-gray-400 text-sm inline-block pt-2">
            {product.category}
          </span>
        </div>
        <div className="col-span-3 pt-3">
          <div className="flex items-center space-x-2 text-sm justify-between">
            <span className="text-gray-400">{item.quantity + ' x ' + formatPrice(product.price)}</span>
            <span className="text-pink-400 font-semibold inline-block">
              {formatPrice(item.quantity *  product.price) }
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default CheckoutOrderEntry;
