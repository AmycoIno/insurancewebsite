import Link from 'next/link';
import Image from 'next/image';

// Icons remain the same...
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4">
          
          {/* Column 1: Logo and Info (Remains left-aligned) */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image src="/LogoAmycoFooter.png" alt="AssureMax Logo" width={210} height={40} />
            </Link>
            <p className="mt-4 text-gray-400">
              Votre partenaire de confiance pour comparer et choisir les meilleures assurances. Économisez du temps et de l'argent avec notre plateforme innovante.
            </p>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="flex items-center gap-2"><PhoneIcon /> 01 23 45 67 89</li>
              <li className="flex items-center gap-2"><MailIcon /> contact@assuremax.fr</li>
              <li className="flex items-center gap-2"><LocationIcon /> 123 Avenue des Champs-Élysées, 75008 Paris</li>
            </ul>
          </div>

          {/* Column 2-4: Link Lists (NOW CENTERED) */}
          <div className="text-center mt-10"> {/* <-- TEXT-CENTER ADDED */}
            <h3 className="font-semibold tracking-wider">Nos Services</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/assurance-auto" className="text-gray-400 hover:text-white">Assurance Auto</Link></li>
              <li><Link href="/assurance-moto" className="text-gray-400 hover:text-white">Assurance Moto</Link></li>
              <li><Link href="/assurance-habitation" className="text-gray-400 hover:text-white">Assurance Habitation</Link></li>
              <li><Link href="/assurance-sante" className="text-gray-400 hover:text-white">Assurance Santé</Link></li>
              <li><Link href="/assurance-vie" className="text-gray-400 hover:text-white">Assurance Vie</Link></li>
            </ul>
          </div>
          <div className="text-center mt-10"> {/* <-- TEXT-CENTER ADDED */}
            <h3 className="font-semibold tracking-wider">À Propos</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white">Qui sommes-nous</Link></li>
              <li><Link href="/equipe" className="text-gray-400 hover:text-white">Notre équipe</Link></li>
              <li><Link href="/partenaires" className="text-gray-400 hover:text-white">Nos partenaires</Link></li>
              <li><Link href="/carrieres" className="text-gray-400 hover:text-white">Carrières</Link></li>
              <li><Link href="/presse" className="text-gray-400 hover:text-white">Presse</Link></li>
            </ul>
          </div>
          <div className="text-center mt-10"> {/* <-- TEXT-CENTER ADDED */}
            <h3 className="font-semibold tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/centre-aide" className="text-gray-400 hover:text-white">Centre d'aide</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/reclamations" className="text-gray-400 hover:text-white">Réclamations</Link></li>
              <li><Link href="/suivi-dossier" className="text-gray-400 hover:text-white">Suivi de dossier</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-gray-500">© 2024 AssureMax. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-white"><FacebookIcon /></Link>
            <Link href="#" className="text-gray-500 hover:text-white"><TwitterIcon /></Link>
            <Link href="#" className="text-gray-500 hover:text-white"><LinkedinIcon /></Link>
            <Link href="#" className="text-gray-500 hover:text-white"><InstagramIcon /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}