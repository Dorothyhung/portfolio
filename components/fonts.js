import { Global } from '@emotion/react'

const Fonts = () => {
    return(
    <Global
        styles={`
            @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");
            `}/>
    )
}

export default Fonts