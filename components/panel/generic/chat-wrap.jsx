import Chat from "./chat";

export default function ChatWrap({ chats }) {
  
  return ( chats.map((chat, index) => (
    <Chat key={index} name={chat.name} massage={chat.massage} data={chat.data} time={chat.time} author={chat.author}/>
  )))
}