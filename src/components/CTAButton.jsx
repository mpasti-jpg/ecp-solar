export default function CTAButton({ children, variant = "primary", onClick, className = "" }) {
  const base = "px-5 py-2.5 text-sm font-semibold rounded transition-colors cursor-pointer"
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-2 border-gray-800 text-gray-900 hover:bg-gray-100",
  }
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  )
}
