import React, { useState } from "react";
import { Input, TextArea } from "./Input";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const handleSubmi = (e) => {
    e.preventDefault();

    const serviceId = "service_xe5tdb9";
    const templateId = "template_0z7elym";
    const publicKey = "CHt1n517C9TZzZhtM";

    const templateParams = {
      from_name: values.username,
      from_email: values.email,
      phne:values.phone,
      to_name: "Portfolio",
      message: values.requirement,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("Your query is sent successfully!"+ response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmi}
      className="container mt-5 text-center"
    >
      {/* <p className={resMessage.success ? "text-textPrimary" : "text-red-500"}>
        {resMessage.success ? resMessage.success : resMessage.error}
      </p> */}
      <div className="grid gap-5 md:grid-cols-1">
        <Input
          label="name"
          type="text"
          name="username"
          required="true"
          onChange={handleChange}
          errorMsg="Name should be between 3 to 25 characters"
          placeholder="type your name..."
          pattern="^[A-Za-z]{3,25}"
        />
        <Input
          label="email"
          type="email"
          name="email"
          required="true"
          onChange={handleChange}
          errorMsg="Please write a valid email address"
          placeholder="type your Email..."
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        />

        <Input
          label="Phone Number"
          type="text"
          name="phone"
          required="true"
          onChange={handleChange}
          errorMsg="Please use a valid phone number"
          placeholder="type your Phone Number..."
          pattern="/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/"
        />
        <TextArea
          label="Requirement"
          name="requirement"
          required="true"
          onChange={handleChange}
          errorMsg="This field is required. please add at least 30 characters"
          placeholder="type your requirement here..."
          pattern="^[a-zA-Z0-9]{30,300}"
        />
      </div>
      <div className="mt-5">
        <button className="flex w-full justify-center items-center gap-1 p-5 text-md text-white bg-textPrimary rounded-md">
          <GrMail />
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
