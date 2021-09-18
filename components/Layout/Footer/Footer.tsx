import SimpleCard from '../Introduction/SimpleCard';
import Logo from '../Header/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="content-center md:px-10 xl:px-40 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <SimpleCard title="Help">
            <a className="block" href="/">
              About
            </a>
            <a className="block" href="/">
              Contact
            </a>
            <a className="block" href="/">
              Mentoring
            </a>
            <a className="block" href="/">
              Support
            </a>
          </SimpleCard>
          <SimpleCard title="Browse">
            <a className="block" href="/">
              Articles
            </a>
            <a className="block" href="/">
              Courses
            </a>
          </SimpleCard>
          <SimpleCard title="Community">
            <a className="block" href="/">
              App Jams
            </a>
          </SimpleCard>
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            <Logo />
            <div>Copyright &copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
