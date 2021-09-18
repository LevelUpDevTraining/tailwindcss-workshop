import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center p-2">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="pr-2">
          <Search />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
}
