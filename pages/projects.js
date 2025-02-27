import { Container, Heading, SimpleGrid, Divider, Box, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSpotifyAnalysis from '../public/images/projects/spotify_thumbnail.png'
import thumbImpervious from '../public/images/projects/impervious_thumbnail.png'

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="spotify-analysis"
            title="Spotify Analysis"
            thumbnail={thumbSpotifyAnalysis}
            link="https://spotifyaudioanalysis.com/"
            newtab={true}
          >
            A Spotify track analyzer for audio features
          </WorkGridItem>

          <Box align="center" my={4}>
            <a href="https://github.com/Dorothyhung/P320-Spotify-API-Project" target="_blank">
            
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Source
            </Button>
            </a>
          </Box>
        </Section>

        <Section>
          <WorkGridItem
            id="impervious"
            title="Impervious Neural Net Prediction"
            thumbnail={thumbImpervious}
            link="https://impervious-google-maps.vercel.app/"
            newtab={true}
          >
            Interactive map of impervious neural net prediction
          </WorkGridItem>

          <Box align="center" my={4}>
            <a href="https://github.com/Dorothyhung/impervious_flask_app" target="_blank">
            
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Source
            </Button>
            </a>
          </Box>
        </Section>

        <Section>
          <WorkGridItem
            id="soundsafe"
            title="SoundSafe"
            thumbnail={thumbImpervious}
            link="https://github.com/Dorothyhung/SoundSafeV1"
            newtab={true}
          >
            Mobile app that detects unsafe sound levels
          </WorkGridItem>

          <Box align="center" my={4}>
            <a href="https://github.com/Dorothyhung/SoundSafeV1" target="_blank">
            
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Source
            </Button>
            </a>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
