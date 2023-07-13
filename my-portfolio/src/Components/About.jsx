import imageme from "../extras/imageme.jpg";
import Typed from 'react-typed';
function About(){
    return(
    <div className="background">
    <div className="overlay"></div>
    <div className="content">
         
        <div className="text">
            <h1 className="fullname">BRYAN JOSHUA <br /> <span className="surname">BUCU</span></h1>
            <h1> 
                <span className="name"> 
                    <Typed
                        strings={[
                            " A WEB DEVELOPER",
                            " A FULL STACK DEVELOPER",
                            " A BACK-END DEVELOPER",
                            " A UI/UX DESIGNER",
                        ]}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    />
                </span>
            </h1>
            <p className="text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse bibendum nisi a lorem eleifend varius. Nulla auctor massa in nisi volutpat, 
            id gravida orci feugiat. In ut tristique lacus. Aliquam eu augue consequat, lacinia arcu eget, 
            aliquet mauris. Sed consectetur massa nunc, vel tincidunt lorem venenatis a. Vestibulum ultricies 
            malesuada urna vel pellentesque. Donec et posuere turpis, at rhoncus mauris.
            </p> 

        </div>
        

        <div className="image">
           <img src={imageme} alt="react logo" />
        </div>
        
  
    </div>
    </div>
    
    )
}

export default About;