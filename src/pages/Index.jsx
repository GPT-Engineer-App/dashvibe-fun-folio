import { useState } from 'react';
import { Sun, Moon, Zap, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const dashboardItems = [
    { title: 'Energy', icon: <Zap className="h-8 w-8 text-yellow-500" />, value: '75 kWh' },
    { title: 'Water', icon: <Droplets className="h-8 w-8 text-blue-500" />, value: '120 L' },
    { title: 'Temperature', icon: <Thermometer className="h-8 w-8 text-red-500" />, value: '22°C' },
    { title: 'Air Quality', icon: <Wind className="h-8 w-8 text-green-500" />, value: 'Good' },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Fun Dashboard</h1>
          <Button onClick={toggleTheme} variant="outline" size="icon">
            {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dashboardItems.map((item, index) => (
            <Card key={index} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                {item.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
