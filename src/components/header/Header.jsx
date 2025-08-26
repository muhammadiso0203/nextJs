import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  return (
    <div className='container mx-auto flex justify-center gap-40 p-4'>
        <Link href={"/"}>Home</Link>
        <Link href={"/user"}>User</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/food"}>Food</Link>
    </div>
  );
};

export default memo(Header);