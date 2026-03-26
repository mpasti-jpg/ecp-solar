import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Co robimy',
    dropdown: [
      { label: 'Farmy fotowoltaiczne', to: '/co-robimy/farmy-pv' },
      { label: 'Magazyny energii (BESS)', to: '/co-robimy/magazyny-energii' },
      { label: 'Farmy wiatrowe', to: '/co-robimy/farmy-wiatrowe' },
    ],
  },
  { label: 'O nas', to: '/firma' },
  { label: 'Realizacje', to: '/realizacje' },
  { label: 'Aktualności', to: '/aktualnosci' },
  { label: 'Kariera', to: '/kariera' },
  { label: 'Kontakt', to: '/kontakt' },
]

function DropdownMenu({ items, open }) {
  if (!open) return null
  return (
    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg z-50">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-0"
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

function AIModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md relative"
        onClick={e => e.stopPropagation()}
      >
        {/* zamknij X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 text-sm transition-colors"
        >
          ✕
        </button>

        {/* nagłówek */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="text-2xl mb-2">🤖</div>
          <h2 className="text-xl font-bold text-gray-900">Zapytaj AI o usługi EPC Solar</h2>
        </div>

        {/* treść */}
        <div className="px-6 py-5 space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-medium text-gray-800 mb-1">Chatbot AI w przygotowaniu</p>
            <p>W przyszłości tutaj pojawi się integracja z Chatbase — możliwość zadawania pytań o usługi, realizacje i proces EPC Solar.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800 italic">
            💡 [Placeholder — do podłączenia z Chatbase lub innym narzędziem AI]
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Skontaktuj się z nami bezpośrednio:</p>
            <a
              href="tel:+48725451607"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
            >
              📞 +48 725 451 607
            </a>
            <a
              href="mailto:biuro@epcsolar.eu"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
            >
              ✉ biuro@epcsolar.eu
            </a>
          </div>
        </div>

        {/* footer modalu */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 text-sm font-semibold rounded-lg transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label))

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <span>📞 +48 725 451 607</span>
            <span>✉️ biuro@epcsolar.eu</span>
          </div>
          <button
            onClick={() => setIsAIChatOpen(true)}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
          >
            🤖 Zapytaj AI
          </button>
        </div>
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-lg text-gray-900 tracking-tight">
            [EPC Solar]
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1"
                  >
                    {item.label}
                    <span className="text-xs text-gray-400">▾</span>
                  </button>
                  <DropdownMenu
                    items={item.dropdown}
                    open={openDropdown === item.label}
                  />
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-1 cursor-not-allowed">
              PL | EN
            </span>
            <Link
              to="/kontakt"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700"
            >
              Wyślij zapytanie
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
            <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
            <span className="block w-5 h-0.5 bg-gray-700" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide pt-2 pb-1">
                    {item.label}
                  </div>
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      className="block pl-3 py-1.5 text-sm text-gray-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="block py-1.5 text-sm text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/kontakt"
              className="mt-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded text-center"
              onClick={() => setMobileOpen(false)}
            >
              Wyślij zapytanie
            </Link>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="flex-1" onClick={() => setOpenDropdown(null)}>
        <Outlet />
      </main>

      {/* Floating AI button */}
      <button
        onClick={() => setIsAIChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all hover:scale-110"
        title="Zapytaj AI"
        aria-label="Zapytaj AI"
      >
        🤖
      </button>

      {/* AI Modal */}
      {isAIChatOpen && <AIModal onClose={() => setIsAIChatOpen(false)} />}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1 — Firma */}
          <div>
            <div className="font-bold text-white text-base mb-3">[EPC Solar]</div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Kompleksowa realizacja projektów OZE — farmy fotowoltaiczne, magazyny energii, farmy wiatrowe.
            </p>
          </div>

          {/* Col 2 — Nawigacja */}
          <div>
            <div className="font-semibold text-white text-sm mb-3">Nawigacja</div>
            <ul className="space-y-1.5 text-xs">
              {[
                { label: 'Farmy PV', to: '/co-robimy/farmy-pv' },
                { label: 'Magazyny energii', to: '/co-robimy/magazyny-energii' },
                { label: 'Farmy wiatrowe', to: '/co-robimy/farmy-wiatrowe' },
                { label: 'O nas', to: '/firma' },
                { label: 'Realizacje', to: '/realizacje' },
                { label: 'Aktualności', to: '/aktualnosci' },
                { label: 'Kariera', to: '/kariera' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kontakt */}
          <div>
            <div className="font-semibold text-white text-sm mb-3">Kontakt</div>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>📞 +48 725 451 607</li>
              <li>✉️ biuro@epcsolar.eu</li>
              <li className="pt-2">
                <button
                  onClick={() => setIsAIChatOpen(true)}
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300"
                >
                  🤖 Zapytaj AI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 — Grupa Rexbud */}
          <div>
            <div className="font-semibold text-white text-sm mb-3">Grupa Rexbud</div>
            <p className="text-xs text-gray-400 leading-relaxed">
              EPC Solar jest częścią Grupy Rexbud — lidera na rynku inwestycji budowlanych i energetycznych.
            </p>
            <div className="mt-3 bg-gray-800 border border-gray-700 rounded p-2 text-xs text-gray-500 text-center">
              [Logo Rexbud]
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
          © {new Date().getFullYear()} EPC Solar. Wszelkie prawa zastrzeżone. — <span className="italic">Wireframe lo-fi</span>
        </div>
      </footer>
    </div>
  )
}
