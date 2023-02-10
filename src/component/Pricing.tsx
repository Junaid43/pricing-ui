import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'

import { CheckMark, MoneyBack, SetupFees, Subscription } from './icons/Icon';

export default function Pricing() {
  return (
    <Box marginInline={["22px", "22px", "0px"]}>

    <Box
      as="section"
      maxWidth="994"
      mt="-128px"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      borderRadius="12px"
      bg="#fff"
      marginInline="auto"
    >
      <Flex alignItems="center" flexWrap="wrap">
        <Box
          bg="#652cd31a"
          padding="70px 48px"
          textAlign="center"
          flex={["1 0 100%", "1 0 100%", "1 0 40%"]}
        >
          <Heading fontSize="24px" fontWeight="bold">
            {" "}
            Premium PRO
          </Heading>
          <Heading as="h3" fontSize="60px" fontWeight="bold">
            $329
          </Heading>
          <Text fontSize="18px" mb="24px">
            billed just once
          </Text>
          <Button
            bg="#805AD5"
            color="white"
            width="100%"
            textAlign="center"
            borderRadius="8px"
            pt="15px"
            pb="15px"
            fontSize="16px"
            lineHeight="1.5em"
            _hover={{ background: "#fff", color: "#805AD5" }}
          >
            Get Started
          </Button>
        </Box>

        <Box padding="48px" flex={["0 1 100%", "0 1 100%", "0 1 60%"]}>
          <Text fontSize="18px" pb="24px">
            Access these features when you get this pricing package for your
            business.
          </Text>

          <HStack spacing="24px" pb="16px">
            <Icon as={CheckMark} />
            <Text fontSize="18px">International calling and messaging API</Text>
          </HStack>

          <HStack spacing="24px" pb="16px">
            <Icon as={CheckMark} />
            <Text fontSize="18px">Additional phone numbers</Text>
          </HStack>

          <HStack spacing="24px" pb="16px">
            <Icon as={CheckMark} />
            <Text fontSize="18px">Automated messages via Zapier</Text>
          </HStack>

          <HStack spacing="24px">
            <Icon as={CheckMark} />
            <Text fontSize="18px">24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>

    </Box>
  );
}
