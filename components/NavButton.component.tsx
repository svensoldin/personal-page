import Link from 'next/link';

const NavButton = ({ to }: { to: string }) => {
  return (
    <div className='m-3 border-transparent border-b-2 hover:border-blue-500 cursor-pointer capitalize'>
      <Link href={to === 'home' ? '/' : '/' + to}>{to}</Link>
    </div>
  );
};

export default NavButton;
