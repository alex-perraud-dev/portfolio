import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import * as PropTypes from "prop-types";
import Carousel from "@/components/carousel";
import {data} from "../../public/data/data";
import {useEffect, useState} from "react";
import {Box, Button, Text} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"; // will return static version on server and "live" version on client
import StepsIndicator from '@/components/StepsIndicator';

function Heading() {
    return null;
}

Heading.propTypes = {
    size: PropTypes.string,
    mb: PropTypes.number,
    children: PropTypes.node
};

const variants = {
    initial: {
        y: '-200px',
        opacity: 0,
    },
    animate: {
        y: '0',
        opacity: 1,
    },
    exit: {
        y: '200px',
        opacity: 0,
    },
};
const TypingAnimation = ({text}) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((displayedText) => {
                if (currentIndex >= text.length + 1) {
                    clearInterval(intervalId);
                    return displayedText;
                }
                currentIndex++;
                return text.substring(0, currentIndex);
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);

    return <Text mt={6} fontWeight={700} fontSize="5xl">{displayedText}</Text>;
};
export default function skills() {

    const [carouselVariants, setCarouselVariants] = useState(variants);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    const [carouselData, setCarouselData] = useState(data[currentDataIndex].items);
    const [displayText, setDisplayText] = useState(data[currentDataIndex].title);

    const handleClickUp = () => {
        if (currentDataIndex > 0) {
            setDisplayText(data[currentDataIndex - 1].title);
            setCarouselData(data[currentDataIndex - 1].items);
            setCurrentDataIndex(currentDataIndex - 1);

            setCarouselVariants({
                initial: {
                    y: '200px',
                    opacity: 0,
                },
                animate: {
                    y: '0',
                    opacity: 1,
                },
                exit: {
                    y: '-200px',
                    opacity: 0,
                },
            });
        }
    };

    const handleClickDown = () => {
        if (currentDataIndex < data.length - 1) {
            setDisplayText(data[currentDataIndex + 1].title);
            setCarouselData(data[currentDataIndex + 1].items);
            setCurrentDataIndex(currentDataIndex + 1);

            setCarouselVariants({
                initial: {
                    y: '-200px',
                    opacity: 0,
                },
                animate: {
                    y: '0',
                    opacity: 1,
                },
                exit: {
                    y: '200px',
                    opacity: 0,
                },
            });
        }
    };
    return (
        <>
            <Head>
                <title>ALEX'S PORTFOLIO</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Box display="flex">
                    <Box flexGrow={1} display="flex" justifyContent="center" flexDirection="column">
                        <StepsIndicator totalSteps={data.length} currentStep={currentDataIndex} />
                    </Box>
                    <Box flexGrow={9}>
                        <TypingAnimation text={displayText} />
                        <div className={styles.center}>
                            <Button mb={5} onClick={handleClickUp}>
                                <ChevronUpIcon />
                            </Button>
                            <Carousel data={carouselData} variants={carouselVariants} />
                            <Button mt={5} onClick={handleClickDown}>
                                <ChevronDownIcon />
                            </Button>
                        </div>
                    </Box>
                </Box>
            </main>
        </>
    )
}