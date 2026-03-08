import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-script text-5xl md:text-6xl text-foreground mb-8">
            Let's create something
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Ready to bring your vision to life? Whether it's a brand film, commercial, or creative content — I'd love to hear about your project.
          </p>

          <a
            href="mailto:contact@moelutfi.com"
            className="inline-block px-12 py-4 border border-foreground/20 text-foreground text-sm tracking-[0.2em] uppercase hover:bg-foreground/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
