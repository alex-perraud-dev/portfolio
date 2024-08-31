import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
    CgCPlusPlus, DiJava,
    FaSchool, GrAndroid,
    IoSchoolSharp,
    MdOutlineWork, SiCisco, SiCss3, SiDocker, SiHtml5,
    SiJavascript, SiNeo4J,
    SiPhp
} from "react-icons/all";
import {FaGithub} from "react-icons/fa";
import {
    Button,
    Center,
    Highlight,
    Tag,
    Text,
    TagLabel,
    Tooltip,
    useDisclosure
} from "@chakra-ui/react";
import React, {useState} from "react";
import Modal from "@/components/modal";

const Timeline = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };
    return <VerticalTimeline
            lineColor={'#3f4c65'}
        >

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: 'rgb(27,46,73)', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                date="  202 1 - 2024"
                dateClassName="ml-2"
                iconStyle={{background: 'rgb(87,91,96)', color: '#fff'}}
                icon={<MdOutlineWork/>}
            >

                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Orange || Lyon, France.</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement

                className="vertical-timeline-element--work"
                date="2021 - 2024"
                contentStyle={{background: 'rgb(27,46,73)', color: '#fff'}}
                iconStyle={{background: 'rgb(87,91,96)', color: '#fff'}}
                icon={<FaSchool/>}
            >
                <h3 className="vertical-timeline-element-title">PREPARATION OF A MASTER'S IN COMPUTER SCIENCE AND
                    NETWORK ENGINEERING</h3>
                <h4 className="vertical-timeline-element-subtitle">CPE, Graduate school of digital science, Lyon,
                    France.</h4>
                A 3-year integrated work-study programme in computer science and networks.
                <Tooltip fontSize={"md"} label='Docker' bg='gray.300' color='black'>
                    <span> <SiDocker/> </span>
                </Tooltip>
                <Tooltip fontSize={"md"} label='Docker' bg='gray.300' color='black'>
                    <span>  <SiCisco/> </span>
                </Tooltip>
                <Tooltip fontSize={"md"} placement={"auto"} label='Android' bg='gray.300' color='black'>
                    <span>
                        <Tag
                            size={"md"}
                            key={"md"}
                            borderRadius='full'
                            variant='solid'
                            colorScheme='blue'
                        >
      <TagLabel mr={2}>Android </TagLabel>
      <GrAndroid/>
    </Tag></span>
                </Tooltip>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021 - 2 months"
                contentStyle={{background: 'rgb(27,46,73)', color: '#fff'}}
                iconStyle={{background: 'rgb(87,91,96)', color: '#fff'}}
                icon={<MdOutlineWork/>}
            >
                <h3 className="vertical-timeline-element-title">WEB DEVELOPER</h3>
                <h4 className="vertical-timeline-element-subtitle">AB6NET || Bourg-en-Bresse, France.</h4>
                <p>
                    <Highlight
                        query={['PHP', 'Symfony', 'JavaScript']}
                        styles={{px: '2', py: '1', rounded: 'full', bg: 'teal.100'}}
                    >
                        First internship in web development. Participation in the creation of sevreal sites in PHP and
                        JavaScript with Symfony framework for merchants.

                    </Highlight>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2021"
                contentStyle={{background: 'rgb(27,46,73)', color: '#fff'}}
                iconStyle={{background: 'rgb(87,91,96)', color: '#fff'}}
                icon={<IoSchoolSharp/>}
            >
                <h3 className="vertical-timeline-element-title">COMPUTER SCIENCE DUT - 2 YEAR DIPLOMA</h3>
                <h4 className="vertical-timeline-element-subtitle">IUT Lyon 1, Bourg-en-Bresse, France.</h4>
                <p>
                    Learning many languages :
                    - <SiPhp/> <SiNeo4J/> <SiHtml5/> <SiCss3/> <DiJava/> <SiJavascript/> <CgCPlusPlus/> <FaGithub/>
                    <SiCisco/>
                </p>
                <Center>
                    <Button

                        px={8}
                        bg={'aquamarine'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-0.5rem)',
                            boxShadow: 'lg',
                        }}
                        onClick={() => {
                          onOpen()
                        }}
                    >
                        More zadazd
                    </Button>
                </Center>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - 2019"
                contentStyle={{background: 'rgb(27,46,73)', color: '#fff'}}
                iconStyle={{background: 'rgb(87,91,96)', color: '#fff'}}
                icon={<IoSchoolSharp/>}
            >
                <h3 className="vertical-timeline-element-title">BACCALAUREAT</h3>
                <h4 className="vertical-timeline-element-subtitle">Lycée Lalande, Bourg-en-Bresse, France.</h4>
                <p>
                    Scientific baccalaureat physics, maths and computer science
                </p>
            </VerticalTimelineElement>
                <Modal
                    title="Titre de la modal"
                    description="Contenu de la modal"
                    isOpen={isOpen}
                    onClose={onClose}
                />


        </VerticalTimeline>
  };
export default Timeline;
