import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'; //gives us history of path tht we're on and compare it to url from movieState
import {MovieState} from '../movieState';
//animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname; //gives us url
    const [movies, useMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    //useEffect will run when component is mounted and run the specific info when it's clicked
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]); //anytime the history of movies or url changes, useEffect will run, that's what the [] is set for whn those things are run

    return(
        <>
            {movie && ( /*this basically is saying, render the pg when the movie is available, othrwise it won't render bc it will throw error that useState for movie is null bc it's still loading*/
                <StyledDetails variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
                    <StyledHeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </StyledHeadLine>
                    <StyledAwards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title} />
                        ))}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={movie.secondaryImg} alt="movie"/>
                    </StyledImageDisplay>
                </StyledDetails>
            )}
        </>
    );
};

const StyledDetails = styled(motion.div)` //when you have a styled tag but want to animate it, you must change the .div part with (motion.div)
    color: white;
`;
const StyledHeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate()(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    color: white;
`;
const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;
const StyledImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

//Award component
const Award = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}

export default MovieDetail;