import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IconButton, HStack, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <HStack spacing="140px">
      <IconButton
        aria-label="profile"
        boxSize="60px"
        fontSize="25px"
        icon={<FaUserAlt />}
      />
      <Image
        h="60px"
        src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt="logo"
      />
      <IconButton
        aria-label="profile"
        boxSize="60px"
        fontSize="25px"
        icon={<TiMessages />}
      />
    </HStack>
  );
}
