import React, { useState } from "react";
import "antd/dist/antd.css";
import antDPopover from "antd/lib/popover";
import styled from "styled-components";
import Image from "next/image";
import Links from "next/link";
import logo from "../../assets/Nileco.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Flex, Text, Button } from "../Base";
import { GoSearch } from "react-icons/go";
import Drawer from "antd/lib/drawer";
import Search from "antd/lib/input/Search";

const Layout = styled("div")`
  background: transparent !important;
  position: sticky !important;
  top: 0px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100vw !important;
  height: 10vh !important;
  z-index: 100 !important;
  @media (max-width: 768px) {
    position: relative !important;
  }
`;
const Popover = styled(antDPopover)`
  &.ant-popover > .ant-popover-content > .ant-popover-inner-content {
    padding: 0px 0px !important;
    color: rgba(0, 0, 0, 0.85);
  }

  &.ant-popover-title {
    display: none !important;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  align-item: center;
  justify-content: end;
  width: 42rem;
  height: 2rem;
  gap: 10px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledButton = styled("button")`
  width: ${(props) => props.width || "7rem"} !important;
  height: ${(props) => props.height || "2.5rem"} !important;
  background: ${(props) => props.background || "transparent"} !important;
  border: 0px solid transparent !important;
  color: #000000 !important;
  font-size: 14px !important;
  cursor: pointer !important;
  padding: ${(props) => props.padding || ""} !important;
  &:hover {
    color: rgb(255, 199, 44) !important;
    background: transparent !important;
    font-weight: bold !important;
  }
  font-weight: 500 !important;
  font-size: 1rem !important;
  color: rgb(0, 44, 91) !important;
`;
// const LinkContainer = styled("div")`
//   width: 100%;
//   height: 50%;
//   display: flex;
//   align-item: center;
//   justify-content: end;
//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;
const Credentials = styled("div")`
  background: rgb(0, 44, 91) !important;
  min-height: 4rem;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
    min-height: 0rem;
  }
`;
const HamburgerMenu = styled("div")`
  cursor: pointer;
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;
const NavBarContainer = styled("div")`
  width: 100vw;
  display: flex;
  height: 6rem;
  gap: 1rem;
  align-items: center;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  background: #fff;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem 0rem 1rem;
  }
`;

const SearchContainer = styled("div")`
  display: none;
  @media (max-width: 1000px) {
    display: inline;
  }
`;

const Content = styled("span")`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  width: 180px;
  padding: 0px;
  background: transparent;
`;
const ContentItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  padding: 0rem 0.5rem;
  margin: 0rem 0rem 0rem -0.5rem;
  width: 100%;
  height: 40px;

  &:hover {
    border-left: 10px solid rgb(255, 199, 44);
  }
`;
const searchContent = (
  <Search
    style={{ width: "200px" }}
    placeholder="input search text"
    enterButton
  />
);

