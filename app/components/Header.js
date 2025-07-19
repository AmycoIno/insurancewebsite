import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    // We added "shadow-md" here to create the shadow effect
    <header className="relative z-10 bg-white shadow-md">  
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/Logoamyco.png" alt="MonAssurance Logo" width={200} height={40} />
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex gap-5 text-gray-700 font-medium text-lg">
          <Link href="/assurance-auto" className="hover:text-blue-600">Assurance auto</Link>
          <Link href="/assurance-habitation" className="hover:text-blue-600">Assurance habitation</Link>
          <Link href="/Mutuelle santé" className="hover:text-blue-600">Mutuelle santé</Link>
          <Link href="/Assurance Moto" className="hover:text-blue-600">Assurance Moto</Link>
          <Link href="/Assurance Vie" className="hover:text-blue-600">Assurance Vie</Link>
        </div>

        {/* CTA Button */}
        <Link href="/connexion" className="border border-blue-600 text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white">
          Connexion
        </Link>
      </nav>
    </header>
  );
}