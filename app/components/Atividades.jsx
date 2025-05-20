"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const chapters = [
  {
    title: 'Capítulo 1: Como consumir de maneira sustentável?',
    activities: [
      { title: 'Atividade Exclusiva Digital - Cap. 1', url: 'https://forms.gle/ZihCYCimEgy4Tikz6' },
      { title: 'Atividade 1.1', url: 'https://forms.gle/jWsUJgh3QZYRxBrB7' },
      { title: 'Atividade 1.2', url: 'https://forms.gle/bdbQTUKDTaidMbGm6' },
      { title: 'Atividade 1.3', url: 'https://forms.gle/exHcFPRgi9B4M1A4A' },
      { title: 'Atividade 1.4', url: 'https://forms.gle/wnYe7hRvb8UkfKbV6' },
      { title: 'Exercícios do Capítulo 1', url: 'https://forms.gle/pWeCUwvtzyj1QQRG7' },
    ],
  },

  {
    title: "Capítulo 2: Como não gastar mais do que deveríamos?",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 2", url: "https://forms.gle/ZW2vJPFL4zfPmKwi6" },
      { title: "Atividade 2.1", url: "https://forms.gle/T54d751EX2J1KPbJ6" },
      { title: "Atividade 2.2", url: "https://forms.gle/hmyYSHmXNRnb7LDV8" },
      { title: "Exercícios do Capítulo 2", url: "https://forms.gle/a6vvR67naNCB38bE9" },
    ],
  },
  {
    title: "Capítulo 3: O que você precisa comprar no mercado?",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 3", url: "https://forms.gle/pKaJGptXYzgVTjX8A" },
      { title: "Atividade 3.1", url: "https://forms.gle/Wwt1rbHdrq6CHWKRA" },
      { title: "Atividade 3.2", url: "https://forms.gle/Yj4Ue6CBntTtWHdQA" },
      { title: "Atividade 3.3", url: "https://forms.gle/FwAVRqzqwBCgkQzH8" },
      { title: "Atividade 3.4", url: "https://forms.gle/DoUAxdXiRkuKsmhc9" },
      { title: "Atividade 3.5", url: "https://forms.gle/6VQLYFo7rmxYKcLm9" },
      { title: "Exercícios do Capítulo 3", url: "https://forms.gle/U7jJp1fvuNA473bC7" },
    ],
  },
  {
    title: "Capítulo 4: Os meus direitos como consumidor!",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 4", url: "https://forms.gle/gQcgTZ51GNH8U7hJ7" },
      { title: "Atividade 4.1", url: "https://forms.gle/brS9kMZEGSaizTv5A" },
      { title: "Atividade 4.2", url: "https://forms.gle/Lmmd172Wha4WFriW6" },
      { title: "Exercícios do Capítulo 4", url: "https://forms.gle/5Wb9Yxwj4JXT9jxK6" },
    ],
  },
  {
    title: "Capítulo 5: Alcançando objetivos em família",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 5", url: "https://forms.gle/DS19E21qkXQ6ZviM8" },
      { title: "Atividade 5.1", url: "https://forms.gle/NWuZgKCrqVdUm6AR8" },
      { title: "Atividade 5.2", url: "https://forms.gle/t8kAVyMSRqf4ou7W6" },
      { title: "Atividade 5.3", url: "https://forms.gle/FMLQtXsTY2roQy4G6" },
      { title: "Atividade 5.4", url: "https://forms.gle/8kha6rTiM9pdtpBa7" },
      { title: "Atividade 5.5", url: "https://forms.gle/A2akSrEGH2smPqYh6" },
      { title: "Atividade 5.6", url: "https://forms.gle/BrfK9KKN8NjyupRf6" },
      { title: "Atividade 5.7", url: "https://forms.gle/zroyQBc2Rp4Q6bAp6" },
      { title: "Exercícios do Capítulo 5", url: "https://forms.gle/Hwu7hbJrfgkBWtxk8" },
    ],
  },
  {
    title: "Capítulo 6: Despesas",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 6", url: "https://forms.gle/MqJ3Y3zPdaHnakvT7" },
      { title: "Atividade 6.1", url: "https://forms.gle/e2h2HAHQKxtnUEpc9" },
      { title: "Atividade 6.2", url: "https://forms.gle/zhPoRH9zoVfAk5E9A" },
      { title: "Atividade 6.3", url: "https://forms.gle/kym8DRewvne4ARLb7" },
      { title: "Atividade 6.4", url: "https://forms.gle/3WcFyXAChh6b3puo7" },
      { title: "Exercícios do Capítulo 6", url: "https://forms.gle/oiEzg8cNzDG494Zd8" },
    ],
  },
  {
    title: "Capítulo 7: Tendo uma vida financeira equilibrada",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 7", url: "https://forms.gle/e6pTijeMkf59di6A7" },
      { title: "Atividade 7.1", url: "https://forms.gle/U2kpBLCqkC9d9uMZ8" },
      { title: "Atividade 7.2", url: "https://forms.gle/Pk4FZxgP1H5fxUTo7" },
      { title: "Atividade 7.3", url: "https://forms.gle/AjLcHN4TRuR8urnw5" },
      { title: "Atividade 7.4", url: "https://forms.gle/KBBSiHditrWLxJa38" },
      { title: "Atividade 7.5", url: "https://forms.gle/Vynf3e7bcqnGNYJn7" },
      { title: "Atividade 7.6", url: "https://forms.gle/y7xa4MH3ZwQKErmu6" },
      { title: "Atividade 7.7", url: "https://forms.gle/GCjBwmD6ycfJhAiQ7" },
      { title: "Atividade 7.8", url: "https://forms.gle/v8pgYzijybzQqYBs9" },
      { title: "Atividade 7.9", url: "https://forms.gle/YTi29Havt5xW6Zwu9" },
      { title: "Exercícios do Capítulo 7", url: "https://forms.gle/xBjJKbiPyHyXRk1eA" },
    ],
  },
  {
    title: "Capítulo 8: Realizando sonhos com o dinheiro guardado",
    activities: [
      { title: "Atividade Exclusiva Digital - Cap. 8", url: "https://forms.gle/zo75QwPDH5gmwjb67" },
      { title: "Atividade 8.1", url: "https://forms.gle/W9fban64Ei94tBRz6" },
      { title: "Atividade 8.2", url: "https://forms.gle/DVwtBCyi4KZQ67tV9" },
      { title: "Atividade 8.3", url: "https://forms.gle/38KEVwa2Rp35k1af7" },
      { title: "Atividade 8.4", url: "https://forms.gle/Vii81vbEczR44WeA7" },
      { title: "Atividade 8.5", url: "https://forms.gle/MpDPvCZjWhGabSpS6" },
      { title: "Exercícios do Capítulo 8", url: "https://forms.gle/sjANdDnrzLySJBys6" },
    ],
  },
  {
  title: "Capítulo 9: Juros: dívidas e investimentos",
  activities: [
    { title: "Atividade Exclusiva Digital - Cap. 9", url: "https://forms.gle/riBiyeoqhkYq9ZvT9" },
    { title: "Atividade 9.1", url: "https://forms.gle/GA8kdxc7cXJAFqyTA" },
    { title: "Atividade 9.2", url: "https://forms.gle/iz1TZeNTZjmhY5CT8" },
    { title: "Atividade 9.3", url: "https://forms.gle/pbT25eLBmzJoAHeU7" },
    { title: "Atividade 9.4", url: "https://forms.gle/SjPiuoSkzTmuMecj9" },
    { title: "Atividade 9.5", url: "https://forms.gle/zT83RN7gn5QFQiB99" },
    { title: "Atividade 9.6", url: "https://forms.gle/qnZS7KEL6dQQVXkr5" },
    { title: "Exercícios do Capítulo 9", url: "https://forms.gle/2VZepoXCLEbD8z7F8" },
  ],
},
{
  title: "Capítulo 10: Inflação",
  activities: [
    { title: "Atividade Exclusiva Digital - Cap. 10", url: "https://forms.gle/s17toXLxLF2Z2d4B6" },
    { title: "Atividade 10.1", url: "https://forms.gle/9WBKK58sXtmp9s84A" },
    { title: "Exercícios do Capítulo 10", url: "https://forms.gle/xHHGR58Wc6kfPHLD6" },
  ],
},
{
  title: "Capítulo 11: Construindo redes solidárias",
  activities: [
    { title: "Atividade Exclusiva Digital - Cap. 11", url: "https://forms.gle/MM8eFcoifWBt19Pk9" },
    { title: "Atividade 11.1", url: "https://forms.gle/JopaEpLWfEUuaEbp9" },
    { title: "Atividade 11.2", url: "https://forms.gle/eAw8VgFxcB53wVcKA" },
    { title: "Exercícios do Capítulo 11", url: "https://forms.gle/upoR9cWRMikWP2x67" },
  ],
},
{
  title: "Capítulo 12: Celebrando tudo que aprendemos",
  activities: [
    { title: "Atividade Extra de Nivelamento - Cap. 12", url: "https://forms.gle/Kh2Bm6P5qe9QbX5T9" },
    { title: "Atividade 12.1", url: "https://forms.gle/CJchD4YwNrhreHWd6" },
  ],
},
  // Capítulo 2 a 12 será adicionado em seguida por questão de espaço.
];

export default function Atividades() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {chapters.map((chapter, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-sky-100 via-emerald-50 to-blue-100 hover:brightness-105"
            onClick={() => toggle(index)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{chapter.title}</h2>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-5 w-5 text-blue-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
                  {chapter.activities.map((activity, i) => (
                    <Card
                      key={i}
                      className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-4">
                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
                        >
                          {activity.title}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
