import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";



import { auth } from "../services/firebase";


function ChatScreen({chat, messages}) {

  const [user] = useAuthState(auth);
  const router = useRouter()

  return <Container><h1>ChatScreen</h1></Container>;
}

export default ChatScreen;

const Container = styled.div`

`;
