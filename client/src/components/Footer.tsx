import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Respiro. {t('footer.rights')} © By Tati La Cratita
          </p>
        </div>
      </div>
    </footer>
  );
}
