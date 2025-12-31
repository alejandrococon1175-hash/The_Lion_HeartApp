"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnamnesisForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '', edad: '', peso: '', estatura: '',
    lesiones: '', objetivo: 'Ganancia Muscular', estiloVida: 'Activo'
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
        
        {/* Barra de Progreso Dorada */}
        <div className="mb-8 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full bg-gradient-to-r from-amber-600 to-amber-300"
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-black italic uppercase mb-6 text-amber-500">1. Identidad</h2>
              <input 
                type="text" placeholder="Nombre completo" 
                className="w-full bg-neutral-800 border-b border-neutral-700 p-3 mb-4 outline-none focus:border-amber-500 transition-all"
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Edad" className="bg-neutral-800 border-b border-neutral-700 p-3 outline-none focus:border-amber-500" onChange={(e) => setFormData({...formData, edad: e.target.value})}/>
                <input type="number" placeholder="Peso (kg)" className="bg-neutral-800 border-b border-neutral-700 p-3 outline-none focus:border-amber-500" onChange={(e) => setFormData({...formData, peso: e.target.value})}/>
              </div>
              <button onClick={nextStep} className="w-full mt-8 bg-amber-500 text-black font-black p-4 rounded-full uppercase tracking-widest hover:bg-white transition-all">Siguiente</button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-black italic uppercase mb-6 text-amber-500">2. Salud y Meta</h2>
              <textarea 
                placeholder="¿Lesiones o enfermedades?" 
                className="w-full bg-neutral-800 border-b border-neutral-700 p-3 mb-4 outline-none focus:border-amber-500 h-24"
                onChange={(e) => setFormData({...formData, lesiones: e.target.value})}
              />
              <select className="w-full bg-neutral-800 border-b border-neutral-700 p-3 outline-none focus:border-amber-500 text-neutral-400" onChange={(e) => setFormData({...formData, objetivo: e.target.value})}>
                <option>Ganancia Muscular</option>
                <option>Pérdida de Grasa</option>
                <option>Rendimiento Atleta</option>
              </select>
              <div className="flex gap-4 mt-8">
                <button onClick={prevStep} className="flex-1 border border-neutral-700 text-white font-bold p-4 rounded-full uppercase text-xs">Atrás</button>
                <button onClick={nextStep} className="flex-1 bg-amber-500 text-black font-black p-4 rounded-full uppercase text-xs tracking-widest">Siguiente</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-amber-500">¡Listo para Rugir!</h2>
              <p className="text-neutral-400 mb-8 text-sm uppercase tracking-widest">Tu perfil biológico está listo para ser procesado.</p>
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-400 text-black font-black p-5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                FORJAR MI DESTINO
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
