import {
  EnvelopeSimple,
  Phone,
  MapPin,
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
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
                <a href="tel:+5511999999999" className="hover:text-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsappLogo size={18} />
                <a
                  href="https://wa.me/5511999999999"
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
                Rua Exemplo, 123<br />
                Bairro Centro<br />
                São Paulo - SP, 01000-000
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} />
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
