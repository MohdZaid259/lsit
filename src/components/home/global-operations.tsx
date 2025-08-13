"use client";

import { Clock, Globe, MapPin, Sparkles, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";

import Section from "@/components/common/section";
import dynamic from "next/dynamic";
import { useRef } from "react";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function GlobalOperations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const countries = [
    // Middle East
    { name: "UAE", lat: 24.2992, lng: 54.6972, color: "#f59e0b" },
    { name: "Qatar", lat: 25.3548, lng: 51.1839, color: "#f59e0b" },
    { name: "Iraq", lat: 33.2232, lng: 43.6793, color: "#f59e0b" },
    { name: "Syria", lat: 34.8021, lng: 38.9968, color: "#f59e0b" },
    { name: "Oman", lat: 21.4735, lng: 55.9754, color: "#f59e0b" },
    { name: "Kuwait", lat: 29.3117, lng: 47.4818, color: "#f59e0b" },
    { name: "Egypt", lat: 26.8206, lng: 30.8025, color: "#f59e0b" },
    { name: "Bahrain", lat: 25.9304, lng: 50.6378, color: "#f59e0b" },
    { name: "Turkey", lat: 38.9637, lng: 35.2433, color: "#f59e0b" },
    // International
    { name: "Germany", lat: 51.1657, lng: 10.4515, color: "#3b82f6" },
    { name: "Canada", lat: 56.1304, lng: -106.3468, color: "#3b82f6" },
    { name: "USA", lat: 37.0902, lng: -95.7129, color: "#3b82f6" },
    { name: "Saudi" + String.fromCharCode(0x2007) + "Arabia", lat: 23.8859, lng: 45.0792, color: "#f59e0b" },
  ];

  // Create arcs between key locations to show connections
  const globeData = [
    // Middle East connections
    {
      order: 1,
      startLat: 24.2992,
      startLng: 54.6972,
      endLat: 25.3548,
      endLng: 51.1839,
      arcAlt: 0.1,
      color: "#f59e0b",
    },
    {
      order: 2,
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 29.3117,
      endLng: 47.4818,
      arcAlt: 0.15,
      color: "#f59e0b",
    },
    {
      order: 3,
      startLat: 26.8206,
      startLng: 30.8025,
      endLat: 38.9637,
      endLng: 35.2433,
      arcAlt: 0.2,
      color: "#f59e0b",
    },
    // International connections
    {
      order: 4,
      startLat: 51.1657,
      startLng: 10.4515,
      endLat: 37.0902,
      endLng: -95.7129,
      arcAlt: 0.3,
      color: "#3b82f6",
    },
    {
      order: 5,
      startLat: 56.1304,
      startLng: -106.3468,
      endLat: 37.0902,
      endLng: -95.7129,
      arcAlt: 0.2,
      color: "#3b82f6",
    },
    // Cross-regional connections
    {
      order: 6,
      startLat: 24.2992,
      startLng: 54.6972,
      endLat: 51.1657,
      endLng: 10.4515,
      arcAlt: 0.4,
      color: "#06b6d4",
    },
    {
      order: 7,
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 37.0902,
      endLng: -95.7129,
      arcAlt: 0.5,
      color: "#06b6d4",
    },
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#FFFFFF",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#FFFFFF",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#000000",
    ambientLight: "#FFFFFF",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.8,
  };

  const stats = [
    {
      icon: MapPin,
      label: "Countries",
      value: "13+",
      description: "Active operations",
      color: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: Globe,
      label: "Continents",
      value: "3+",
      description: "Global presence",
      color: "from-blue-500 to-indigo-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      label: "Clients",
      value: "1000+",
      description: "Worldwide",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Clock,
      label: "Support",
      value: "24/7",
      description: "Around the clock",
      color: "from-purple-500 to-violet-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <Section
      id="global-operations"
      eyebrow="Global Presence"
      title="Operations across multiple continents"
      subtitle="That's enough for time being, we can add our operations in strategic locations worldwide to serve our clients better."
      className="relative overflow-hidden md:mx-16 mx-2"
    >
      <div
        ref={sectionRef}
        className="relative grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side - 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative max-w-lg mx-auto">
            {/* 3D Globe */}
            <div className="relative z-10 h-96">
              <World globeConfig={globeConfig} data={globeData} />
            </div>
          </div>

          {/* Countries List */}
          <div className="space-y-4 -mt-0 md:-mt-10 z-99">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-slate-900">
                Our Global Locations
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-1 ">
              {countries.map((country, index) => (
                <motion.span
                  key={country.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                  className="text-sm  text-muted-foreground"
                >
                  {country.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group relative md:p-4 p-3 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-xl ${stat.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className={`md:w-5 md:h-5 w-4 h-4 ${stat.iconColor}`} />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regional Summary */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="group flex items-center gap-4 md:p-4 p-3 rounded-2xl border bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg group-hover:scale-125 transition-transform duration-300" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Middle East Hub
                </div>
                <div className="text-sm text-slate-600">
                  10 countries across Gulf & Levant region
                </div>
              </div>
              <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                🏛️
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="group flex items-center gap-4 md:p-5 p-3 rounded-2xl border bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg group-hover:scale-125 transition-transform duration-300" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  Global Markets
                </div>
                <div className="text-sm text-slate-600">
                  3 countries in key international markets
                </div>
              </div>
              <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                🌍
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
