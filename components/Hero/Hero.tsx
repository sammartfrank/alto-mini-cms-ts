import Image from 'next/image';
export const Hero = () => {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='w-full mx-auto h-[400px]'>
        <div className='relative z-10 bg-white h-full'>
          <Image
            className='absolute inset-0 w-full h-full object-cover'
            src='/hero.jpg'
            alt='hero'
            fill
            datatest-id='hero-image'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-4xl font-bold text-white'>Alto mini CMS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
