import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image 
        src="http://universalgroupindia.org/assets/images/universallogo.png" 
        alt="Cruip Logo" 
        width={2500} 
        height={2500} 
        className="w-48 h-16"
      />
    </Link>
  );
}