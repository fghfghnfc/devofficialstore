import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
      {/* Left side brand/logo */}
      <div className="text-green-500 font-bold text-xl flex items-center">
        MLBB Recharge <span className="ml-1">💎</span>
      </div>

      {/* Right side links */}
      <div className="flex space-x-6">
        <Link href="/login" className="hover:text-blue-400 transition">
          Login
        </Link>
        <Link href="/signup" className="hover:text-blue-400 transition">
          Signup
        </Link>
        <Link href="/buy" className="hover:text-blue-400 transition">
          Buy
        </Link>
        <Link href="/wallet" className="hover:text-blue-400 transition">
          Wallet
        </Link>
        <Link href="/history" className="hover:text-blue-400 transition">
          History
        </Link>
        <Link href="/profile" className="hover:text-blue-400 transition">
          Profile
        </Link>
      </div>
    </nav>
  );
}
