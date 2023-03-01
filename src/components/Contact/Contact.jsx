import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosMail, IoMdMailOpen, IoMdClose } from "react-icons/io"
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

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


    return (
        <>
            <motion.div
                className="email-widget"
                animate={{ opacity: isOpen ? 0 : 1 }}
                onClick={toggleOpen}
            >
                <IoIosMail className="IoIosMail" />
            </motion.div>
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
                    <div className="bg-white">
                        <IoMdClose className="IoMdClose" data-bs-dismiss="modal" onClick={toggleOpen} />
                        <p className="h4 mb-4">Let's connect.</p>
                        <IoMdMailOpen className="IoMdMailOpen" />
                        <div className="text-center bg-white border border-lite p-5">
                            <div className="form-group">
                                <input
                                    value={subject}
                                    id="subject"
                                    type="text"
                                    className="form-control-lg mb-4"
                                    defaultValue="Response to personal portfolio"
                                    placeholder="Subject"
                                    onChange={(event) => setSubject(event.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    value={message}
                                    id="message"
                                    type="text"
                                    className="form-control-lg mb-4"
                                    rows="4"
                                    placeholder="Message"
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSend}>
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
}

export default Contact;
