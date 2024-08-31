import {useEffect, useState} from 'react'
import {Box, IconButton, Stack, Flex} from '@chakra-ui/react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import GenericCard from "@/components/GenericCard";
import {motion} from "framer-motion";
import PropTypes from "prop-types";


const MotionIconButton = motion(IconButton);

const Carousel = ({data, variants}) => {
    Carousel.propTypes = {
        data: PropTypes.array.isRequired,
        variants: PropTypes.object.isRequired
    };
    const [currentVariants, setCurrentVariants] = useState(variants);

    const updateVariants = (direction) => {
        if (direction === 'next') {
            setCurrentVariants({
                initial: {
                    x: '200px',
                    opacity: 0,
                },
                animate: {
                    x: '0',
                    opacity: 1,
                },
                exit: {
                    x: '-200px',
                    opacity: 0,
                },
            });
        } else if (direction === 'previous') {
            setCurrentVariants({
                initial: {
                    x: '-200px',
                    opacity: 0,
                },
                animate: {
                    x: '0',
                    opacity: 1,
                },
                exit: {
                    x: '200px',
                    opacity: 0,
                },
            });
        }
    };

    useEffect(() => {
        setCurrentVariants(variants);
        //updateVariants(variants.direction);
    }, [variants, updateVariants]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0)


    const imageToShow = (index) => {
        const validIndex = (index + data.length) % data.length;
        return data[validIndex] ? data[validIndex] : {};
    }
    const handleNext = () => {
        const nextIndex = (currentImageIndex + 1) % data.length;
        setCurrentImageIndex(nextIndex);
        updateVariants('next');
    }

    const handlePrevious = () => {
        const previousIndex = currentImageIndex === 0 ? data.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(previousIndex);

        updateVariants('previous');
    }
    return (

        <Flex direction="column" justify="center" align="center">
            <Stack direction="row" spacing={10}>
                <Flex direction={"column"} justifyContent="center">
                    <MotionIconButton
                        width={"2rem"}
                        aria-label="Next image"
                        icon={<FaChevronLeft/>}
                        onClick={handlePrevious}
                        ml={2}
                        colorScheme="blue"
                        whileHover={{scale: 1.8}}
                        whileTap={{scale: 0.8}}></MotionIconButton>
                </Flex>
                <motion.div
                    key={imageToShow(currentImageIndex - 1).id}

                    variants={currentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 1}}>
                    <Box>
                        <GenericCard
                            image={imageToShow(currentImageIndex - 1).src}
                            description={imageToShow(currentImageIndex - 1).desc}
                            alt={imageToShow(currentImageIndex - 1).alt}
                            title={imageToShow(currentImageIndex - 1).title}/>
                    </Box>
                </motion.div>
                <motion.div
                    key={imageToShow(currentImageIndex).id}
                    variants={currentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 1}}>
                    <Box>
                        <GenericCard
                            image={imageToShow(currentImageIndex).src}
                            description={imageToShow(currentImageIndex).desc}
                            alt={imageToShow(currentImageIndex).alt}
                            title={imageToShow(currentImageIndex).title}/>
                    </Box>
                </motion.div>
                <motion.div
                    key={imageToShow(currentImageIndex + 1).id}
                    variants={currentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 1}}>
                    <Box>
                        <GenericCard
                            image={imageToShow(currentImageIndex + 1).src}
                            description={imageToShow(currentImageIndex + 1).desc}
                            alt={imageToShow(currentImageIndex + 1).alt}
                            title={imageToShow(currentImageIndex + 1).title}/>
                    </Box>
                </motion.div>
                <Flex direction={"column"} justifyContent="center">
                    <MotionIconButton
                        width={"2rem"}
                        aria-label="Next image"
                        icon={<FaChevronRight/>}
                        onClick={handleNext}
                        mr={2}
                        colorScheme="blue"
                        whileHover={{scale: 1.8}}
                        whileTap={{scale: 0.8}}></MotionIconButton>
                </Flex>
            </Stack>
        </Flex>
    )
}

export default Carousel
