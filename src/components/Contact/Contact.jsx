import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosMail, IoMdClose } from "react-icons/io"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { MdContacts } from "react-icons/md"
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailForm from "./EmailForm";
import {saveContact} from "./SaveContact";

function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setIsSent(false);
    };

    const handleSend = () => {
        let headline = document.getElementById("subject").value || "Response to personal portfolio";
        let body = encodeURIComponent(message);
        let mailtoLink = `mailto:alan.r.cuenca@gmail.com?subject=${headline}&body=${body}`;
        window.open(mailtoLink, "_blank");
        setIsSent(true);
        setMessage("");
        setSubject("");
    };

    useEffect(() => {
        const node = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return (
        <div id="contact">
            <motion.div
                className="email-widget"
                animate={{ opacity: isVisible ? 0 : 1 }}
                onClick={toggleOpen}
            >
                <IoIosMail className="IoIosMail" />
            </motion.div>
            <div ref={ref}>
                <motion.div
                    className={isOpen ? "container open" : "container closed"}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 50,
                        scale: isOpen ? 1 : 1,
                    }}
                >
                    {isSent ? (
                        <>
                            <p className="thank-you-message">Thank you for your message!</p>
                            <IoMdClose className="IoMdClose" onClick={toggleOpen} />
                        </>
                    ) : (
                        <>
                            <IoMdClose className="IoMdClose" data-bs-dismiss="modal" onClick={toggleOpen} />
                            <EmailForm
                                subject={subject}
                                setSubject={setSubject}
                                message={message}
                                setMessage={setMessage}
                                handleSend={handleSend}
                                toggleOpen={toggleOpen}
                            />
                        </>
                    )}
                </motion.div>
            </div>

            <div className="contact-bottom">
            <div className="page-email-container">
                <EmailForm
                    subject={subject}
                    setSubject={setSubject}
                    message={message}
                    setMessage={setMessage}
                    handleSend={handleSend}
                    isOpen={isOpen}
                    toggleOpen={toggleOpen}
                />
            </div>
            <div className="add-contact-container" onClick={saveContact}>
                <div className="add-contact-content">
                <MdContacts />
                Save My Contact Info
                </div>
            </div>
            <div>
                <a href="tel:+18053548830" className="call">
                    <BsFillTelephoneOutboundFill />
                    (805) 354-8830
                </a>
            </div>
            </div>
        </div>
    );
}

export default Contact;
