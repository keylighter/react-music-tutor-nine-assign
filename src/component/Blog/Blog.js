import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='container pt-5 pb-5 '>
                <h2 className='pb-5'>Articles</h2>
                <div className='pt-5 article-container'>
                    <h4>Guitar Tapping Techniques</h4>
                    <p>While tapping is most commonly observed on electric guitar, it may apply to almost any string instrument, and several instruments have been created specifically to use the method. The Bunker Touch-Guitar (developed by Dave Bunker in 1958) is designed for the technique, but with an elbow rest to hold the right arm in the conventional guitar position. The Chapman Stick (developed in the early 1970s by Emmett Chapman) is an instrument designed primarily for tapping, and is based on the Free Hands two-handed tapping method invented by Chapman in 1969 where each hand approaches the fretboard with the fingers aligned parallel to the frets. The Hamatar, Mobius Megatar, Box Guitar, and Solene instruments were designed for the same method. The NS/Stick and Warr Guitar are also built for tapping, though not exclusively. The harpejji is a tapping instrument which is played on a stand, like a keyboard, with fingers typically parallel to the strings rather than perpendicular. All of these instruments use string tensions less than a standard guitar, and low action to increase the strings' sensitivity to lighter tapping.</p>
                </div>
                <div className='pt-5 article-container'>
                    <h4>Defining Different Types Of Vocal Technique</h4>
                    <p>You need to work on a diverse range of vocal techniques to become a complete and well-rounded singer. You will find that your technique becomes greater than the sum of its parts when you work on multiple facets of your voice.

                        Working with a range of styles will also help you understand your voice better. Whilst this article mainly focuses on pop vocal technique, try looking into rock vocals, hip-hop and  vocal technique. You have to sing in different ways for different styles and this will help you become a more complete singer.</p>
                </div>
                <div className='pt-5 article-container'>
                    <h4>Drum Hacks Anyone Can Do</h4>
                    <p>Have you ever showed up to a gig and realized you needed to fix or replace something last minute? How can you make do with what you have? Master of drum-related problem solving, David Raouf, probably has a solution.

                        You may know David as rdavidr on YouTube. His popular channel features drum hacks, alterations and restorations, cool drum gadgets, and anything else he can get his hands on. A bona fide drumming handyman!

                        David came to Drumeo to film courses on tuning and drum maintenance/repair, as well as his brand new show for Drumeo Edge members (called ‘DIY Drum Experiments’). As if that wasn’t enough, he also shared 25 hacks any drummer can do, which you’ll learn in this video!

                        Whether he’s modifying sounds with broken cymbals or using graffiti remover to dissolve logos on drum heads, David has a tip for almost anything.</p>
                </div>
                <div className='pt-5 article-container'>
                    <h4>Mastering Piano</h4>
                    <p>You want to develop awesome piano technique. Good. Trust me, getting that next level technique will skyrocket your playing ability. All of a sudden your fingers will feel like the keyboard is their home, and everything you play will be easier and smoother. Oh, and you’ll be able to play the cool flashy stuff to impress your friends .

                        And here’s the best thing. Piano technique has been researched heavily. It’s easy to research because it’s a physical phenomenon that we can see and measure (as opposed to something like sight-reading where most of the action happens in your brain), and many people have come up with step-by-step ways to develop it. So all you have to do is follow the step-by-step process and you know you’ll have rock solid technique by the end of it.</p>
                </div>
                <div className='pt-5 article-container'>
                    <h4>How to Play Flute From Your Heart + Soul</h4>
                    <p>The air changes, becoming electrically charged with something. Your bum ceases to wiggle about in your seat. You stop worrying about that WhatsApp message niggling you and quit second-guessing whether you’ve locked your doors. You lean forward, curious. The music invites you to journey somewhere you’ve needed to go. The phrases you hear are your phrases. You inhale and exhale with the performer; their tensions are suddenly yours, too. You can’t put a finger on what exactly, but something just happened. When the music stops the air still rings. You realize you’ve transcended. You’ve changed (even just a smidgen). It’s left you a bit different (even just a smidgen).</p>
                </div>

            </div>




            <div className='container ps-5 pe-5 pt-5 mt-5 pb-5' >
                <div>
                    <h3>Frequently Asked Questions</h3>
                </div>


                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Is there any virtual class :
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Yes . We provide virtual classes to our students if they want to have one . In this digital era  classes virtually are getting popular among students.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How is the hygine measures in classes?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                In this post pandamic situation we are more and more exposed to hygine and safety . We ensure all the students get proper safey be safe from covid-19.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Class instructors are good ?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                We have the best instructors in the country so sont hesitate just enroll in our cource now.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;