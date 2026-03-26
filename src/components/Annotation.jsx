export default function Annotation({ children }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded px-3 py-2 text-xs text-amber-800 italic my-3">
      💡 {children}
    </div>
  )
}
