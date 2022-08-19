import React from 'react';
import "./home.css";
  
function Home() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                      <h1>AUZONE</h1>

                    </div>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href='#student'>Student</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            7 Best Tips To Speed Up Your 
                            Job Search in 2022
                        </h1>
                        <p class="text-small">
                            Hunting down a relevant job requires 
                            proper techniques for showcasing your 
                            potential to the employer. But with 
                            the advent of COVID-19, it has become 
                            a bit challenging and competitive to 
                            reach out for your dream job. Many 
                            individuals have lost their jobs 
                            during these times, and on the other 
                            hand, freshers are facing difficulties
                            while applying for a new job. 
                        </p>
                    </div>
                </div>
            </section>
           
            
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default Home;
