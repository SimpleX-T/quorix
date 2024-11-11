export function returnMsgs(first_name) {
	return {
		helpa: `Hey ${first_name}!
Here's how I can help you:
 /comedm - use this to request a DM from me 😁
 /learn - use this to learn about blockchain and ICP in Telegram 📖
 /game - use this to start a word guessing game in this group 🎮
 /guess - use this with your guess and your group identifier in your DM to make a guess 🙋🏾‍♀️
 /activegames - use this in your DM to see the number of active games and their details 🔥
 /read - use this with a message or question you have for me ❓ (e.g., '/read what is ICP')
 /review - use this to send a review to my developers 📝 (e.g., '/review I love this bot!')
 /help - to see this help message again 🆘

You can also reply to a message of mine and ask me anything about ICP or blockchain technology, and I'll do my best to help!

What would you like to know more about?
    `,
		help: `Hey ${first_name}!
Here's how I can help you
  🚀 Getting Started - Learn about ICP
  💼 Set Up Wallet - Learn about Setting up Wallets for ICP
  🖥️ Dapps - Learn about dapps built on the ICP network
  🤝 Community - Join our vibrant ICP community
  🚿 Faucet Guide - Learn how you can get testnet tokens for ICP
  💵 Earn - Learn how you can earn with ICP
  ➕ More - See more menu items
  📒 Rounds Info - Learn about currently active funding rounds on ICP
  ❓ FAQ - Get answers to the most frequently asked questions
  🗣️ Feedback - Send your feedback to the development team
  🆘 Help - See this help message again.

  Other Commands:
  /help - to see this help message again
You can also ask me anything about ICP or blockchain technology, and I'll do my best to help!

What would you like to know more about?
    `,
		dapp: `Exploring dApps on ICP 🚀
What are dApps? 🤔
dApps, or decentralized applications, have the following features:
▪️ They are software applications running on a blockchain.
▪️ They are user-controlled and lack central authority.
▪️ They are open-source and transparent.

Popular dApps on ICP:

OpenChat 💬 - https://openchat.ic0.app/
• A decentralized chat application
• Built for messaging with privacy and security

DSCVR 🌐 - https://dscvr.one/
• Decentralized social platform
• Engage with content, follow creators

NFT Marketplaces 🎨
• Discover and trade NFTs on platforms like Entrepot and ICPunks

Visit https://dfinity.org/ecosystem for more!

How to Use dApps on ICP 🤔:
▪️ Connect an ICP-compatible wallet
▪️ Make sure you have some cycles (tokens) for transactions
▪️ Interact with the dApp's interface
▪️ Always review transactions before confirming

Enjoy exploring the ICP ecosystem! 😁`,
		build: `Building on ICP 🌍
The recent ICP Hackathon brought together developers from around the world. Whether you participated or not, be sure to visit DFINITY's Dev Forum to keep updated on upcoming events, resources, and community discussions:
- https://forum.dfinity.org
Stay tuned for more events and updates!`,
		info: `ICP Developer Events 🌍
Join the DFINITY Foundation as they connect with developers in various cities:

- San Francisco
- Berlin
- Singapore
- Tokyo

If you're near any of these locations, register for a meetup using the link below:
- https://dfinity.org/events`,
		rounds: `ICP Funding Rounds 🔄
ICP offers funding through various grant rounds to help builders grow the ecosystem:

Quick Start:
▪️ Visit the Developer Grant Program page - https://dfinity.org/grants
▪️ Connect your wallet and start exploring opportunities for funding
▪️ Submit projects for grants or funding

Features:
▪️ Review ongoing projects
▪️ Join the developer community on DFINITY Forum
▪️ Submit your project ideas

Feel free to ask me more questions on ICP funding rounds! 😁`,
		warpcast: `Decentralized Social Media on ICP 📡
ICP enables decentralized social applications, like OpenChat and DSCVR, giving users ownership and control over their data.

Getting Started:
▪️ Sign up for OpenChat - https://openchat.ic0.app/
▪️ Connect your wallet and create a profile
▪️ Start engaging by sending messages, following users, and creating content

For more details, type '/setup' to get a tutorial video on using OpenChat!`,
		faucet: `Getting Testnet Tokens on ICP 💧
Need tokens to experiment on ICP's testnet? Here’s how to use the faucet:

What's a Faucet? 🚰
It’s a service that distributes free testnet tokens for development and testing.

Steps to Get Testnet Tokens:
1. Set up an ICP-compatible wallet and copy your wallet address.
2. Visit https://faucet.dfinity.org.
3. Enter your wallet address and request tokens.
4. Confirm receipt in your wallet.

Note: Testnet tokens are for testing only.`,
		earn: `Earning Opportunities on ICP 💰
You can earn by contributing to the ICP ecosystem!

Opportunities include:
1. Participating in developer grant programs and bounties.
2. Creating educational content or contributing to open-source projects.
3. Engaging in ICP community events.

Visit https://dfinity.org/grants for more info.`,
		faq: `Have some questions ${first_name}? 🤔
Which of these do you need answers to?
If you can't find your question below, just type it out, and I'd be happy to help! 😁`,
		q1: `No worries! The Internet Computer Protocol (ICP) is a powerful and easy-to-use blockchain designed for building Web3 dapps (decentralized applications). Here’s a simple roadmap to get you started:

Learn What a Blockchain Is: ICP is a decentralized network, like a cloud-based "supercomputer," which means it’s powered by multiple computers working together instead of a single server.

Explore ICP Basics: ICP allows developers to build scalable dapps directly on the internet without traditional cloud servers.
Set Up a Wallet: Try using an ICP-compatible wallet like Plug or Stoic Wallet. This wallet will let you store, send, and receive ICP tokens.
Discover dApps on ICP: ICP hosts a growing number of unique dapps. You can explore some of these at the Dfinity Foundation’s website or sites like Distrikt.
Join the Community: Follow ICP groups on Twitter or Discord, where beginners are always welcome to ask questions and learn from others.
You’re not alone—everyone was new at some point! Let me know if there’s anything specific you’d like to dive into. 😊

`,
		q2: `Great! ICP is a powerful platform for building decentralized applications, and getting started as a developer is straightforward:

Set Up Your Development Environment:

Install DFX (the DFINITY SDK) to start coding on ICP.
Write your backend logic in Motoko (a language created for ICP) or Rust (for more advanced use cases).
Deploy Canisters:

ICP uses "canisters," which are like smart contracts or containers that hold your code and data.
Create and deploy canisters using DFX, which manages all the processes for you on ICP's decentralized network.
Integrate Frontend and Backend:

Use standard web technologies (HTML, CSS, JavaScript, or frameworks like React) for the frontend.
For backend logic, connect with your canisters through JavaScript libraries provided by DFINITY.
ICP Tools & Resources:

Canister SDK: Get familiar with DFX commands and canister APIs.
Documentation: Check out the Internet Computer developer docs for detailed guidance.
Motoko Playground: Use this browser-based tool to try out Motoko code without setup (Motoko Playground).
Test & Deploy:

Test your dapp locally before deploying it to the main ICP network. Once it’s ready, use DFX to deploy it live.
ICP’s ecosystem is developer-friendly and ready for experimentation. Don’t hesitate to reach out for support through community channels or developer forums!`,
		start: `🚀 Welcome, ${first_name}!🚀
I'm your ICP Onboarding Assistant.
Let's get you started on the Internet Computer Protocol!
Use the menu below to explore more.
Feel free to ask me anything about ICP or blockchain technology, and I'll do my best to help!`,
		overview: `Hi ${first_name}, Welcome to ICP! 🚀

The Internet Computer Protocol (ICP) is a decentralized computing platform that transforms the internet into a global, decentralized computing network. Here’s what you need to know:

🔗 **What is ICP?**
ICP enables scalable, secure, and tamperproof web services and dApps.

🏗️ **Key Features:**
• Decentralized and scalable: Run applications at web speed.
• EVM Compatible: Works with Ethereum and other blockchains.
• Open-source: Transparent and community-driven.
• Scalable: Designed to handle high transaction volumes.

ICP Resources:
🔗 Official Site - https://dfinity.org/
🔗 Documentation - https://smartcontracts.org/docs/
🔗 API Reference - https://smartcontracts.org/docs/quickstart/

Happy exploring! 🧠✨`,
		wallet: `Setting Up an ICP Wallet 💼

What is a Crypto Wallet? 🤔
A crypto wallet stores your cryptocurrencies and allows you to send and receive transactions on ICP.

To set up an ICP-compatible wallet, you can use Plug or Stoic Wallet for easy access to ICP applications.`,
		walletInstall: `Installing an ICP Wallet 📲

Visit the official Plug Wallet or Stoic Wallet website:
- Plug: https://plugwallet.ooo
- Stoic: https://stoicwallet.com

Choose the appropriate version for your device and follow the installation instructions.`,
		walletSetUp: `Setting Up Your ICP Wallet 🛠️

Open the wallet app.
Click "Create New Wallet" and follow the prompts to set up your account.
IMPORTANT: Write down your recovery phrase securely and never share it.`,
		walletConnect: `Connecting Your Wallet to ICP 🔗

Once your wallet is set up, connect it to ICP-enabled applications like OpenChat or DSCVR by selecting "Connect Wallet." Follow on-screen instructions to complete the connection.`,
		walletSec: `Security Tips for Your Wallet 🔒

• Store your recovery phrase securely.
• Use a strong password.
• Enable two-factor authentication if available.
• Avoid phishing sites - always double-check URLs.`,
		feedback: `Any feature requests or feedback?😁
Send your review with '/review', followed by your message!`,
		learn: `Hey ${first_name}, Interested in learning about ICP?
Check out the DFINITY Foundation's resources and Lumina for blockchain courses.
Explore a variety of formats—text, video, and interactive presentations.

Get started here 👇🏾`,
		community: `
🌟 Join Our Amazing ICP Community, ${first_name}! 🌟

Connect with ICP enthusiasts:

🔹 Twitter - https://twitter.com/dfinity
🔹 Forum - https://forum.dfinity.org
🔹 Discord - https://discord.gg/icp

Looking forward to seeing you there! 🎉`,
		unknown: `
I'm sorry, but I didn't understand that input.
Please use the custom keyboard or these commands:

/start - Open the main menu
/help - Open the help menu
    `,
	};
}
