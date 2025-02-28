import {
  Container,
  Box,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, Year, Company, BioHeader } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="{useColorModeValue('rose.800', 'rose.200')}"
        p={3}
        mb={5}
        align="center"
      >
        Hello, I&apos;m a software engineer based in Redmond, WA
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dorothy Hung
          </Heading>
          <p>Software Engineer at Microsoft</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="rose.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            display="inline-block"
            borderRadius="full"
            src="images/strawberry-logo.png"
            alt="profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">Projects</Heading>
        
        <Paragraph>Dorothy is a dedicated software engineer with a passion for building projects and making real world impact. 
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects">
          
          <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
            My Portfolio
          </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Experience</Heading>

        <BioSection>
          <BioHeader>
            <Year>2025</Year>
            <Company>Microsoft</Company>
          </BioHeader>
          Software engineer at Microsoft
        </BioSection>

        <BioSection>
          <BioHeader>
            <Year>2025</Year>
            <Company>Nelnet</Company>
          </BioHeader>
          Infrastructure engineer at Nelnet
        </BioSection>

        <BioSection>
          <BioHeader>
            <Year>2024</Year>
            <Company>Microsoft</Company>
          </BioHeader>
          SWE internship at Microsoft
        </BioSection>

        <BioSection>
          <BioHeader>
            <Year>2023</Year>
            <Company>Nelnet</Company>
          </BioHeader>
          Infrastructure engineer internship at Nelnet
        </BioSection>

        <BioSection>
          <BioHeader>
            <Year>2024</Year>
            <Company>Bellevue College</Company>
          </BioHeader>
          Completed bachelors degree in Software Development at Bellevue College
        </BioSection>

        <BioSection>
          <BioHeader>
            <Year>2023</Year>
            <Company>KBR</Company>
          </BioHeader>
          SWE internship at KBR
        </BioSection>

        <BioSection>
          <BioHeader>
            <Year>2023</Year>
            <Company>Costco</Company>
          </BioHeader>
          Data operations internship at Costco
        </BioSection>

        <Box align="center" my={4}>
          <a href="https://www.linkedin.com/in/dorothyhung1/" target="_blank">
          
          <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
            My LinkedIn
          </Button>
          </a>
        </Box>

      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">Education</Heading>
        
        <BioSection>
          <BioHeader>
            <Year>2024</Year>
            <Company>Bellevue College</Company>
          </BioHeader>
          Bachelors in Software Development
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
