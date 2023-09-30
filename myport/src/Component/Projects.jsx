import { Box, SimpleGrid,Image,Text, Heading,Link,Stack,ButtonGroup,} from "@chakra-ui/react";

import mrchef from "../Image/mrchefpic.png"
import faballay from "../Image/faballeypic.png"
import skin from "../Image/skinstore.png"
import port from "../Image/portfoliocover1.png"



export default function Projects(){

    const projects = [
        {
            name:"Mr-Chef",
            image:mrchef,
            description:"A custome made food ordering platform with design being taken from behance.",
            github:"https://github.com/Sunil-JJ/Mr-Chef",
            live:"https://mr-chef-two.vercel.app/",
            techStack : "ReactJS | ChakraUI | REDUX | JAVASCRIPT | Node JS | Express JS | MongoDB | JSON"
        },
        {
            name:"FabAlley-clone",
            image:faballay,
            description:"A clone of one of the India's leading online cloth shopping store",
            github:"https://github.com/Sunil-JJ/FabAlley",
            live:"https://tata1mg-clone-project.netlify.app/",
            techStack : "HTML | CSS | JAVASCRIPT | JSON Server "
        },
        {
            name:"SkinStore-Clone",
            image:skin,
            description:"An e-commerce platfrom for various make-up apparels with login, shop and checkout user flow",
            github:"https://github.com/saintlypioneer/skinstore-clone",
            live:"https://thunderous-horse-13608c.netlify.app/",
            techStack : "HTML | CSS | JAVASCRIPT"
        },
      
        {
            name:"Portfolio Website",
            image:port,
            description:"Personal portfolio website",
            github:"https://github.com/pranshushuklagithub/pranshushuklagithub.github.io.git",
            live:"https://pranshushuklagithub.github.io",
            techStack : "ReactJS | ChakraUI | JAVASCRIPT | CSS | REDUX"
        }
        
    ]
   

    return <Box id="projects" p="6%" w="100%">
        <Heading  fontSize={["xl","2xl","3xl"]} mb="2%"> Projects</Heading>
        <SimpleGrid w="100%" textAlign="left" p="4%" gap ="1%" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} m="auto" className="project-card" id="proj-card">
        
        {
            projects.map((e)=>{
                return (

        <Box w="90%" h="600px" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" className="project-card"  alignItems="center" borderRadius="2%" p="3%" m="auto" id="project-detail-card">
                <Box p="2%"  h="500px">
                    <Image src={e.image} alt={e.name} borderRadius='lg' h="250px" id="proj-cover" className="project-title"/>
                    <Stack mt='3' spacing='1'  h="210px">
                        <Heading  h="30px" fontSize={["13px","17px","25px"]} mt="3%" mb="3%" className="project-title">{e.name}</Heading>
                        <Text  h="60px" fontSize={["10px","14px","17px"]} fontWeight="bold" mt="1%"  className="project-description">{e.description}</Text>
                        <Text  h="60px" fontSize={["10px","13px","15px"]} fontWeight="bold" mt="1%"  className="project-tech-stack">{e.techStack}</Text>
                    </Stack>
                </Box>
            
            <Box p="2%"  h="60px" mt="2%" id="button-box">
                <ButtonGroup spacing='3' id="project-buttons">
                <Link href={e.github} isExternal><Box  as ="Button"  bg='teal' w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}}  color="white" mr="1%" className="project-github-link" borderRadius="lg">Github </Box></Link>
                <Link href={e.live} isExternal ><Box as ="Button" bg='teal' w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]} className="project-deployed-link"  color="white" _hover={{bg:"green.300",color:"black"}} borderRadius="lg">Live</Box></Link>
                </ButtonGroup>
            </Box>
        </Box>
        )})
        }

        </SimpleGrid>
    </Box>
}