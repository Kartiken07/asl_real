
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <Button onClick={signOut} variant="outline">
          Sign Out
        </Button>
      ) : (
        <Link to="/auth">
          <Button variant="outline">Sign In</Button>
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
