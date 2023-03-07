import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

function Hero() {

    const firstNameVariants = {
        initial: { opacity: 0, x: "55vw" },
        animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const lastNameVariants = {
        initial: { opacity: 0, x: "55vw" },
        animate: { opacity: 1, x: 0, transition: { duration: 1, delay: .25 } },
    };
    const h2Variants = {
        initial: { opacity: 0, x: "55vw" },
        animate: { opacity: 1, x: 0, transition: { duration: 1, delay: .5 } },
    };

    return (
        <AnimatePresence>
            <div className="hero-wrapper">

            <header className="hero-header">
                <motion.div initial="initial" animate="animate" >
                    <motion.h1 variants={firstNameVariants} id="fName">ALAN</motion.h1>
                    <motion.h1 variants={lastNameVariants} id="lName">CUENCA</motion.h1>
                    <motion.h2 variants={h2Variants} id="title">professional</motion.h2>
                    <motion.h2 variants={h2Variants} id="title">web developer</motion.h2>

                </motion.div>
                </header>
                
            </div>
        </AnimatePresence>
    );
}

export default Hero;
