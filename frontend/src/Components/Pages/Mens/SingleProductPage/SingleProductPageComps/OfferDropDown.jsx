import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box,Heading,Text } from "@chakra-ui/react"




const OffersDropDown=()=>{
    return(
        
<Accordion defaultIndex={[3]} allowMultiple>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Offers
            </Box>
            {isExpanded ? ("-"
            //   <MinusIcon fontSize='12px' />
            ) : ("+"
            //   <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Offers
            </Box>
            {isExpanded ? ("-"
            //   <MinusIcon fontSize='12px' />
            ) : ("+"
            //   <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Offers
            </Box>
            {isExpanded ? ("-"
            //   <MinusIcon fontSize='12px' />
            ) : ("+"
            //   <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Offers
            </Box>
            {isExpanded ? ("-"
            //   <MinusIcon fontSize='12px' />
            ) : ("+"
            //   <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
      <Heading size="lg">

        PRODUCT DESCRIPTION
      </Heading>

        <Text>

        Take inspiration from the ominous apple-loving demon with this Deathnote Ryuk Men's Oversized T-shirt. Pair this black t-shirt with chinos &, Chelsea boots, and a clean-cut denim jacket for a suave look.
        Country of Origin - India
        </Text>
      <Text>

        Manufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amne, Bhiwandi,Thane, Maharashtra 421302
      </Text>
      <Text>

        Packed By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amne, Bhiwandi,Thane, Maharashtra 421302
      </Text>

        Commodity - Men's T-Shirt
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    )
}


export default OffersDropDown