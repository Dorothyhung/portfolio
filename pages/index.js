import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

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

      <Section dlay={0.1}>
        <Heading as="h3" variant="section-title">Projects</Heading>
        <Paragraph>Dorothy is a dedicated software engineer at Microsoft with a passion for building projects. One of these projects is called {' '} 
            <NextLink href="https://spotifyaudioanalysis.com/" target="_blank"><Link>SpotifyAnalysis</Link></NextLink>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
