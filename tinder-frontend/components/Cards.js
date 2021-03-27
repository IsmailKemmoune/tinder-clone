import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import TinderCard from "react-tinder-card";

export function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Ismail Kemmoune",
      url:
        "https://scontent.fcmn2-1.fna.fbcdn.net/v/t1.0-9/160579074_3635888009798447_9191712090894500234_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=LDdqLBft5JsAX-fLweW&_nc_ht=scontent.fcmn2-1.fna&oh=a115f13566f51d26c6d879338625b05c&oe=60748CAC",
    },
    {
      name: "Alaa Zorkane",
      url:
        "https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.0-9/130907680_811883169663527_844341172740134563_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=IHSWxGtOJsYAX8mzYyx&_nc_ht=scontent.fcmn2-2.fna&oh=4cfcf48c5d9a7a83b42ea1817fd82823&oe=60761682",
    },
    {
      name: "Aymane Sarrar",
      url:
        "https://media.discordapp.net/attachments/822146815473352785/822148868283826266/83286141_178620606562500_2894206760866807808_n.jpg?width=300&height=533",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " Lesft the screen!");
  };

  return (
    <Box h="570px" w="600px">
      {people.map((person) => (
        <TinderCard
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <Box
            left="50%"
            bgImage={`url(${person.url})`}
            bgSize="cover"
            w="450px"
            h="600px"
            transform="translate(-50%, 1px)"
            borderRadius="20px"
            boxShadow="0px 18px 53px 0px rgba(0, 0, 0, 0.3)"
            bgPosition="center"
            padding="20px"
            marginTop="3vh"
            position="absolute"
          >
            <Text
              position="absolute"
              bottom="0"
              margin="10px"
              color="white"
              fontSize="lg"
            >
              {person.name}
            </Text>
          </Box>
        </TinderCard>
      ))}
    </Box>
  );
}
