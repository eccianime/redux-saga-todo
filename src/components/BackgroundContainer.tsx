import { VStack } from 'native-base';
import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import BackgroundImage from '../assets/images/background.png';

export default function BackgroundContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
      <VStack px={5} pt={5} flex={1}>
        {children}
      </VStack>
    </ImageBackground>
  );
}
