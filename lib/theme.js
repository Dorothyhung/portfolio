import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const style = {
    global: props => ({
        body: {
            bg: mode('#ffdcdc', '#d39da6')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOFfset: 6,
                textDecorationColor: '#ffdcdc',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#36030c', '#feecef')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Source Code Pro'",
    body: "'Source Code Pro'"
}

const colors = {
    lightpink: '#ffdcdc'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    style,
    components,
    colors,
    fonts
})

export default theme