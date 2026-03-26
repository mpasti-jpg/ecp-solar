import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { to: '/co-robimy/farmy-pv', label: 'Farmy fotowoltaiczne' },
  { to: '/co-robimy/magazyny-energii', label: 'Magazyny energii BESS' },
  { to: '/co-robimy/farmy-wiatrowe', label: 'Farmy wiatrowe' },
]

export default function CoRobiamyNav() {
  const { pathname } = useLocation()
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-0 overflow-x-auto">
          {TABS.map(({ to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  active
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
