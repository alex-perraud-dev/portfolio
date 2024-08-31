import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    Image,
    useDisclosure,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {useRouter} from "next/router";

const Links = ['Skills', 'Experiences', 'Projects'];

const NavLink = ({children}, {isActive}) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        bg={isActive ? useColorModeValue('gray.200', 'gray.700') : ''}
        href={children.toString().toLowerCase()}
    >
        {children}
    </Link>
);

export default function Navbar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const router = useRouter();


    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    fontSize={20}
                    h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex fontWeight={500} h={16} alignItems={'center'} justifyContent={'start'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                            aria-label={'Open Menu'}
                            display={{md: 'none'}}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} fontSize={20} alignItems={'center'}>
                            <Link href={'/'}> <Image
                                height={50} src='/logo/alex_logo.png' alt="logo d'Alex"/></Link>

                        </HStack>
                    </Flex>
                    <Flex fontWeight={500} h={16} alignItems={'center'}>
                        <HStack

                            mr={4}
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => (
                                <NavLink key={link}
                                         isActive={router.asPath === `/${link.toLowerCase()}`}

                                >{link}</NavLink>
                            ))}
                        </HStack>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}