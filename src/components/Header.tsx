
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full bg-gradient-to-r from-purple-600 to-blue-500 p-4", className)}>
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white">ASL Text Editor</h1>
        <p className="text-sm md:text-base text-white opacity-90">Communicate with American Sign Language</p>
      </div>
    </header>
  );
};

export default Header;
