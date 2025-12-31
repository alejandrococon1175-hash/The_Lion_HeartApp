"use client";
import React from 'react';
import { Dumbbell, Activity, Target, Flame, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24">
      {/* Glow de fondo decorativo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <main className="relative z-10 max-w-lg mx-auto px-6 pt-12">
        {/* Header de Marca */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Elite Member</p>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter italic">The Lion's Heart</h1>
          </div>
          <div className="w-12 h-12 rounded-full border border-amber-500/30 p-1 bg-neutral-900 flex items-center justify-center">
            <span className="text-amber-500 font-bold text-xs">LH</span>
          </div>
        </header>

        {/* Card de Acción Principal (Entrenamiento) */}
        <motion.section 
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-8 mb-8 shadow-2xl group cursor-pointer"
        >
          <div className="absolute -right-4 -top-4 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
            <Dumbbell size={140} />
          </div>
          
          <div className="relative z-10">
            <span className="inline-block bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Sesión de Hoy
            </span>
            <h2 className="text-3xl font-black mb-2 uppercase italic tracking-tight">Push Day: Power</h2>
            <p className="text-neutral-400 text-sm mb-6 max-w-[200px]">Enfoque en pectoral mayor y deltoides lateral.</p>
            
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-amber-500 transition-colors">
              Iniciar <ChevronRight size={14} />
            </button>
          </div>
        </motion.section>

        {/* Grid de Métricas Bio-Métricas */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricCard 
            icon={<Activity size={18} className="text-amber-500" />} 
            label="Peso Actual" 
            value="84.2" 
            unit="kg" 
          />
          <MetricCard 
            icon={<Flame size={18} className="text-amber-500" />} 
            label="Racha" 
            value="14" 
            unit="días" 
          />
        </div>

        {/* Sección de Próximos Pasos */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-amber-500" size={20} />
            <h4 className="font-bold text-sm uppercase tracking-widest">Objetivo Activo</h4>
          </div>
          <p className="text-neutral-300 text-sm italic font-medium">
            "Ganancia muscular limpia y mejora de RM en Press de Banca."
          </p>
        </div>
      </main>

      {/* Navegación Inferior (PWA Style) */}
      <nav className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-xl border-t border-neutral-900 px-8 py-4 flex justify-between items-center z-50">
        <NavItem icon={<Target size={22} />} active />
        <NavItem icon={<Dumbbell size={22} />} />
        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center -mt-12 border-4 border-[#050505] shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          <Activity size={24} className="text-black" />
        </div>
        <NavItem icon={<Activity size={22} />} />
        <NavItem icon={<Target size={22} />} />
      </nav>
    </div>
  );
}

function MetricCard({ icon, label, value, unit }: any) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-3xl">
      <div className="mb-3">{icon}</div>
      <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black text-white">{value}</span>
        <span className="text-amber-500 text-[10px] font-bold uppercase">{unit}</span>
      </div>
    </div>
  );
}

function NavItem({ icon, active = false }: any) {
  return (
    <button className={`${active ? 'text-amber-500' : 'text-neutral-600'} transition-colors`}>
      {icon}
    </button>
  );
}
