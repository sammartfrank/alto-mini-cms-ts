export const Hero = () => {
  return (
    <div className='relative h-[500px] w-full bg-cover bg-center' style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-black'>
        <h1 className='text-4xl font-bold'>Alto mini CMS</h1>
        <p className='text-xl mt-2'>A quick cms setup for Alto</p>
      </div>
    </div>
  );
};
