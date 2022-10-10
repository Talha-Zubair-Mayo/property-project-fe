import React from 'react'
import LoadingScreen from "react-loading-screen";
const Loading = ({isLoading}) => {
    return (
        <LoadingScreen
            loading={isLoading}
            bgColor="rgba(255,255,255,0.8)"
            spinnerColor="#ff385c"
            textColor="#ff385c"
            // logoSrc="https://images.all-free-download.com/images/graphicwebp/the_legends_logo_luxury_shiny_texts_decor_6920058.webp"
            text="Loading..."
        >
        </LoadingScreen>
    )
}

export default Loading