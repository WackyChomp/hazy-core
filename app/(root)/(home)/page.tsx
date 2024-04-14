import MeetingTypes from '@/components/MeetingTypes';

type Props = {}

/* Used custom classes from global.css: glassmorphism */

const Home = (props: Props) => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle:'full'})).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-orange-900">
      <h1 className="text-3xl font-bold">
        Home Page
      </h1>
      <div className="bg-hero_two bg-cover h-[300px] w-full rounded-[20px]">
        <div className="flex h-full flex-col justify-between max-md:px-10 max-md:py-20 p-7">
          <h2 className='glassmorphism max-w-[300px] rounded-xl py-2 text-center text-base font-normal'>
            [Placeholder] Upcoming Meeting at: 3:45 PM
          </h2>
          <div className="glassmorphism max-w-[460px] p-2 rounded-xl flex flex-col gap-3">
            <h1 className='text-4xl font-semibold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium lg:text-2xl'>
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypes />
    </section>
  )
}

export default Home