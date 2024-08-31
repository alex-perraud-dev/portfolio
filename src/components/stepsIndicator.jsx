import React from 'react';
import { Box, Circle } from '@chakra-ui/react';

const StepsIndicator = ({ totalSteps, currentStep }) => {
    return (
        <Box display="flex"  flexDirection={"column"} justifyContent="center" alignItems="center" my={4}>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <Circle
                    mb={5}
                    key={index}
                    size="20px"
                    bg={index === currentStep ? 'blue.500' : 'gray.300'}
                    mx={1}
                    transition="background-color 0.5s ease-in-out"
                />
            ))}
        </Box>
    );
};

export default StepsIndicator;
