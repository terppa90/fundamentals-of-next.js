'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'Editor', href: '/editor' },
    { name: 'Weather', href: '/weather' },
  ];

  return (
    <nav className="flex justify-center gap-8 p-6 bg-white border-b border-gray-100 mb-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-1 text-sm font-medium transition-colors duration-200
              ${isActive 
                ? 'text-blue-600' 
                : 'text-gray-500 hover:text-blue-600'
              }`}
          >
            {link.name}
            
            {isActive && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}