import { VStack } from 'native-base';
import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import BackgroundImage from '../../assets/images/background.png';

type BackgroundContainerProps = {
  children: ReactNode;
};

export default function BackgroundContainer({
  children,
}: BackgroundContainerProps) {
  return (
    <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
      <VStack pt={5} flex={1}>
        {children}
      </VStack>
    </ImageBackground>
  );
}
