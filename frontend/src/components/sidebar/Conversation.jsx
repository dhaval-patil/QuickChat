import React from "react";
import useConversation from "../../store/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversations, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSeleted = selectedConversation?._id === conversations._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversations._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-zinc-800 rounded p-2 py-1 cursor-pointer
          ${isSeleted ? "bg-zinc-800" : ""}
          `}
        onClick={() => setSelectedConversation(conversations)}
      >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversations.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-center">
            <p className="font-bold text-zinc-300">{conversations.fullName}</p>
            {/* <span className="text-xl">🎃</span> */}
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
