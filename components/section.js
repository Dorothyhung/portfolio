import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv bg={useColorModeValue('#f0f9f8', '#2020230')}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    my={6}
    px={6}
    py={2}
    borderRadius="xl"
  >
    {children}
  </StyledDiv>
)

export default Section
