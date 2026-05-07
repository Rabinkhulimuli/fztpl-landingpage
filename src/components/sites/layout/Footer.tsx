
export default function Footer(){
  return (
    <footer className="bg-background border-t border-border py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-6">FZTPL</div>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              Empowering global businesses with premium software outsourcing and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                𝕏
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                in
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                fb
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Services</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Project Showcase</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Process</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cookies</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© 2024 FZTPL. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>English</span>
            <span>Based in London & New York</span>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky CTA placeholder logic in Layout */}
    </footer>
  )}