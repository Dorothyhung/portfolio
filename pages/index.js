import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={5} align="center">
                Hello, I&apos;m a software engineer based in Redmond, WA
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Dorothy Hung
                    </Heading>
                    <p>Software Engineer</p>
                </Box>

                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image 
                        borderColor="rose.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="200px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="images/strawberry-logo.png" 
                        alt="profile image" />
                </Box>
            </Box>
        </Container>
    )
}

export default Page