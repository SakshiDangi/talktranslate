"use client"

import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";

function CreateChatButton() {
  return (
    <Button variant={"ghost"}>
        <MessageSquarePlusIcon />
    </Button>
  )
}

export default CreateChatButton;