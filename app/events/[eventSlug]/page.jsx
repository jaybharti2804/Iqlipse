"use client";

import useSWR from 'swr';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useRef } from 'react';

import { LoaderCircle, Clock, Images, MessageCircleQuestion } from 'lucide-react';
import CustomPortableText from '@/sanity/utils/customPortableText';
import EventCard from '@/app/_components/Events/EventCard';
import PageNotFound from '@/app/not-found';
import FAQsModal from '@/app/_components/Events/FAQsModal';
import UpdatesModal from '@/app/_components/Events/UpdatesModal';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function EventPage() {
  const { eventSlug } = useParams();
  const router = useRouter();

  const faqsRef = useRef(null);
  const updatesRef = useRef(null);

  const { data: event, error, isLoading } = useSWR(`/api/events/${eventSlug}`, fetcher);

  if (isLoading) return <LoaderCircle className='animate-spin text-textColor1 m-auto mt-12 w-12 h-12' />;

  if (error) return (
    <div className='mx-auto w-max max-w-80 text-center text-base font-bold mt-5 text-red border-red border p-2 rounded-md flex flex-col'>
      <u className='text-lg'>Error:</u>
      <p>{error.message}</p>
      <Link href={'/events'} className='border-2 border-buttonColor text-buttonColor hover:bg-buttonColor hover:text-[#fff] text-base rounded-md py-1 px-2'>Go Back</Link>
    </div>
  );

  if (!event) return <PageNotFound />;

  return (
    <>
      <h1 className='mb-4 mt-4 tracking-tight font-extrabold text-logoColor text-4xl p-2 text-center w-full'>{event.name}</h1>

      <div className={`grid xl:grid-cols-[auto_1fr_auto] xl:grid-rows-[auto] md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr] grid-cols-[auto] grid-rows-[auto_auto_auto] content-start`}>
        {/* Event details */}
        <div className='m-2 h-min'>
          <EventCard event={event} openButton={false} />
        </div>

        {/* Buttons */}
        <div className='border border-borderColor3 p-3 flex flex-col space-y-2 h-min m-3 rounded-lg min-w-[300px] mx-auto md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2'>
          <button
            className='p-2 border-2 border-buttonColor text-buttonColor font-bold rounded-lg hover:bg-buttonColor hover:text-[#fff] flex flex-row justify-center'
            onClick={() => faqsRef.current.showModal()}
          >
            <MessageCircleQuestion className='mr-2' />
            FAQs
          </button>

          <button
            className='p-2 border-2 border-buttonColor text-buttonColor font-bold rounded-lg hover:bg-buttonColor hover:text-[#fff] flex flex-row justify-center'
            onClick={() => updatesRef.current.showModal()}
          >
            <Clock className='mr-2' />
            Updates
          </button>

          <button
            className='p-2 border-2 border-buttonColor text-buttonColor font-bold rounded-lg hover:bg-buttonColor hover:text-[#fff] flex flex-row justify-center'
            onClick={() => router.push(`/events/${eventSlug}/gallery`)}
          >
            <Images className='mr-2' />
            Gallery
          </button>
        </div>

        {/* Page content */}
        <div className={`my-4 p-2 md:p-4 md:row-start-1 md:row-end-3 xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-3 `}>
          {event && event.page && <CustomPortableText value={event.page} />}
        </div>
      </div>

      <FAQsModal faqs={event.faqs} faqsRef={faqsRef} />
      <UpdatesModal updates={event.updates} updatesRef={updatesRef} />
    </>
  );
}