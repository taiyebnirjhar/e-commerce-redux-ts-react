import { toast } from '@/components/ui/use-toast';
import { useAppSelector } from '@/redux/hooks/general';
import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateCheckoutRouteProps {
  children: ReactElement;
}

export default function PrivateCheckoutRoute({
  children,
}: PrivateCheckoutRouteProps) {
  const { products } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log(products.length);

  useEffect(() => {
    if (products.length === 0) {
      toast({
        description: 'Add Some Products',
      });
      navigate('/products');
    }
  }, [products]);

  return <>{children}</>;
}
