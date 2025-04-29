import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate();

    const handleGoPrevPage = () => {
        navigate(-1)
    }

    if (error && error.status === 404) {
        return (
            <section className="error-page">
                <div className="error-image">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="Error GIF" />
                    </figure>
                </div>
                <div className="error-message">
                    <h1>Oops! Something went wrong.</h1>
                    <p>We couldn't find the page you were looking for. Please check the URL or go back to the home page.</p>

                </div>
                <div className='h-auto w-full border flex flex-col items-center justify-center p-1'>
                <NavLink to="/" className="go-home-btn">Go to back Home page</NavLink>
                <NavLink onClick={handleGoPrevPage} className="go-home-btn cursor-pointer">Go back to previous page</NavLink>
                </div>
            </section>
        );
    };

    console.log(error);

    return <h1>The page you are looking for does not exist!</h1>;
}
