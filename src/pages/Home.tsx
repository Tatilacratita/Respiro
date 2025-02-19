import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Cloud, AlertTriangle } from "lucide-react";
import AirQualityChart from "@/components/AirQualityChart";

export default function Home() {
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
        <motion.section 
          id="about"
          className="space-y-12"
          {...fadeIn}
        >
          {/* Intro Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed">{t('about.intro')}</p>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{t('about.features.title')}</h3>
                      <ul className="space-y-3">
                        {t('about.features.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <Wind className="h-6 w-6 text-primary mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/about.jpg" 
                      alt="About Air Quality" 
                      className="rounded-lg w-full h-auto shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Air Quality Section */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{t('about.air_quality.title')}</h3>
                    <p className="text-lg mb-6">{t('about.air_quality.description')}</p>
                    <div className="grid grid-cols-1 gap-4">
                      {t('about.air_quality.levels', { returnObjects: true }).map((level: string, index: number) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                          <Cloud className={`h-6 w-6 ${index < 2 ? 'text-green-500' : index < 4 ? 'text-yellow-500' : 'text-red-500'}`} />
                          <span>{level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="/importance.jpg" 
                      alt="Air Quality Importance" 
                      className="rounded-lg shadow-lg max-h-[400px] object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Air Quality Chart */}
            <div className="mt-8">
              <AirQualityChart />
            </div>
          </div>

          {/* Pollutants Section */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="/pollutants.jpg" 
                      alt="Air Pollutants" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{t('about.pollutants.title')}</h3>
                    <div className="space-y-4">
                      {t('about.pollutants.items', { returnObjects: true }).map((item: any, index: number) => (
                        <div key={index} className="p-4 bg-muted rounded-lg space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                            {item.title}
                          </h4>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Section */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{t('about.download.title')}</h3>
                    <p className="text-lg mb-6">{t('about.download.subtitle')}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="space-y-4">
                        <Button variant="outline" asChild className="w-full">
                          <a href="https://play.google.com/apps/internaltest/4701375823788403496" target="_blank" rel="noopener noreferrer">
                            <img src="/google.jpg" alt="Google Play" className="h-4 w-4 mr-2" />
                            {t('about.download.buttons.internal')}
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="w-full">
                          <a href="https://play.google.com/store/apps/details?id=com.tatilacratita.respiro" target="_blank" rel="noopener noreferrer">
                            <img src="/google.jpg" alt="Google Play" className="h-4 w-4 mr-2" />
                            {t('about.download.buttons.closed_android')}
                          </a>
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <Button variant="outline" asChild className="w-full">
                          <a href="https://play.google.com/apps/testing/com.tatilacratita.respiro" target="_blank" rel="noopener noreferrer">
                            <img src="/google.jpg" alt="Google Play" className="h-4 w-4 mr-2" />
                            {t('about.download.buttons.closed_web')}
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="w-full">
                          <a href="/Respiro_1.8_release.apk" download>
                            <img src="/download.png" alt="Download" className="h-4 w-4 mr-2" />
                            {t('about.download.buttons.apk')}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="/app.jpg" 
                      alt="Respiro App" 
                      className="rounded-lg shadow-lg max-h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-lg">{t('about.download.instructions.tester')}</p>
                  <div>
                    <p className="text-lg mb-2">{t('about.download.instructions.apk_notice')}</p>
                    <ol className="list-decimal list-inside space-y-2">
                      {t('about.download.instructions.steps', { returnObjects: true }).map((step: string, index: number) => (
                        <li key={index} className="text-lg">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* AQICN Widget */}
                <div className="mt-8 relative w-full h-[450px]">
                  <iframe 
                    src="https://aqicn.org/here/widget/?token=9ca5ec86e10df6fe740e29811f4530ec9de31781" 
                    className="w-full h-full border-0 rounded-lg shadow-lg"
                    title="AQICN Widget"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}