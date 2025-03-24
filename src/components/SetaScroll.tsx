
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollArrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }} // Movendo a seta para cima e para baixo
      transition={{
        duration: 1, 
        repeat: Infinity, // Repetir a animação infinitamente
        repeatType: 'loop', // Tipo de repetição
        ease: 'easeInOut', // Suaviza a animação
      }}
      className="flex justify-center items-center"
    >
      <FaChevronDown size={50} />
    </motion.div>
  );
};

const SetaScroll = () => {
  return (
    <div className='text-white pb-10'>
      <ScrollArrow />
    </div>
  );
};

export default SetaScroll;
