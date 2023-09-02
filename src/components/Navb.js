"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import myImage from "../images/20221025_134326.jpg";
import logo from "../images/عtar.png";
import NightModeButton from "./NightModeButton";







export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.500", "gray.900")}
        px={4}
        maxW="1400px"
        margin={"auto"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image maxWidth="40px" src={logo}></Image>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: useColorModeValue("blue.500"),
                }}
                href={"#Home"}
              >
                Home
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: useColorModeValue("blue.500"),
                }}
                href={"#Education"}
              >
                Education
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: useColorModeValue("blue.500"),
                }}
                href={"#Skills"}
              >
                Skills
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: useColorModeValue("blue.500"),
                }}
                href={"#Certifacates"}
              >
                Certifacates
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: useColorModeValue("blue.500"),
                }}
                href={"#Contactme"}
              >
                Contact Me
              </Box>
            </HStack>
          </HStack>

          <Flex alignItems={"center"} justifyContent={"center"}>
          
            <NightModeButton></NightModeButton>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={myImage} />
              </MenuButton>
              {/* <MenuList> */}
              {/* <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: "blue.500",
                }}
                href={"#Home"}
              >
                Home
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: "blue.500",
                }}
                href={"#Education"}
              >
                Education
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: "blue.500",
                }}
                href={"#Skills"}
              >
                Skills
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: "blue.500",
                }}
                href={"#Certifacates"}
              >
                Certifacates
              </Box>
              <Box
                color="white"
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                  bg: "blue.500",
                }}
                href={"#Contactme"}
              >
                Contact Me
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
