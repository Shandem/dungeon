import React from 'react';
import Card from '../Component/Card'
import Catolog from '../Component/Catolog '

const Services = () => {
    return (
        <div>

            <div className="header">

                <h1>Header</h1>

            </div>

            <div className="body">

                <div className="serviceBlurb">
                    Proident consequat labore aliquip nisi duis dolore ea 
                    nostrud. Incididunt minim eiusmod amet nostrud. Deserunt
                    veniam consequat exercitation amet et consequat duis et.
                    Duis laboris ad enim cillum consectetur mollit ex nisi anim
                    eu est ex nisi. Dolore cillum pariatur culpa voluptate esse
                    deserunt commodo.
                    Veniam eu ex id irure nulla exercitation do. Ipsum duis irure ullamco ut enim sunt 
                    labore nulla in culpa do anim mollit dolore. Lorem sit quis esse in eiusmod ad cupidatat 
                    nostrud Lorem aliquip qui laboris reprehenderit nostrud. Veniam occaecat non officia elit excepteur velit.
                    In adipisicing cupidatat nostrud ipsum ea Lorem ullamco proident esse. Elit ex mollit id sit. Consequat
                    voluqptate ea cillum tempor tempor id voluptate et aute voluptate labore nulla.
                    Enim elit reprehenderit amet ut adipisicing dolore voluptate eu elit eu deserunt dolore aliquip. Adipisicing 
                    in ea ea adipisicing. In occaecat aliqua ad dolore sint excepteur ut id cupidatat sunt Lorem. Sint ipsum ea ex
                    pariatur proident.
                </div>
            
                <div className="catalog">

                    <p>Catalog content goes here</p>
                    <Catolog/>

                </div>

            </div>

            <div className="footer">

                <p>Footer content</p>
                <div>

                    <span className='ownersName'/>
                    <span className='yearMade'/>
                    <span className='smallLogo'/>

                </div>

            </div>
    </div>
    );
}

export default Services;
