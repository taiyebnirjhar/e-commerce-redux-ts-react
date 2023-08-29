import {
  addToCart,
  removeFromCart,
  removeOne,
} from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/general';
import { useEffect, useState } from 'react';
import {
  HiMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from 'react-icons/hi';
import { Button } from './ui/button';
import FixedButton from './ui/fixedButton';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export default function Cart() {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [cartNotification, setCartNotification] = useState(false);

  //! Dummy data

  // const products: IProduct[] = [];

  //! **

  useEffect(() => {
    if (products.length > 0) {
      setCartNotification(true);
    } else {
      setCartNotification(false);
    }
  }, [products]);

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          {cartNotification ? (
            <div className="relative">
              <HiOutlineShoppingCart size="25" />
              <span className="-ml-2 -mt-2 top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
          ) : (
            <HiOutlineShoppingCart size="25" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <h1>Total: {total.toFixed(2)}</h1>
        </SheetHeader>
        <div className={products.length > 4 ? 'h-[85%] overflow-y-scroll' : ''}>
          <div className="space-y-5 ">
            {products.map((product) => {
              return (
                <div
                  className="border h-44 p-5 flex justify-between rounded-md"
                  key={product.name}
                >
                  <div className="border-r pr-5 shrink-0">
                    <img src={product?.image} alt="" className="h-full" />
                  </div>
                  <div className="px-2 w-full flex flex-col gap-3">
                    <h1 className="text-2xl self-center">{product?.name}</h1>
                    <p>Quantity: {product?.quantity}</p>
                    <p className="text-xl">
                      Total Price: $
                      {(product.price * product.quantity!).toFixed(2)}
                    </p>
                  </div>
                  <div className="border-l pl-5 flex flex-col justify-between">
                    <Button onClick={() => dispatch(addToCart(product))}>
                      <HiOutlinePlus size="20" />
                    </Button>
                    <Button onClick={() => dispatch(removeOne(product))}>
                      <HiMinus size="20" />
                    </Button>
                    <Button
                      variant="destructive"
                      className="bg-red-500 hover:bg-red-400"
                      onClick={() => dispatch(removeFromCart(product))}
                    >
                      <HiOutlineTrash size="20" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <FixedButton />
      </SheetContent>
    </Sheet>
  );
}
