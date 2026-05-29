import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiArrowRight } from 'react-icons/hi';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const contactLinks = [
  {
    label: 'Email',
    value: 'ahmedabdelaziz2451@gmail.com',
    href: 'mailto:ahmedabdelaziz2451@gmail.com',
    Icon: HiMail,
  },
  {
    label: 'Phone',
    value: '+20 150 171 1718',
    href: 'tel:+201501711718',
    Icon: HiPhone,
  },
  {
    label: 'LinkedIn',
    value: 'ahmed-khaled-4b8485250',
    href: 'https://www.linkedin.com/in/ahmed-khaled-4b8485250',
    Icon: SiLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'ahmed-khaled-4',
    href: 'https://github.com/ahmed-khaled-4',
    Icon: SiGithub,
    external: true,
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section-y border-t border-rule/60">
      <div className="section-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="card !p-6 sm:!p-10 text-center max-w-2xl mx-auto mb-8"
        >
          <p className="section-label !mb-4">Contact</p>
          <h2 className="font-display text-[length:var(--text-display-s)] font-medium text-ink text-balance mb-3">
            Ready to move fast on a full-stack hire?
          </h2>
          <p className="text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
            I respond within 24 hours. Reach out for backend, full-stack, or internship-to-full-time conversations.
          </p>
          <a href="mailto:ahmedabdelaziz2451@gmail.com" className="btn-primary">
            Email Ahmed
            <HiArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              className="group card !p-5 text-center hover:!border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <link.Icon className="w-5 h-5 text-accent mx-auto mb-3" />
              <p className="text-sm font-semibold text-ink mb-1">{link.label}</p>
              <p className="text-xs text-ink-3 break-all group-hover:text-ink-2 transition-colors">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
