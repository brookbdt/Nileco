import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Flex, Text, Button } from "../components/Base";
import { AiOutlineHome } from "react-icons/ai";
import antDModal from "antd/lib/modal";
import Link from "next/link";
import titleBar from "../assets/titlebar-bg.jpg";
import antDCollapse from "antd/lib/collapse";
import Head from "next/head";
import nextImage from "next/image";
import antDTabs from "antd/lib/tabs";
import generator1 from "../assets/generators/generator6.jpg";
import generator2 from "../assets/generators/generator5.jpg";
import generator3 from "../assets/generators/generator2.png";
import generator4 from "../assets/generators/generator3.jpg";
import generator5 from "../assets/generators/generator4.jpeg";
import generator6 from "../assets/generators/generator16.jpg";
import generator7 from "../assets/generators/generator15.jpg";
import generator8 from "../assets/generators/generator14.jpg";
import generator9 from "../assets/generators/generator13.jpg";
import generator10 from "../assets/generators/generator12.jpg";
import generator11 from "../assets/generators/generator11.jpg";
import generator12 from "../assets/generators/generator10.jpg";
import generator13 from "../assets/generators/generator1.jpg";
import generator14 from "../assets/generators/rental.jpg";
import switchGear1 from "../assets/generators/generator21.jpg";
import switchGear2 from "../assets/generators/generator20.jpg";
import switchGear7 from "../assets/generators/generator22.jpg";
import switchGear8 from "../assets/generators/generator23.jpg";
import switchGear9 from "../assets/generators/generator24.jpg";
import switchGear10 from "../assets/generators/generator25.jpg";
import switchGear11 from "../assets/generators/generator26.jpg";
import switchGear12 from "../assets/generators/generator27.jpg";
import switchGear13 from "../assets/generators/generator28.jpg";
import switchGear14 from "../assets/generators/generator29.jpg";
import sparePart1 from "../assets/generators/generator7.jpg";
import sparePart2 from "../assets/generators/generator8.jpg";
import sparePart4 from "../assets/generators/generator30.jpg";
import sparePart5 from "../assets/generators/generator31.jpg";
import sparePart6 from "../assets/generators/generator32.jpg";
import sparePart8 from "../assets/generators/generator34.jpg";
import sparePart10 from "../assets/generators/generator36.jpg";
import sparePart11 from "../assets/generators/generator37.jpg";
import sparePart12 from "../assets/generators/generator38.jpg";

const { Panel: antDpanel } = antDCollapse;
const Collapse = styled(antDCollapse)`
  display: none !important;
  @media (max-width: 1000px) {
    display: block !important;
  }
  &.ant-collapse {
    background: #fff !important;
  }
`;
const Panel = styled(antDpanel)`
  display: none;
  width: 70rem;
  margin-top: 0.5rem;
  @media (max-width: 1000px) {
    width: 24rem;
    display: block;
  }
  @media (max-width: 763px) {
    width: 20rem;
  }
  &.ant-collapse-item-active {
    background: rgb(255, 199, 44);
    font-size: 1rem;
    color: #fff !important;
    .ant-collapse-header {
      fontsize: 25px;
      color: #fff !important;
      font-weight: bold;
    }
  }
  &.ant-collapse-item {
    font-size: 1rem;
    .ant-collapse-header {
      font-size: 1rem;
      color: rgba(0, 48, 100, 1);
      font-weight: bold;
    }
  }
`;
const Tabs = styled(antDTabs)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  @media (max-width: 1000px) {
    display: none !important;
  }
  .ant-tabs-tab {
    width: 250px;
    height: 80px;
    display: flex !important;
    font-size: 1.2rem;
    align-items: center !important;
    justify-content: center !important;
    color: rgba(0, 48, 100, 1) !important;
    &:hover {
      background: rgb(255, 199, 44) !important;
      color: #fff !important;
    }
    @media (max-width: 1000px) {
      width: 70px;
      height: 40px;
      font-size: 0.6rem;
    }
  }
  .ant-tabs-tab-active {
    background: rgb(255, 199, 44) !important;
    color: #fff !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff !important;
  }
  &.ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar {
    display: none !important;
  }
