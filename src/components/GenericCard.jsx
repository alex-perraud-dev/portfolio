import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue, Flex, Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const GenericCard = ({image, description, title, alt}) => {
    GenericCard.propTypes = {
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    };
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        alt={alt}
                        src={
                            image
                        }
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Blog
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {description}
                    </Text>
                </Stack>
                <Flex mt={5} mx={10} justifyContent={"center"}>
                    <Button
                        px={8}
                        colorScheme={'facebook'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-0.5rem)',
                            boxShadow: 'lg',
                            bg: "red",
                            color: "cyan"
                        }}
                        onClick={() => {
                            // setOverlay(<OverlayTwo/>)
                            //onOpen()
                        }}
                    >
                        More details
                    </Button>
                </Flex>
            </Box>
        </Center>
    );
}
export default GenericCard;
