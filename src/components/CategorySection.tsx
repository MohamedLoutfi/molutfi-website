import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

interface CategorySectionProps {
  id: string;
  title: string;
  projects: Array<{
    title: string;
    thumbnail: string;
    videoUrl?: string;
  }>;
}

const CategorySection = ({ id, title, projects }: CategorySectionProps) => {
  return (
    <section id={id} className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-foreground">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <VideoCard
              key={project.title}
              title={project.title}
              thumbnail={project.thumbnail}
              videoUrl={project.videoUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
