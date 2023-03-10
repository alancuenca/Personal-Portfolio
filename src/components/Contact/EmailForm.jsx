import React from "react";
import { IoMdMailOpen } from "react-icons/io";

function EmailForm({ handleSend, subject, setSubject, message, setMessage }) {
    const handleButtonClick = () => {
        handleSend(subject, message);
    };

    return (
        <div className="bg-white text-center">
            <p className="h4 mb-4">Let's connect.</p>
            <IoMdMailOpen className="IoMdMailOpen" />
            <div className="text-center bg-white border border-lite p-5">
                <div className="form-group">
                    <input
                        value={subject}
                        id="subject"
                        type="text"
                        className="form-control-lg mb-4"
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
                <button type="submit" className="btn btn-primary" onClick={handleButtonClick}>
                    Send
                </button>
            </div>
        </div>
    );
}


export default EmailForm;
