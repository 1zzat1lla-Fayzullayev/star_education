import React from "react";
import Header from "../components/header";
import NumberOfStudents from "../components/numberOfStudents";
import Form from "../components/form";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <NumberOfStudents />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
