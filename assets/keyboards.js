import { Keyboard } from "grammy"
export const keyboard = new Keyboard()
  .text("🚀 Get Started")
  .text("💳 Wallet")
  .text("🖥️ Dapps")
  .row()
  .text("🌐 Community")
  .text("🚿 Faucets")
  .text("💵 Earn")
  .row()
  .text("🗣️ Feedback")
  .text("🆘 Help")
  .text("➕ More")
  .resized()
  .oneTime();

export const infoKeyboard = new Keyboard()
  .text("/bb")
  .text("/bc")
  .row()
  .text("🔙 Back", "back")
  .resized()
  .oneTime();
export const extraKeyboard = new Keyboard()
  .text("❓ FAQ")
  .text("🔨 Buildathon")
  .text("📒 Rounds Info")
  .row()
  .text("🔙 Back", "back")
  .resized()
  .oneTime();
export const walletKeyboard = new Keyboard()
  .text("➕ Installation", "install")
  .text("🔗 Set Up Wallet", "connect")
  .row()
  .text("🔐 Wallet Security", "security")
  .text("🔙 Back", "back")
  .resized()
  .oneTime();

export const backKeyboard = new Keyboard()
  .text("🔙 Back", "back")
  .resized()
  .oneTime();
export const earnKeyboard = new Keyboard()
  .text("🕶️ Rounds")
  .text("🏛️ Farcaster")
  .row()
  .text("🔙 Back", "back")
  .resized()
  .oneTime();
export const faqKeyboard = new Keyboard()
  .text("I am a complete newbie, I know nothing😫")
  .row()
  .text("I'm a developer 🧑‍💻, How do i build on Base?🤔")
  .row()
  .text("Whats the difference between Farcaster and Warpcast?🤷")
  .row()
  .text("What makes Base better than other Ethereum L2s?🤔")
  .row()
  .text("🔙 Back", "back")
  .resized()
  .oneTime();