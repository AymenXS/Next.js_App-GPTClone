import TourInfo from '@/components/TourInfo';
import { generateTourImage, getSingleTour } from '@/utils/action';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect('/tours');
  }

  const { data } = await axios(`${url}${tour.city}`);


// Two ways of importing images; Unsplash and AI Generated.
  const tourImageUnsplash = data?.results[0]?.urls?.raw;
  const tourImageAI = await generateTourImage({ city: tour.city, country: tour.country });

  return (
    <div>
      <Link href="/tours" className="btn btn-secondary mb-12">
        back to tours
      </Link>
      {tourImageUnsplash ? (
        <div>
          <Image
            src={tourImageUnsplash}
            width={300}
            height={300}
            className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
            alt={tour.title}
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
