import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
          <p>Software Engineer</p>
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
        
        <Paragraph>Dorothy is a dedicated software engineer at Microsoft with a passion for building projects. One of these projects is called {' '} 
            <Link href="https://spotifyaudioanalysis.com/" >SpotifyAnalysis</Link>
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects">
          
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My Portfolio
          </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Bio</Heading>
          
        <BioSection>
          <BioYear>2002</BioYear>
          Born in WA, USA.
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Data services internship at Costco
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Software engineer internship at KBR
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Infrastructure engineer internship at Nelnet
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          Software engineer internship at Microsoft
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          Completed bachelors degree in software development at Bellevue College
        </BioSection>

        <BioSection>
          <BioYear>2025 to present</BioYear>
          Software engineer at Microsoft
        </BioSection>

        <Box align="center" my={4}>
          <a href="https://www.linkedin.com/in/dorothyhung1/" target="_blank">
          
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My LinkedIn
          </Button>
          </a>
        </Box>

      </Section>
    </Container>
  )
}

export default Page
