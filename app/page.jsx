

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";


/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    return (
        <section className="h-full min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto h-full px-4 xl:px-0">
                <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between xl:pt-6 xl:pb-24">
                    <div className="order-2 xl:order-none text-center xl:text-left">
                        <span>Developpeur Junior</span>
                        <h1 className="h1 mb-4">
                            Bonjour, je suis <br /> <span className="text-accent">Morel Mathias</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Je suis un étudiant en BUT informatique à l&#39;Université de Lens. Je suis passionné par le
                            développement d&#39;applications web, d&#39;applications mobiles et de jeux vidéos.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-4">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                <span>Téléchargez mon CV</span>
                                <FiDownload className="text-4xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center var(--text-accent) text-base hover:bg-[#82a1d9] hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
