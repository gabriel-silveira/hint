import {
  EnvelopeSimple,
  Phone,
  MapPin,
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <EnvelopeSimple size={18} />
                <a href="mailto:contato@hint.com.br" className="hover:text-foreground transition-colors">
                  contato@hint.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+5511995566515" className="hover:text-foreground transition-colors">
                  (11) 99556-6515
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsappLogo size={18} />
                <a
                  href="https://wa.me/5511995566515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Endereço</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <p>
                Avenida Onze de Junho, 694<br />
                Vila Clementino<br />
                São Paulo - SP, 04041-002
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/hint.language?igsh=MTY1Yjlsd2JxZXJreA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} />
              </a>
              <a
                href="https://www.facebook.com/share/1GVHrR5xqR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@hint.language?_r=1&_t=ZS-94gyOzgvEVU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <TiktokLogo size={24} />
              </a>
              <a
                href="https://youtube.com/@hint.language?si=yyDDCfzbuAib1fcl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <YoutubeLogo size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HINT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
