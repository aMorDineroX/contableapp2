'use client';

import { useState, useEffect } from 'react';
import { Card, Title, Text, Grid, Metric, Flex, BarChart, LineChart, DonutChart, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import {
  ArrowTrendingUpIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CalendarIcon,
  UsersIcon,
  BanknotesIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from 'framer-motion';
import { Notification } from '@/components/ui/Notification';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PageTransition from '@/components/ui/PageTransition';

// Données de démonstration pour les graphiques
const chartData = [
  { month: 'Jan', revenus: 4500000, depenses: 3200000 },
  { month: 'Fév', revenus: 5200000, depenses: 3800000 },
  { month: 'Mar', revenus: 4800000, depenses: 3500000 },
  // ...plus de données
];

const repartitionData = [
  { name: 'Ventes', value: 45 },
  { name: 'Services', value: 30 },
  { name: 'Consulting', value: 25 },
];

const stats = [
  {
    title: "Chiffre d'affaires",
    metric: "12 500 000 FCFA",
    icon: ArrowTrendingUpIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    trend: "+12.3%",
    trendColor: "text-green-600"
  },
  {
    title: "Écritures comptables",
    metric: "156",
    icon: DocumentDuplicateIcon,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    trend: "Ce mois",
    trendColor: "text-gray-600"
  },
  {
    title: "Résultat net",
    metric: "3 250 000 FCFA",
    icon: CurrencyDollarIcon,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-100",
    trend: "+8.2%",
    trendColor: "text-green-600"
  },
  {
    title: "Trésorerie",
    metric: "5 780 000 FCFA",
    icon: ChartBarIcon,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
    trend: "Disponible",
    trendColor: "text-gray-600"
  }
];

const tabItems = [
  {
    value: "apercu",
    label: "Aperçu",
    icon: HomeIcon,
  },
  {
    value: "financier",
    label: "Financier",
    icon: CurrencyDollarIcon,
  },
  {
    value: "activite",
    label: "Activité",
    icon: ChartBarIcon,
  }
];

export default function DashboardPage() {
  // État et authentification
  const [selectedView, setSelectedView] = useState("apercu");
  const [notifications, setNotifications] = useState<any[]>([]);
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Vérification de l'authentification
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Affichage pendant le chargement
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Fonction pour ajouter une notification
  const addNotification = (notification: any) => {
    setNotifications(prev => [...prev, notification]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  return (
    <PageTransition>
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenue{user?.name ? `, ${user.name}` : ''}
          </h1>
          <p className="mt-1 text-gray-600">
            Voici un aperçu de votre activité comptable
          </p>
        </motion.div>

        {/* Notifications avec animations */}
        <AnimatePresence>
          {notifications.map((notif) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="fixed top-4 right-4 z-50"
            >
              <Notification
                {...notif}
                onClose={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TabGroup defaultValue="apercu" onValueChange={setSelectedView}>
            <div className="flex justify-between items-center mb-6">
              <Title className="text-2xl font-bold text-gray-900">Vue d'ensemble</Title>
              <TabList className="bg-white shadow-lg rounded-xl p-1.5 border border-gray-200">
                <div className="flex space-x-1">
                  {tabItems.map((item) => (
                    <Tab
                      key={item.value}
                      value={item.value}
                      className="group"
                    >
                      <div className={`
                        flex items-center px-4 py-2.5 rounded-lg gap-2 
                        transition-all duration-200 ease-in-out
                        hover:bg-gray-50
                        data-[state=active]:bg-blue-50 
                        data-[state=active]:text-blue-700
                        text-gray-600 
                        hover:text-gray-900
                        font-medium
                        text-sm
                      `}>
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </div>
                    </Tab>
                  ))}
                </div>
              </TabList>
            </div>

            <TabPanels>
              <TabPanel value="apercu">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* Cartes statistiques */}
                  <Grid numItemsSm={2} numItemsLg={4} className="gap-6">
                    {stats.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card 
                          decoration="left" 
                          decorationColor={item.iconColor.split('-')[0]}
                        >
                          <Flex justifyContent="start" className="space-x-4">
                            <div className={`${item.bgColor} ${item.iconColor} p-2 rounded-lg`}>
                              <item.icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-1">
                              <Text className="text-sm font-medium text-gray-600">{item.title}</Text>
                              <Metric className="text-xl font-semibold text-gray-900">{item.metric}</Metric>
                              <Text className={`text-sm ${item.trendColor}`}>
                                {item.trend}
                              </Text>
                            </div>
                          </Flex>
                        </Card>
                      </motion.div>
                    ))}
                  </Grid>

                  {/* Graphiques et activités */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-6 space-y-6"
                  >
                    <Card>
                      <Title>Évolution Revenus/Dépenses</Title>
                      <LineChart
                        data={chartData}
                        index="month"
                        categories={["revenus", "depenses"]}
                        colors={["emerald", "red"]}
                        valueFormatter={(number) => 
                          new Intl.NumberFormat('fr-FR', {
                            style: 'currency',
                            currency: 'XOF',
                            maximumFractionDigits: 0
                          }).format(number)
                        }
                        yAxisWidth={100}
                      />
                    </Card>

                    <Grid numItemsMd={2} className="gap-6">
                      <Card>
                        <Title>Répartition du Chiffre d'Affaires</Title>
                        <DonutChart
                          data={repartitionData}
                          category="value"
                          index="name"
                          valueFormatter={(value) => `${value}%`}
                          colors={["blue", "cyan", "indigo"]}
                        />
                      </Card>
                      
                      <Card>
                        <Title>Activités Récentes</Title>
                        <div className="mt-4 space-y-4">
                          {/* Liste des activités récentes */}
                          {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                              <CalendarIcon className="h-8 w-8 text-gray-400" />
                              <div>
                                <Text className="font-medium">Nouvelle écriture comptable</Text>
                                <Text className="text-gray-500">Il y a {index + 1} heure(s)</Text>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </Grid>
                  </motion.div>
                </motion.div>
              </TabPanel>

              <TabPanel value="financier">
                <motion.div variants={fadeInUp}>
                  <Card>
                    <Title>Analyse Financière</Title>
                    <div className="mt-4">
                      <LineChart
                        data={chartData}
                        index="month"
                        categories={["revenus", "depenses"]}
                        colors={["emerald", "red"]}
                        valueFormatter={(number) => 
                          new Intl.NumberFormat('fr-FR', {
                            style: 'currency',
                            currency: 'XOF',
                            maximumFractionDigits: 0
                          }).format(number)
                        }
                        yAxisWidth={100}
                      />
                    </div>
                  </Card>
                </motion.div>
              </TabPanel>

              <TabPanel value="activite">
                <motion.div variants={fadeInUp}>
                  <Card>
                    <Title>Journal d'Activité</Title>
                    <div className="mt-4 space-y-4">
                      {[1, 2, 3, 4, 5].map((_, index) => (
                        <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                          <CalendarIcon className="h-8 w-8 text-gray-400" />
                          <div>
                            <Text className="font-medium">Activité {index + 1}</Text>
                            <Text className="text-gray-500">Il y a {index + 1} heure(s)</Text>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </TabPanel>
            </TabPanels>
          </TabGroup>

          {/* Actions rapides avec tooltips */}
          <div className="fixed bottom-8 right-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg group relative"
                onClick={() => addNotification({
                  id: Date.now(),
                  title: 'Nouvelle opération',
                  message: 'Cliquez pour ajouter une nouvelle écriture comptable',
                  type: 'info'
                })}
              >
                <BanknotesIcon className="h-6 w-6" />
                <span className="absolute right-full mr-2 py-1 px-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Nouvelle opération
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-lg group relative"
                onClick={() => addNotification({
                  id: Date.now(),
                  title: 'Gestion des utilisateurs',
                  message: 'Accédez à la gestion des utilisateurs',
                  type: 'info'
                })}
              >
                <UsersIcon className="h-6 w-6" />
                <span className="absolute right-full mr-2 py-1 px-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Gestion utilisateurs
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
