import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/background2.webp"
        alt="Luxury car being washed"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">QUICK. EASY. CLEAN.</h1>
          <p className="text-xl mb-8">Professional Car Washing and Detailing Services</p>
          <Link href="/booking" className="bg-primary hover:bg-accent text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Book Your Wash
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;