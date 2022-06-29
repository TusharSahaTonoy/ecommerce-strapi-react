import React from 'react'
import { Icon } from '@iconify/react';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row content">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <h2>Eum ipsam laborum deleniti velitena</h2>
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <ul>
                            <li><Icon icon="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                            <li><Icon icon="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                            <li><Icon icon="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                        </ul>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
