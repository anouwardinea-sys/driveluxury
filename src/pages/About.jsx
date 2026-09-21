import { ShieldCheck, Gauge, Tag, Headset } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Every Car Inspected',
    text: 'Each vehicle passes a 50-point check before it reaches you — safety and comfort are never optional.',
  },
  {
    icon: Gauge,
    title: 'Unlimited Mileage',
    text: 'Drive as far as the road takes you. Every standard rental includes unlimited kilometres.',
  },
  {
    icon: Tag,
    title: 'Honest Pricing',
    text: 'The price you see is the price you pay. No hidden fees, no surprises at the counter.',
  },
  {
    icon: Headset,
    title: 'Support That Answers',
    text: 'Real people, day and night, wherever you are on the road.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            About Us
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Drive the car you were born to drive
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl">
            DriveX started with one simple idea: renting a premium car should
            feel as good as driving one. No queues, no paperwork, no surprises.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg transition duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f0a500]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#f0a500]" />
              </div>
              <h3 className="mt-4 font-bold text-[#0f1419]">{title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
