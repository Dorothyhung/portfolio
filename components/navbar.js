import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    propNames,
    ChakraLink
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref legacyBehavior>
            <Link 
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#fbaebb' : inactiveColor}>{children}</Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = propNames
    return (
        <Box
            // position="fixed"
            as="nav"
            v="100%"
            bg={useColorModeValue('#ffffff40', '#20202300')}
            style={{backdropFilter:'blur(10px)'}}
            zIndex={1}
            {...props}>
                <Container 
                    display="flex" 
                    p={2} 
                    maxW="container.md" 
                    wrap="wrap"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </Heading>
                    </Flex>

                    <Stack
                        direction={{base: 'column', md: 'row'}}
                        display={{base: 'none', md: 'flex'}}
                        width={{base: 'full', md: 'auto'}}
                        alignItems="center"
                        flexGrow={1}
                        mt={{ base: 4, nmd: 0 }}
                    >
                        <LinkItem href="/projects" path={path}>Projects</LinkItem>
                        <LinkItem href="/works" path={path}>Works</LinkItem>
                        <LinkItem href="https://github.com/Dorothyhung/portfolio" target="_blank" path={path}>Source</LinkItem>
                        <LinkItem href="https://www.linkedin.com/in/dorothyhung1/" target="_blank" path={path}>Source</LinkItem>
                        
                    </Stack>

                    <Box flex={1} align="center">
                        <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                            <Menu>
                                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="0ptions" />
                                <MenuList>
                                    <Link href="/">
                                        <MenuItem>About</MenuItem>
                                    </Link>
                                    <Link href="/projects">
                                        <MenuItem>Projects</MenuItem>
                                    </Link>
                                    {/* <NextLink href="/projects" passHref> */}
                                        {/* <MenuItem as={Link}>Projects</MenuItem> */}
                                    {/* </NextLink> */}
                                    <MenuItem as={Link} href="https://github.com/Dorothyhung/portfolio" target="_blank">View Source</MenuItem>
                                    <MenuItem as={Link} href="https://www.linkedin.com/in/dorothyhung1/" target="_blank">LinkedIn</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>

                </Container>
            </Box>
    )
}

export default Navbar