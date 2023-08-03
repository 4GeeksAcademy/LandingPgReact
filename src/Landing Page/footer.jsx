import React, { useState } from 'react';

function Footer(args) {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <div className="text-center p-4 bg-dark text-light">
                Copyright ©
                <a className="text-reset fw-bold" href="https://google.com" target="_blank" style={{textDecoration: 'none'}}> Example Website </a>
                2023
            </div>
        </footer>
    );
}

export default Footer;