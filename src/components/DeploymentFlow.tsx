import { motion } from "motion/react";
import { Server, FileCode, Package, ArrowRight, Globe } from "lucide-react";

export default function DeploymentFlow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const arrowVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full py-12 px-4 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4"
      >
        {/* Spring Boot App */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center group-hover:border-green-500 transition-colors duration-300">
            <FileCode className="w-10 h-10 text-green-600" />
          </div>
          <span className="font-medium text-slate-700">Spring Boot App</span>
          <span className="text-xs text-slate-400 font-mono">JAR (Embedded)</span>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div variants={arrowVariants} className="hidden md:flex items-center text-slate-300">
          <ArrowRight className="w-8 h-8" />
        </motion.div>
        <div className="md:hidden text-slate-300">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-8 h-8 rotate-90" />
          </motion.div>
        </div>

        {/* Build Process */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
            <Package className="w-10 h-10 text-blue-600" />
          </div>
          <span className="font-medium text-slate-700">Maven Build</span>
          <span className="text-xs text-slate-400 font-mono">mvn clean package</span>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div variants={arrowVariants} className="hidden md:flex items-center text-slate-300">
          <ArrowRight className="w-8 h-8" />
        </motion.div>
        <div className="md:hidden text-slate-300">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-8 h-8 rotate-90" />
          </motion.div>
        </div>

        {/* WAR File */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center group-hover:border-amber-500 transition-colors duration-300">
            <div className="relative">
              <FileCode className="w-10 h-10 text-amber-600" />
              <div className="absolute -top-1 -right-1 bg-amber-100 text-amber-700 text-[10px] font-bold px-1 rounded border border-amber-200">WAR</div>
            </div>
          </div>
          <span className="font-medium text-slate-700">WAR Artifact</span>
          <span className="text-xs text-slate-400 font-mono">Web Archive</span>
        </motion.div>

        {/* Arrow 3 */}
        <motion.div variants={arrowVariants} className="hidden md:flex items-center text-slate-300">
          <ArrowRight className="w-8 h-8" />
        </motion.div>
        <div className="md:hidden text-slate-300">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-8 h-8 rotate-90" />
          </motion.div>
        </div>

        {/* Tomcat Server */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center group-hover:border-red-500 transition-colors duration-300">
            <Server className="w-10 h-10 text-red-600" />
          </div>
          <span className="font-medium text-slate-700">External Tomcat</span>
          <span className="text-xs text-slate-400 font-mono">Port 8080</span>
        </motion.div>

        {/* Arrow 4 */}
        <motion.div variants={arrowVariants} className="hidden md:flex items-center text-slate-300">
          <ArrowRight className="w-8 h-8" />
        </motion.div>
        <div className="md:hidden text-slate-300">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-8 h-8 rotate-90" />
          </motion.div>
        </div>

        {/* Live App */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 group">
          <div className="w-20 h-20 rounded-2xl bg-green-600 shadow-lg shadow-green-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <span className="font-bold text-green-700">Live App</span>
          <span className="text-xs text-green-600/70 font-mono">Deployed!</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
