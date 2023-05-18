import { GetServerSidePropsContext } from 'next';

export default function Blog(props: { params: { id: string } }) {
  const initial = 'lorem';
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Blog - {props.params.id}</h1>
      <div className='flex flex-col items-center justify-center w-full'>
        <p className='text-xl'>This is the detailed blog page</p>
        <textarea name='' id='' cols={15} rows={15} value={initial} readOnly></textarea>
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
