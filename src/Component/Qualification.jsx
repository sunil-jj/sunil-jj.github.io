import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,Box,UnorderedList,ListItem, Text} from '@chakra-ui/react'


export default function Qualifications({isOpen,onClose}) {
    
    return (
      <Box>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Qualification Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <UnorderedList>
                <Text fontSize={["md","lg","xl"]} mt="2%" color="teal" fontWeight="semibold"> Masai School </Text>
                <ListItem>Full Stack Web Developement Training From Masai School(2022-2023)</ListItem>
                <Text fontSize={["md","lg","xl"]} mt="2%" color="teal" fontWeight="semibold"> Graduation</Text>
    
                <ListItem>BE (2013-2017) Atria Institute of Technology, Bengaluru</ListItem>
                {/* <Text fontSize={["md","lg","xl"]} mt="2%" color="teal" fontWeight="semibold"> Higher Secondry & High School</Text> */}
                {/* <ListItem> 12th M.P. Board with 65% marks from Model Hr. Sec. School Rewa(M.P.)</ListItem>
                <ListItem>10th M.P. Board with 90% marks from Geeta Jyoti Hr. Sec. School Rewa(M.P.)</ListItem> */}
                
            </UnorderedList>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }