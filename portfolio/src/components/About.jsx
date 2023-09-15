import React from 'react';

const About = () => {
  return (
<div name='about' className='w-full h-screen bg-gradient-to-b from-blue-950 to-black text-white'
>
    <div className='max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nibh, vulputate vel dictum nec, malesuada quis sem. Donec aliquet ornare ligula, a interdum tortor. Vestibulum congue lacus mauris, non consequat odio ornare sit amet. Integer semper, est id commodo interdum, magna nisi consectetur lorem, a scelerisque tortor sapien dapibus velit. Phasellus vestibulum dui in mauris tincidunt, nec tempus lorem posuere. Curabitur sollicitudin felis sed dui tempor, vel tincidunt urna vestibulum. Ut ut lacus lorem.
        </p>

        <br />

        <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nibh, vulputate vel dictum nec, malesuada quis sem.
            Integer semper, est id commodo interdum, magna nisi consectetur lorem, a scelerisque tortor sapien dapibus velit. 
            Phasellus vestibulum dui in mauris tincidunt, nec tempus lorem posuere. 
            Curabitur sollicitudin felis sed dui tempor, vel tincidunt urna vestibulum. Ut ut lacus lorem.
        </p>
    </div>
  </div>
  );
};

export default About