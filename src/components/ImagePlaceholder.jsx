export default function ImagePlaceholder({ label, aspectRatio = "16/9", className = "" }) {
  return (
    <div
      className={`bg-gray-200 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-500 text-sm p-3 text-center ${className}`}
      style={{ aspectRatio }}
    >
      📷 {label}
    </div>
  )
}
