import React from "react";
import useLanguage from "../../../../hooks/useLanguage";
import "./Contact.css";

const Contact = () => {
  const { currentLangObj } = useLanguage();
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <h1>{currentLangObj.contact.header}</h1>
        <form className="contact-form shadowed">
          <h3>{currentLangObj.contact.form.header}</h3>
          <input
            className="form-control"
            placeholder={currentLangObj.contact.form.field1}
            type="text"
          />
          <input
            className="form-control"
            placeholder={currentLangObj.contact.form.field2}
            type="text"
          />
          <textarea
            className="form-control-area"
            rows={6}
            placeholder={currentLangObj.contact.form.field3}
          ></textarea>
          <button>
            {currentLangObj.contact.form.button}{" "}
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
