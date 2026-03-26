import { Link } from 'react-router-dom'
import CoRobiamyNav from '../components/CoRobiamyNav'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Annotation from '../components/Annotation'

export default function FarmyWiatrowe() {
  return (
    <div>
      <CoRobiamyNav />

      {/* breadcrumbs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5">
        <div className="max-w-7xl mx-auto text-xs text-gray-500 flex items-center gap-1.5">
          <Link to="/" className="hover:text-gray-800">Strona główna</Link>
          <span>›</span>
          <span>Co robimy</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Farmy wiatrowe</span>
        </div>
      </div>

      {/* hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Model EPC</span>
            <h1 className="text-3xl font-bold leading-snug mb-4">
              Farmy wiatrowe — kompleksowa realizacja EPC
            </h1>
            <p className="text-gray-300 text-base mb-6">
              Realizujemy projekty farm wiatrowych na lądzie — od analizy wietrzności
              i projektowania, przez budowę, po serwis turbozespołów.
            </p>
            <Annotation>[W przygotowaniu — treść do uzupełnienia przez klienta]</Annotation>
            <Link
              to="/kontakt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors inline-block mt-4"
            >
              Zapytaj o ofertę
            </Link>
          </div>
          <ImagePlaceholder label="Turbiny wiatrowe — farma wiatrowa na lądzie" aspectRatio="4/3" className="opacity-80" />
        </div>
      </section>

      {/* placeholder */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">🌀</div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Szczegółowe informacje wkrótce</h2>
        <p className="text-sm text-gray-500 mb-8">
          Przygotowujemy szczegółowy opis oferty farm wiatrowych — zakres projektowania,
          wybór lokalizacji, realizacja i serwis turbozespołów.
        </p>
        <Annotation>
          Docelowa struktura analogiczna do strony Farmy PV: typy turbin, proces EPC, zakres techniczny, FAQ, realizacje.
        </Annotation>
        <Link
          to="/kontakt"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded transition-colors inline-block"
        >
          Skontaktuj się z nami
        </Link>
      </section>
    </div>
  )
}
