import { useEffect, useState } from "react";
import { auth } from "../components/Firebase/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";

const useAuth = () => {
  const [authedUser, setAuthedUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthedUser(user);
      } else {
        setAuthedUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
      })
      .catch((err) => console.log(err));
  };

  return { authedUser, userSignOut };
};

export default useAuth;
