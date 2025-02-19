import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.section {...fadeIn}>
          <h2 className="text-3xl font-bold mb-6">{t('privacy.title')}</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              <p className="text-lg">{t('privacy.intro')}</p>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t('privacy.data_collected.title')}</h3>
                <p>{t('privacy.data_collected.content')}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t('privacy.data_sharing.title')}</h3>
                <p>{t('privacy.data_sharing.content')}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t('privacy.consent.title')}</h3>
                <p>{t('privacy.consent.content')}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{t('privacy.transparency.title')}</h3>
                <p>{t('privacy.transparency.content')}</p>
              </div>

              <p>{t('privacy.contact.content')}</p>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
