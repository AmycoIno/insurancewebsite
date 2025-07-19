import Link from 'next/link';
import Image from 'next/image';

// This is the small card component, we keep it here as it's part of the Body
function CategoryCard({ href, imgSrc, title }) {
  return (
    <Link href={href} className="block rounded-lg bg-white p-6 text-center shadow-md transition hover:shadow-lg hover:-translate-y-1">
      <div className="mx-auto h-16 w-16">
        <Image src={imgSrc} alt={`${title} icon`} width={64} height={64} />
      </div>
      <p className="mt-4 font-semibold text-gray-800">{title}</p>
    </Link>
  );
}

// The main Body component starts here
export default function Body() {
  return (
    <>
      {/* SECTION 1: The Hero Section (Your existing section) */}
      <section className="w-full bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-2">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Changer n'a jamais été aussi simple !
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Comparez et faites des économies sur tous vos contrats
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <CategoryCard href="/assurance-auto" imgSrc="/Assurance Auto.svg" title="Assurance auto" />
            <CategoryCard href="/mutuelle-moto" imgSrc="/Assurance Moto.svg" title="Assurance Moto" />
            <CategoryCard href="/assurance-habitation" imgSrc="/Assurance habitation.svg" title="Assurance habitation" />
            <CategoryCard href="/Mutuelle-sante" imgSrc="/Mutuelle santé.svg" title="Mutuelle santé" />
            <CategoryCard href="/assurance-vie" imgSrc="/Assurance Vie.svg" title="Assurance Vie" />
            <CategoryCard href="/Autres-assurances" imgSrc="/Autres assurances.svg" title="Autres..." />
          </div>
        </div>
      </section>

      {/* SECTION 2: How It Works */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Comment ça marche ?</h2>
            <p className="mt-4 text-lg text-gray-600">En 3 étapes simples et rapides.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">1</div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Remplissez le formulaire</h3>
              <p className="mt-2 text-gray-600">Répondez à quelques questions pour nous aider à comprendre vos besoins.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">2</div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Comparez les offres</h3>
              <p className="mt-2 text-gray-600">Nous interrogeons nos partenaires pour vous trouver les meilleurs tarifs.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">3</div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Économisez !</h3>
              <p className="mt-2 text-gray-600">Choisissez l'offre qui vous convient et souscrivez en ligne.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Partners */}
      <section className="w-full bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Nos assureurs partenaires</h2>
            <p className="mt-4 text-lg text-gray-600">Nous travaillons avec les plus grandes marques pour vous garantir le meilleur choix.</p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {/* Add your partner logos here. Create a 'partners' folder in 'public' */}
            <Image src="/partners/placeholder.svg" alt="Partner Logo 1" width={140} height={50} className="opacity-60" />
            <Image src="/partners/placeholder.svg" alt="Partner Logo 2" width={140} height={50} className="opacity-60" />
            <Image src="/partners/placeholder.svg" alt="Partner Logo 3" width={140} height={50} className="opacity-60" />
            <Image src="/partners/placeholder.svg" alt="Partner Logo 4" width={140} height={50} className="opacity-60" />
            <Image src="/partners/placeholder.svg" alt="Partner Logo 5" width={140} height={50} className="opacity-60" />
          </div>
        </div>
      </section>

      {/* SECTION 4: Final Call to Action */}
      <section className="w-full bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <h2 className="text-4xl font-bold">Prêt à faire des économies ?</h2>
          <p className="mt-4 text-lg opacity-90">Lancez votre comparaison maintenant. C'est gratuit et sans engagement.</p>
          <div className="mt-8">
            <Link href="/devis" className="rounded-md bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition hover:bg-slate-100">
              Obtenir mon devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}