`;
const StyledDiv = styled.div`
  background-image: url(${titleBar.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 13rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
`;
const TabContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 1rem;
`;
const ImageWrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;
const FooterHeader = styled.div`
  height: 30rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Image = styled(nextImage)`
  cursor: pointer !important;
`;
const Modal = styled(antDModal)`

  .ant-modal-content {
    width: 500px !important;
    height: 400px !important;
    background: transparent !important;
    @media (max-width: 1000px) {
      width: 100% !important
      height: 100% !important;
    }
  }
  .ant-modal-body {
    width: 500px !important;
    height: 400px !important;
    background: transparent !important;
    @media (max-width: 1000px) {
      width: 100% !important
      height: 100% !important;
    }
    padding: 0.5rem !important;
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0);
  }
  .ant-modal-close-x {
    width: 2rem !important;
    height: 2rem !important;
    right: 0.5rem !important;
    color: #fff !important;
    font-size: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .ant-modal-footer {
    display: none !important;
  }
`;

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const GeneratorImages = [
    generator1,
    generator2,
    generator3,
    generator4,
    generator5,
    generator6,
    generator7,
    generator8,
    generator9,
    generator10,
    generator11,
    generator12,
    generator13,
    generator14,
  ];
  const SwitchGearImages = [
    switchGear1,
    switchGear2,
    switchGear7,
    switchGear8,
    switchGear9,
    switchGear10,
    switchGear11,
    switchGear12,
    switchGear13,
    switchGear14,
  ];
  const SparePartImages = [
    sparePart1,
    sparePart2,
    sparePart4,
    sparePart5,
    sparePart6,

    sparePart8,

    sparePart10,
    sparePart11,
    sparePart12,
  ];
  return (
    <>
      <Modal title="" open={isModalOpen} onCancel={handleCancel}>
        <Flex justifyContent="center">
          <Image
            objectFit="cover"
            src={modalImage}
            width="500px"
            height="401px"
            alt="selected Image"
          />
        </Flex>
      </Modal>
      <Head>
        <title>Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledDiv>
        <Flex direction="column">
          <Text
            width="100%"
            mobileWidth="100%"
            fontSize="2rem"
            color="#fff"
            textAlign="center"
            fontWeight="bold"
            mobileTextAlign="center"
            mobileFontSize="2rem"
          >
            Gallery
          </Text>
          <Flex width="100%" justifyContent="center" gap="0px">
            <Flex width="18%" directionMobile="row" widthMobile="60%" gap="0px">
              <Link href="/">
                <Flex
                  width="40%"
                  directionMobile="row"
                  widthMobile="40%"
                  justifyContent="center"
                  gap="0px"
                >
                  {" "}
                  <AiOutlineHome
                    style={{ margin: "0 5px", fontSize: "1.5rem" }}
                  />
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    textAlign="center"
                    fontWeight="bold"
                    cursor="pointer"
                    width="50%"
                    mobileWidth="60%"
                  >
                    Home
                  </Text>
                </Flex>
              </Link>
              /
              <Flex width="40%" directionMobile="row" widthMobile="40%">
                <Text
                  fontSize="1rem"
                  color="rgb(255, 199, 44)"
                  textAlign="center"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Gallery
                </Text>{" "}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </StyledDiv>
      <TabContainer>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text textAlign="center" fontSize="1rem" color="rgb(136,142,148)">
            Gallery
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            color="rgb(1,44,90)"
            fontSize="1.5rem"
          >
            {" "}
            Nileco Electric Equipment Manufacturing PLC
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          alignItemsMobile="center"
          justifyContentMobile="center"
        >
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab=" Generator" key="1">
              <ImageWrapper>
                {GeneratorImages.map((image, index) => (
                  <Image
                    objectFit="cover"
                    onClick={() => {
                      setModalImage(image.src);
                      showModal();
                    }}
                    style={{ pointer: "cursor", marginLeft: "0.5rem" }}
                    key={index}
                    src={image.src}
                    width="300px"
                    height="280px"
                    alt="generator image"
                  />
                ))}
              </ImageWrapper>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Switch Gears" key="2">
              <ImageWrapper>
                {SwitchGearImages.map((image, index) => (
                  <Image
                    objectFit="cover"
                    onClick={() => {
                      setModalImage(image.src);
                      showModal();
                    }}
                    style={{ pointer: "cursor", marginLeft: "0.5rem" }}
                    key={index}
                    src={image.src}
                    width="300px"
                    height="280px"
                    alt=" switchgear image"
                  />
                ))}
              </ImageWrapper>
            </Tabs.TabPane>
            {/* <Tabs.TabPane tab="Spare Parts" key="3">
            <ImageWrapper>
                {SparePartImages.map((image, index) => (
                  <Image
                    objectFit="cover"
                    onClick={() => {
                      setModalImage(image.src);
                      showModal();
                    }}
                    style={{ pointer: "cursor",marginLeft:"0.5rem" }}
                    key={index}
                    src={image.src}
                    width="300px"
                    height="280px"
                    alt="sparePart Image"
                  />
                ))}
              </ImageWrapper>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Events" key="4">
              Events
            </Tabs.TabPane> */}
          </Tabs>
          <Collapse expandIconPosition="end">
            <Panel header={" Generator"} key="1">
              <ImageWrapper>
                {GeneratorImages.map((image, index) => (
                  <Image
                    objectFit="cover"
                    onClick={() => {
                      setModalImage(image.src);
                      showModal();
                    }}
                    style={{ pointer: "cursor", marginLeft: "0.5rem" }}
                    key={index}
                    src={image.src}
                    width="300px"
                    height="280px"
                    alt="generator image"
                  />
                ))}
              </ImageWrapper>
            </Panel>
            <Panel header={"Switch Gears"} key="2">
              <ImageWrapper>
                {SwitchGearImages.map((image, index) => (
                  <Image
                    objectFit="cover"
                    onClick={() => {
                      setModalImage(image.src);
                      showModal();
                    }}
                    style={{ pointer: "cursor", marginLeft: "0.5rem" }}
                    key={index}
                    src={image.src}
                    width="300px"
                    height="280px"
                    alt=" switchgear image"
                  />
                ))}
              </ImageWrapper>
            </Panel>
            <Panel header={"Spare Parts"} key="3">
              <ImageWrapper>
                {SparePartImages.map((image, index) => (
                  <Image
                    objectFit="cover"
                    onClick={() => {
                      setModalImage(image.src);
                      showModal();
                    }}
                    style={{ pointer: "cursor", marginLeft: "0.5rem" }}
                    key={index}
                    src={image.src}
                    width="300px"
                    height="280px"
                    alt="sparePart Image"
                  />
                ))}
              </ImageWrapper>
            </Panel>
          </Collapse>
        </Flex>
      </TabContainer>
    </>
  );
}
