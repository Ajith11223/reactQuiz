import { Button, Container, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/testStart")
    }
  return (
    <div
      className="container"
      style={{ backgroundColor: "#7272cc", width: "100%", height: "100vh" }}
    >
      <NavBar />
      <div className="divContainer">
        <VStack style={{marginTop:"6rem"}}>
          <Container maxW="-webkit-fit-content">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="data:image/jpeg;base64,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"
              alt="img"
            />
          </Container>
          <Container maxW="-webkit-fit-content">
            <p style={{ fontSize: "40px", fontWeight: "500", color: "#fff" }}>
              IQ Test
            </p>
          </Container>
          <Container maxW="-webkit-fit-content">
            <Button m={4} onClick={handleClick}>GetStart</Button>
          </Container>
          <Container maxW="1150" style={{marginTop:"3rem"}}>
            <p style={{color:"#fff",fontSize:"18px"}}>
              Surely many have heard about the intelligence quotient, or IQ. The
              easiest way to find out your intelligence level is to take an IQ
              test, which is a modern analogue of the well-known methodology
              "Raven's Progressive Matrix Scale". It is designed to determine
              the IQ of adults aged 14 to 65 years, regardless of nationality,
              religion, and other differences. All questions that you do not
              answer are considered incorrectly answered. You will be presented
              with a picture with a cropped area and several parts that fit into
              this area. Your task is to identify the one and only correct cut
              out picture. Take an IQ test online, find out your intelligence
              level, and be sure to share the results with your friends! Let's
              get started!
            </p>
          </Container>
        </VStack>
      </div>
    </div>
  );
}

export default Home;
