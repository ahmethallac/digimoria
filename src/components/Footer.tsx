import { Link } from "react-router-dom";
import logo from "@/assets/digimoria_yatay_logo.png";

const Footer = () =>
<footer className="border-t border-border bg-secondary/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img alt="DigiMoria" className="h-8 mb-4" src="/lovable-uploads/3361181a-0650-4b8f-8632-ce25b7a26e56.png" />
          <p className="text-sm text-muted-foreground max-w-md">
            AI-powered customer acquisition infrastructure. We build automated systems that generate and schedule qualified sales meetings for your business.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-display">Navigation</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-display">Services</h4>
          <div className="space-y-2">
            <span className="block text-sm text-muted-foreground">AI Automation</span>
            <span className="block text-sm text-muted-foreground">Digital Performance</span>
            <span className="block text-sm text-muted-foreground">AI Agents</span>
            <span className="block text-sm text-muted-foreground">Web Development</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DigiMoria. All rights reserved.
      </div>
    </div>
  </footer>;


export default Footer;