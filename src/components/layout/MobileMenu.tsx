import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="right" id="mobile-menu">
        <SheetHeader>
          <SheetTitle>
            <span className="text-secondary">CPN</span> Estudio
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-8" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 px-4">
            <Button asChild className="w-full">
              <a href="https://wa.me/541112345678?text=Hola%2C%20quiero%20agendar%20una%20consulta%20contable" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                Agendar Consulta
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
