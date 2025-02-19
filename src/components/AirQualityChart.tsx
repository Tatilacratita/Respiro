import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const AQICN_TOKEN = '9ca5ec86e10df6fe740e29811f4530ec9de31781';

interface AirQualityData {
  timestamp: number;
  aqi: number;
  pm25: number;
  pm10: number;
}

export default function AirQualityChart() {
  const { t } = useTranslation();
  const [data, setData] = useState<AirQualityData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using Bucharest as default location
        const response = await fetch(
          `https://api.waqi.info/feed/bucharest/?token=${AQICN_TOKEN}`
        );
        const result = await response.json();

        if (result.status === 'ok') {
          const newDataPoint = {
            timestamp: Date.now(),
            aqi: result.data.aqi,
            pm25: result.data.iaqi.pm25?.v || 0,
            pm10: result.data.iaqi.pm10?.v || 0,
          };

          setData(prevData => {
            const newData = [...prevData, newDataPoint];
            // Keep only last 24 data points
            return newData.slice(-24);
          });
          setError(null);
        } else {
          setError(t('air_quality.error.api'));
        }
      } catch (err) {
        setError(t('air_quality.error.network'));
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval for real-time updates
    const interval = setInterval(fetchData, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, [t]);

  if (error) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-4">{t('air_quality.chart.title')}</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="aqi"
                stroke="#8884d8"
                name={t('air_quality.chart.aqi')}
              />
              <Line
                type="monotone"
                dataKey="pm25"
                stroke="#82ca9d"
                name={t('air_quality.chart.pm25')}
              />
              <Line
                type="monotone"
                dataKey="pm10"
                stroke="#ffc658"
                name={t('air_quality.chart.pm10')}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