//create a hamburger menu for mobile view

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const content = (
    <Content>
      <Links href="/products/generators">
        <ContentItem
          onClick={() => {
            setPopoverOpen(false);
            onClose();
          }}
        >
          Generators
        </ContentItem>
      </Links>
      <Links href="/products/switchgears">
        <ContentItem
          onClick={() => {
            setPopoverOpen(false);
            onClose();
          }}
        >
          Switch Gears
        </ContentItem>
      </Links>
      <Links href="/products/other">
        <ContentItem
          onClick={() => {
            setPopoverOpen(false);
            onClose();
          }}
        >
          Other Products
        </ContentItem>
      </Links>
    </Content>
  );

  return (
    <>
      <Drawer
        title={
          <div
            style={{
              position: "relative",
              height: "40px",
              width: "18rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              layout="fill"
              objectFit="contain"
              sizes="(min-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
              alt="drawer image"
            />
          </div>
        }
        placement="top"
        onClose={onClose}
        open={open}
      >
        <NavBarContainer direction="column">
          <Links href="/">
            <Image
              src={logo}
              alt="Website logo image"
              width="180px"
              height="45px"
            />
          </Links>
          <Links href="/">
            <StyledButton onClick={onClose}>Home</StyledButton>
          </Links>
          <Links href="/about">
            <StyledButton onClick={onClose}>About Us</StyledButton>
          </Links>
          <Popover
            trigger="click"
            content={content}
            placement="bottom"
            visible={popoverOpen}
          >
            <StyledButton
              color="rgba(0, 48, 100, 1)"
              hoverbackground="none"
              onClick={() => {
                setPopoverOpen((prev) => !prev);
              }}
            >
              Products
            </StyledButton>
          </Popover>
          <Links href="/service">
            <StyledButton onClick={onClose}>Service</StyledButton>
          </Links>
          <Links href="/gallery">
            <StyledButton onClick={onClose}>Gallery</StyledButton>
          </Links>
          <Links href="/contact">
            <StyledButton onClick={onClose}>Contact Us</StyledButton>
          </Links>
        </NavBarContainer>
      </Drawer>
      <Credentials>
        <Flex gap="20px" width="80vw" justifyContent="end">
          <Text fontSize="0.7rem" color="#fff" width="50vw" textAlign="right">
            Your Trusted Power Solutions Provider in Ethiopia
          </Text>
          <Flex width="50%" justifyContent="center">
            <Flex width="250px" gap="1rem">
              <AiOutlineMail
                style={{
                  fontSize: "1rem",
                  color: "rgb(255, 199, 44)",
                  marginRight: "-10px",
                }}
              />{" "}
              <Text fontSize="0.7rem" color="#fff" width="40%">
                info@nilecoeem.com
              </Text>
            </Flex>
            <Flex width="250px" gap="1rem">
              <BsTelephoneFill
                style={{
                  fontSize: "1rem",
                  color: "rgb(255, 199, 44)",
                  marginRight: "-10px",
                }}
              />
              <Text fontSize="0.7rem" color="#fff" width="50%">
                {" "}
                +251 977 80 5757
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Credentials>
      <Layout style={{ width: "100vw", height: "5rem" }}>
        <NavBarContainer>
          <HamburgerMenu onClick={showDrawer}>
            <GiHamburgerMenu style={{ fontSize: "2rem" }} />
          </HamburgerMenu>
          <Links href="/">
            <div
              style={{ width: "210px", height: "55px", position: "relative" }}
            >
              <Image
                src={logo}
                alt="Website logo image"
                layout="fill"
                objectFit="contain"
                sizes="(min-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          </Links>
          <SearchContainer>
            <Popover content={searchContent} trigger="click" placement="bottom">
              <Flex width="30px" height="30px" margin="0px 15px">
                <GoSearch color="rgba(0, 48, 100, 1)" />
              </Flex>
            </Popover>
          </SearchContainer>
          <HeaderItems>
            <Links href="/">
              <StyledButton width="7rem" height="2.5rem">
                Home
              </StyledButton>
            </Links>
            <Links href="/about">
              <StyledButton width="7rem" height="2.5rem">
                About Us
              </StyledButton>
            </Links>
            <Popover content={content} placement="bottomRight" trigger="hover">
              <StyledButton>Products</StyledButton>
            </Popover>
            <Links href="/service">
              <StyledButton width="7rem" height="2.5rem">
                Service
              </StyledButton>
            </Links>
            <Links href="/gallery">
              <StyledButton width="7rem" height="2.5rem">
                Gallery
              </StyledButton>
            </Links>
            <Links href="/contact">
              <StyledButton width="7rem" height="2.5rem">
                Contact Us
              </StyledButton>
            </Links>
            <Popover content={searchContent} trigger="click" placement="bottom">
              {" "}
              <GoSearch
                color="rgba(0, 48, 100, 1)"
                style={{ marginRight: "1rem", marginTop: "1rem" }}
              />
            </Popover>
          </HeaderItems>
        </NavBarContainer>
      </Layout>
    </>
  );
};

export default NavBar;
