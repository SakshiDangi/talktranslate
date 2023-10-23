"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";

function CreateChatButton() {
    const router = useRouter();

    const createNewChat = async() => {

        router.push('/chat/asd');
    }

  return (
    <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon />
    </Button>
  )
}

export default CreateChatButton;