import { GetServerSidePropsContext } from 'next';

export default function Post(props: { params: { id: string } }) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Post - {props.params.id}</h1>
      <div className='flex flex-col items-center justify-center w-full'>
        <p className='text-xl'>This is the detailed Post page</p>
      </div>
    </main>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};
