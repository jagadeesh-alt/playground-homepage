export default function Input({ type, placeholder, className }: any) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    );
  }
  