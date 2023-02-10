"use client";

import { ChakraProvider} from '@chakra-ui/react';

import Mainbox from '@/component/Mainbox';
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import Pricing from '@/component/Pricing';
import Features from '@/component/Features';
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Mainbox />
        <Pricing />
        <Features/>
      </ChakraProvider>
    </main>
  );
}
