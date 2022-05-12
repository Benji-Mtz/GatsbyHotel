import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

// npm i gatsby-background-image 
import BackgroundImage from 'gatsby-background-image';


const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63,.8), rgba(34,49,63,.8) );
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0%;
        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 3rem;
        }
    }
`;



const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "cancun.jpg"}) {
                sharp:childImageSharp {
                    fluid {
                        # srcSetWebp
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    // console.log(image.sharp.fluid);
    console.log(image);

    return (
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft" >
            <TextoImagen>
                <h1>Bienvenido a Hotel Tulum</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImageBackground>
    )
}

export default ImagenHotel
