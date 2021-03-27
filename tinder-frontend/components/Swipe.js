import React from "react";
import { MdReplay } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";
import { IconButton, HStack, color } from "@chakra-ui/react";

const actions = [
  {
    ariaLabel: "replay",
    color: "#f5b748",
    icon: <MdReplay />,
  },
  {
    ariaLabel: "close",
    color: "##ec5e6f",
    icon: <MdClose />,
  },
  {
    ariaLabel: "star",
    color: "#62b4f9",
    icon: <MdStar />,
  },
  {
    ariaLabel: "favorite",
    color: "#76e2b3",
    icon: <MdFavorite />,
  },
  {
    ariaLabel: "flash",
    color: "#915dd1",
    icon: <MdFlashOn />,
  },
];

export function Swipe() {
  return (
    <HStack py="100px" spacing="50px">
      {actions.map((sbutton) => (
        <IconButton
          key={sbutton.ariaLabel}
          aria-label={sbutton.ariaLabel}
          borderRadius="full"
          color={sbutton.color}
          bgColor="white"
          boxShadow="0px 10px 53px 0px rgba(0, 0, 0, 0.3)"
          icon={sbutton.icon}
          boxSize="60px"
          fontSize="25px"
        />
      ))}
    </HStack>
  );
}
