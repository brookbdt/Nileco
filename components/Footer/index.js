import React from "react";
import { Text, Flex, Button } from "../Base";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { BsTelephoneFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import styled from "styled-components";
import Link from "next/link";
const FooterContainer = styled.div`
  @media (max-width: 1000px) {
    position: relative;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Flex
          background="rgba(0, 48, 100, 1)"
          padding="4rem"
          paddingMobile="1rem"
          direction="column"
          gap="3rem"
          width="100%"
        >
          <Flex justifyContent="start" alignItems="start">
            <Flex justifyContent="start" alignItems="start">
              <Flex
                direction="column"
                gap="1rem"
                gapMobile="2rem"
                alignItems="start"
              >
                <Text
                  color="#fff"
                  fontSize="1.3rem"
                  fontWeight="500"
                  mobileFontSize="1.3rem"
                >
                  Get in Touch
                </Text>
                <Flex directionMobile="row">
                  <GoLocation
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.7rem" }}
                  />
                  <Text color="#fff" fontSize="1rem">
                    Woreda 03, Bole Addis Ababa Zone, Ethiopia
                  </Text>
                </Flex>
                <Flex directionMobile="row">
                  <AiOutlineMail
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.7rem" }}
                  />
                  <Text color="#fff" fontSize="1rem">
                    info@nilecoeem.com
                  </Text>
                </Flex>
                <Flex directionMobile="row">
                  <BsTelephoneFill
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.7rem" }}
                  />
                  <Flex direction="column">
                    <Text
                      color="#fff"
                      fontSize="1rem"
                      mobileWhiteSpace="nowrap"
                    >
                      Phone : +251 977 80 5757
                    </Text>
                    <Text
                      color="#fff"
                      fontSize="1rem"
                      margin="0 0 0 1rem"
                      mobileWhiteSpace="nowrap"
                    >
                      {" "}
                      Support : +251 977 80 5757
                    </Text>
                  </Flex>
                </Flex>
                <Flex directionMobile="row">
                  <GoGlobe
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.7rem" }}
                  />
                  <Text color="#fff" fontSize="1rem">
                    https://nilecoeem.com
                  </Text>
                </Flex>
              </Flex>
              <br />
              <Flex direction="column">
                <Text
                  color="#fff"
                  fontSize="1.3rem"
                  fontWeight="500"
                  mobileFontSize="1.3rem"
                >
                  Products and Services
                </Text>

                <Flex
                  directionMobile="row"
                  wrap="wrap"
                  wrapMobile="wrap"
                  gap=""
                >
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    width="40%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Generators
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    width="50%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Switchgears
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    width="50%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Other Products
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    width="40%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Services
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column" alignItems="end">
              <Text
                color="#fff"
                fontSize="1.3rem"
                mobileFontSize="1.3rem"
                fontWeight="500"
                width="40%"
              >
                Get a Free Estimate
              </Text>
              <Text
                color="rgb(255, 199, 44)"
                fontSize="1.8rem"
                mobileFontSize="1.8rem"
                fontWeight="bold"
                width="40%"
              >
                +251977805757
              </Text>
              <Text
                color="#fff"
                fontSize="0.8rem"
                fontWeight="bold"
                width="40%"
              >
                Call us now
              </Text>
              <Flex justifyContent="start" width="40%">
                <Button
                  background="transparent"
                  color="rgb(255, 199, 44)"
                  border="1px solid rgb(255, 199, 44)"
                  height="3rem"
                  mobileHeight="2.5rem"
                  mobileWidth="8rem"
                  fontSize="1rem"
                  mobileFontSize="0.7rem"
                  width="8rem"
                >
                  {" "}
                  Visit Us
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Text color="#fff" mobileFontSize="0.5rem">
              Copyright © 2022 Nilecoeem All rights reserved. Designed by &nbsp;
              <a
                style={{ color: "#fff", textDecoration: "underline" }}
                href="https://kelaltech.com/"
              >
                Kelaltech.com
              </a>
            </Text>
            <Flex
              width="100%"
              justifyContent="end"
              alignItems="start"
              directionMobile="row"
            >
              <Link href="/">
                <Text
                  width="12%"
                  mobileWidth="13%"
                  hoverColor="rgb(255, 199, 44)"
                  color="#fff"
                  fontSize="0.8rem"
                  mobileFontSize="0.5rem"
                >
                  Home |
                </Text>
              </Link>
              <Link href="/about">
                <Text
                  width="12%"
                  mobileWidth="18%"
                  hoverColor="rgb(255, 199, 44)"
                  color="#fff"
                  fontSize="0.8rem"
                  mobileFontSize="0.5rem"
                >
                  {" "}
                  About Us |
                </Text>
              </Link>
              <Link href="/products">
                <Text
                  width="12%"
                  mobileWidth="18%"
                  hoverColor="rgb(255, 199, 44)"
                  color="#fff"
                  fontSize="0.8rem"
                  mobileFontSize="0.5rem"
                >
                  {" "}
                  Products |
                </Text>
              </Link>
              <Link href="/service">
                <Text
                  width="12%"
                  mobileWidth="18%"
                  hoverColor="rgb(255, 199, 44)"
                  color="#fff"
                  fontSize="0.8rem"
                  mobileFontSize="0.5rem"
                >
                  {" "}
                  Services |
                </Text>
              </Link>
              <Link href="/gallery">
                <Text
                  width="12%"
                  mobileWidth="16%"
                  hoverColor="rgb(255, 199, 44)"
                  color="#fff"
                  fontSize="0.8rem"
                  mobileFontSize="0.5rem"
                >
                  {" "}
                  Gallery |
                </Text>
              </Link>
              <Link href="/contact">
                <Text
                  width="14%"
                  mobileWidth="18%"
                  hoverColor="rgb(255, 199, 44)"
                  color="#fff"
                  fontSize="0.8rem"
                  mobileFontSize="0.5rem"
                >
                  {" "}
                  Contact Us |
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </FooterContainer>
    </>
  );
}
