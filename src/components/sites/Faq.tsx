import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What services does FZTPL provide?',
    a: 'We provide software development, mobile apps, UI/UX design, and cloud solutions tailored to your business.'
  },
  {
    q: 'Do you offer outsourcing services?',
    a: 'Yes, FZTPL specializes in IT outsourcing with scalable and dedicated teams.'
  },
  {
    q: 'How long does a project take?',
    a: 'Project timelines depend on scope, but we ensure fast and agile delivery.'
  },
  {
    q: 'Can you handle enterprise-level projects?',
    a: 'Absolutely. We build scalable enterprise-grade solutions with modern technologies.'
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number|null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                layout
                initial={{ borderRadius: 16 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium">{item.q}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl"
                  >
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="px-5 pb-5 text-gray-600"
                    >
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}