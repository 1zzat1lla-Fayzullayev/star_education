import React from "react";
import Header from "../components/header";
import NumberOfStudents from "../components/numberOfStudents";
import Form from "../components/form";
import Testimonials from "../shared/testimonials";
import Certificates from "../components/certificates";

function Home() {
  return (
    <>
      <Header />
      <NumberOfStudents />
      <Certificates />
      <Testimonials />
      <Form />
    </>
  );
}

export default Home;
