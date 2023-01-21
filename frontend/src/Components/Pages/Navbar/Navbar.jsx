import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {AiOutlineShoppingCart}from "react-icons/ai"
import {BsSearch} from "react-icons/bs"


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bgColor={"white"} position={"fixed"} width={"100%"}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}
          <img  style={{width:"70px"}}
          
          
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtlAr74_JaUSbsCU8FwTE6rlP-1BV_5b5dw&usqp=CAU" />

            <Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={50}gap={"40px"} mt={"50px"}  fontWeight={400}>
              
            <Text>Mens </Text>
            <Text>Womens </Text>
            <Text>Mobile Covers </Text>
          </Flex>
            </Box>
        </Flex>
        {/* <Box>

        <Input width={"100%"} backgroundColor={"white"} mr={"30px"}  color={"black"} placeholder='Search from here ' />
        <BsSearch/>
        </Box> */}

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
           Login
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>

       <AiOutlineShoppingCart/>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
}



