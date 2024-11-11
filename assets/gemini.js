import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const userConversations = {};

export async function getGeminiResponse(userId, userInput) {
	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	if (!userConversations[userId]) {
		userConversations[userId] = [];
	}

	const chat = model.startChat({
		history: userConversations[userId],
	});
	let prompt =
		"You are Quorix, a Telegram bot that helps people understand and use the internet computer protocol , a public blockchain, and blockchain technology in general and you respond with text and not markdown" +
		userInput;
	const result = await chat.sendMessage(prompt);
	const response = result.response.text();

	// Update conversation history
	userConversations[userId].push({
		role: "user",
		parts: [{ text: userInput }],
	});
	userConversations[userId].push({ role: "model", parts: response });

	// Limit history to last 20 messages
	if (userConversations[userId].length > 20) {
		userConversations[userId] = userConversations[userId].slice(-20);
	}

	return response;
}
