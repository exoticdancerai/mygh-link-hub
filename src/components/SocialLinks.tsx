import { Twitter, Facebook, Instagram, Youtube, Send, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Twitter, url: "https://x.com/USAnthem250", label: "Twitter" },
  { icon: Facebook, url: "https://facebook.com/NationalAnthem250", label: "Facebook" },
  { icon: Instagram, url: "https://www.instagram.com/NationalAnthem250", label: "Instagram" },
  { icon: Youtube, url: "https://youtube.com/@NationalAnthem250", label: "YouTube" },
  { icon: Send, url: "https://t.me/NationalAnthem250", label: "Telegram" },
  { icon: MessageCircle, url: "https://discord.gg/NTQYbXW5RX", label: "Discord" },
];

export const SocialLinks = () => {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <span className="text-sm font-medium">Follow Us:</span>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
