'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import BackButton from './BackButton';

const ProtectedRoute = ({ children }) => {
    const pathname = usePathname()
    const [isAllowed, setIsAllowed] = useState(false);
   
  useEffect(() => {
    // Ensure localStorage is available in the browser environment
    if (typeof window !== 'undefined') {
      // Initialize isAllowed from localStorage if it exists
      const storedIsAllowed = localStorage.getItem('isAllowed');
      setIsAllowed(storedIsAllowed ? JSON.parse(storedIsAllowed) : false);
    }
  }, []);

  useEffect(() => {
    // Update isAllowed state when pathname changes
    if (typeof window !== 'undefined') {
      if (pathname === '/customer') {
        setIsAllowed(true);
        // Save the updated isAllowed state to localStorage
        localStorage.setItem('isAllowed', JSON.stringify(true));
      }
    }
  }, [pathname]);


  return (!isAllowed || (isAllowed && (pathname==='/customer' || pathname==='/customer/cart')))
   ? children : children;
};

export default ProtectedRoute;
