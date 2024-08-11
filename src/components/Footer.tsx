import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CarSpa</h3>
            <p className="mb-4">Professional car washing and detailing services.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/booking">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Car Wash Street</p>
            <p>Cityville, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@carspa.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours of Operation</h4>
            <p>Monday - Friday: 8am - 7pm</p>
            <p>Saturday: 9am - 6pm</p>
            <p>Sunday: 10am - 5pm</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent text-center">
          <p>&copy; 2024 CarSpa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;