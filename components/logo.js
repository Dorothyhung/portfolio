import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 40px;
    padding: 10px;

    &:hover img {
        transform: rotate(330deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/strawberry-logo${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <LogoBox>
                <Image src={footPrintImg} width={30} height={30} alt="logo"/>
                <Text
                    color={useColorModeValue('rose.800', 'rose.200')}
                    fontFamily='Source Code Pro'
                    fontWeight="bold"
                    ml={3}>
                        Dorothy Hung
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo