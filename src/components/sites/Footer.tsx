export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-lg bg-brand-gradient" />
              <span className="font-display font-bold text-lg">FZTPL</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              A senior engineering partner for ambitious teams building web, mobile, and AI products.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#why" className="hover:text-foreground text-muted-foreground transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-foreground text-muted-foreground transition-colors">Work</a></li>
              <li><a href="#cta" className="hover:text-foreground text-muted-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:hello@fztpl.com" className="hover:text-foreground text-muted-foreground transition-colors">hello@fztpl.com</a></li>
              <li className="text-muted-foreground">Remote · Global</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} FZTPL. All rights reserved.</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
