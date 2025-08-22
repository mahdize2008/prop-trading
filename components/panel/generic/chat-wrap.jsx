import Chat from "./chat";

export default function ChatWrap({ chats }) {
    console.log(chats);
    
  return ( chats.map((chat, index) => (
    <Chat key={index} name={chat.user.username} message={chat.message} created_at={chat.created_at} is_admin={chat.is_admin}/>
  )))
}