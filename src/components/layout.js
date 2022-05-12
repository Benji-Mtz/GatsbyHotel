import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import { css, Global } from '@emotion/react';

// npm i @emotion/core @emotion/styled @emotion/react gatsby-plugin-emotion
const Layout = (props) => {
    return (
        <>
            {/* Global tiene los estilos globales de todo lo que este dentro de LAYOUT */}
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />

            {/* Helmet contiene todo lo que esta antes del <body> */}
            <Helmet>
                <title>
                    Gatsby Hotel
                </title>
                {/* Etiquetas sin label de cierre se cierran con /> ejem <link ... /> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                {/* <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet" /> */}
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
            </Helmet>
            
            {/* contiene hotel gatsby y el nav */}
            <Header />

            {/* este props.children es el inyector de codigo para el contenido de LAYOUT */}
            { props.children }   
        </>
    )
}

export default Layout;