import React from "react";
import Header from "../components/header";
import NumberOfStudents from "../components/numberOfStudents";
import Form from "../components/form";
import Testimonials from "../shared/testimonials";

function Home() {
  return (
    <>
      <Header />
      <NumberOfStudents />
      <Testimonials />
      <Form />
    </>
  );
}

export default Home;
