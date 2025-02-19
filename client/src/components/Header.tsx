import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import LanguageSwitcher from "./LanguageSwitcher";
import { Wind } from "lucide-react";

export default function Header() {
  const { t } = useTranslation();

  const menuItems = [
    { href: "/#about", label: t('nav.about') },
    { href: "/privacy", label: t('nav.privacy') }
  ];

  return (
    <motion.header 
      className="bg-background border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Wind className="h-6 w-6" />
              <h1 className="text-2xl font-bold">Respiro</h1>
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
}