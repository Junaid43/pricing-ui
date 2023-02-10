import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';


export default function Mainbox() {
  return( 
 
     <Box as="section" minH="397px" bg="#6B46C1" width="100%" textAlign={["left", "left", "center"]} paddingTop="90px" paddingInline="25px">
          <Heading as="h1" fontSize={['30px', '30px', '48px']} color="white" fontWeight="bold" >
               Simple pricing for your business
          </Heading>

          <Text fontSize={['18px','18px',"2xl"]} color="white" fontWeight="500" pt="16px" pb="16px">
               Plans that are carefully crafted to suit your business.
          </Text>

     </Box>


)
    
  
}
