import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  db,
  doc,
  ref,
  serverTimestamp,
  set,
  setDoc,
} from "../services/firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { getDatabase } from "firebase/database";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  // const db = getDatabase()

  useEffect(() => {
    if (user) {
      // set(ref(db, "users/" + user.uid), {
      //   email: user.email,
      //   lastSeen: serverTimestamp(),
      //   photoURL: user.photoURL,
      // });
      const userRef = doc(db, "users/" + user.uid);
      setDoc(
        userRef,
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
