import { CheckMark, MoneyBack, SetupFees, Subscription } from './icons/Icon';

import React from 'react'
import { Box, Flex, Heading, HStack, Icon } from '@chakra-ui/react';

import { Grid, GridItem } from '@chakra-ui/react'

export default function Features() {
  return (

    <Box marginInline={["22px", "22px", "0px"]}>
    <Box
      as="section"
      maxWidth="994"
      marginInline="auto"
      pt={["38px", "38px", "56px"]}
    >

      <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} gap="25px">
        <GridItem>
          {" "}
          <HStack>
            <Icon as={MoneyBack} />
            <Heading as="h4" fontSize="18px">
              30 days money back Guarantee
            </Heading>
          </HStack>
        </GridItem>
        <GridItem >
          <HStack>
            <Icon as={SetupFees} />
            <Heading as="h4" fontSize="18px">
            No setup fees 100% hassle-free
            </Heading>
          </HStack>{" "}
        </GridItem>
        <GridItem>
          {" "}
          <HStack>
            <Icon as={Subscription} />
            <Heading as="h4" fontSize="18px">
            No monthly subscription Pay once and for all
            </Heading>
          </HStack>
        </GridItem>
      </Grid>
    </Box>


    </Box>
  );
}
