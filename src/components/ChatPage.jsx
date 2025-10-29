import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [chatData, setChatData] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [fileMessage, setFileMessage] = useState(null);

  useEffect(() => {
    fetch("/data/chatData.json")
      .then((res) => res.json())
      .then((data) => setChatData(data.results[0]));
  }, []);

  const handleSend = () => {
    if (!newMessage && !fileMessage) return;

    let message = {
      id: Date.now(),
      sender: "customer@mail.com",
      type: "text",
      message: newMessage,
    };

    if (fileMessage) {
      const fileType = fileMessage.type.split("/")[0];
      if (fileType === "image") {
        message.type = "image";
        message.message = URL.createObjectURL(fileMessage);
      } else {
        message.type = "file";
        message.message = URL.createObjectURL(fileMessage);
        message.fileName = fileMessage.name;
      }
    }

    setChatData((prevData) => ({
      ...prevData,
      comments: [...prevData.comments, message],
    }));

    setNewMessage("");
    setFileMessage(null);
  };

  if (!chatData) return <div className="text-center mt-10">Loading chat...</div>;

  return (
    <div className="lg:w-full xl:w-full border p-5 rounded-lg shadow-md bg-grey-500 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4 border-b pb-2">
          <img
            src={chatData.room.image_url}
            alt="room"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-bold text-lg">{chatData.room.name}</h2>
            <p className="text-sm text-gray-100">
              Chat Room ID: {chatData.room.id}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {chatData.comments.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "customer@mail.com" ? "items-end" : "items-start"
              }`}
            >
              <span className="text-xs text-gray-300 mb-1">
                {msg.sender === "customer@mail.com" ? "You" : "Agent"}
              </span>

              <div
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === "customer@mail.com"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.type === "text" && <p>{msg.message}</p>}
                {msg.type === "image" && (
                  <img
                    src={msg.message}
                    alt="image"
                    className="max-w-xs rounded-lg"
                  />
                )}
                {msg.type === "file" && (
                  <a
                    href={msg.message}
                    download={msg.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-300 text-sm p-2 rounded-lg text-blue-600 underline"
                  >
                    📄 {msg.fileName}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-4 border-t pt-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 rounded-lg flex-1 focus:outline-none"
        />
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFileMessage(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="fileInput">
          <span className="text-blue-500 cursor-pointer">📎</span>
        </label>
        <button
          type="submit"

          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;