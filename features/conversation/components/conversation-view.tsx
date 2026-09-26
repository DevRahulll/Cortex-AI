"use client";

import { useQueryClient } from "@tanstack/react-query";
import { UIMessage } from "ai";
import { useConversations } from "../hooks/use-conversation";

type ConversationViewProps = {
    conversationId: string;
    initialMessages: UIMessage[];
};

export const ConversationView = ({
    conversationId,
    initialMessages,
}: ConversationViewProps) => {
    const queryClient = useQueryClient();

    const { data: conversations } = useConversations();
};
