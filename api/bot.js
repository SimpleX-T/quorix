import { Bot, webhookCallback } from "grammy";
import { returnMsgs } from "../assets/messages";
import { users } from "../assets/users";
import {
  earnKeyboard,
  faqKeyboard,
  keyboard,
  walletKeyboard,
} from "../assets/keyboards";
import { getGeminiResponse } from "../assets/gemini";
// import telegramifyMarkdown from "telegramify-markdown";
export const config = {
  runtime: "edge",
};
const devID = parseInt(process.env.BOT_DEVELOPER);
const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);
bot.use(async (ctx, next) => {
  ctx.config = {
    botDeveloper: devID,
    isDeveloper: ctx.from?.id === devID,
  };
  // Run remaining handlers.
  await next();
});
bot.command("start", async (ctx) => {
  const { first_name, id } = ctx.from;
  await bot.api.sendChatAction(id, "typing");
  const msg = ctx.config.isDeveloper
    ? "Hi mom!! <3"
    : returnMsgs(first_name).start;
  await ctx.reply(msg, {
    reply_markup: keyboard,
  });
  const devRep = `Hey Mom, ${first_name} started a chat with me today😁.
  `;
  await bot.api.sendMessage(devID, devRep);
  users.push({ first_name, id });
});
bot.command("home", async (ctx) => {
  await ctx.reply("Going Home...", { reply_markup: keyboard });
});
bot.command("review", async (ctx) => {
  const msg = ctx.match;
  if (msg === "") {
    await ctx.reply("You know you didn't actually send a message right?🤔");
    return;
  }
  const { first_name } = ctx.from;
  await bot.api.sendMessage(
    devID,
    `${first_name} sent a review :
"${msg}"`
  );
  await ctx.reply("Review Sent😁", { reply_markup: keyboard });
});
bot.on("message:text", async (ctx) => {
  const { first_name, id } = ctx.from;
  let text = "";
  let msg, kb;
  switch (ctx.msg.text) {
    case "💳 Set Up Wallet":
      text = "/wallet";
      msg = returnMsgs(first_name).wallet;
      kb = walletKeyboard;
      break;
    case "➕ Installation":
      text = "/installwallet";
      msg = returnMsgs(first_name).walletInstall;
      kb = walletKeyboard;
      break;
    case "🔗 Set Up Wallet":
      text = "/setupwallet";
      msg = returnMsgs(first_name).walletSetUp;
      kb = walletKeyboard;
      break;
    case "🔐 Wallet Security":
      text = "/walletsecurity";
      msg = returnMsgs(first_name).walletSec;
      kb = walletKeyboard;
      break;
    case "🚀 Getting Started":
      text = "/overview";
      msg = returnMsgs(first_name).overview;
      kb = keyboard;
      break;
    case "🌐 Community":
      text = "/community";
      msg = returnMsgs(first_name).community;
      break;
    case "🗣️ Feedback":
      text = "/feedback";
      msg = returnMsgs(first_name).feedback;
      break;
    case "💵 Earn":
      text = "/earn";
      msg = returnMsgs(first_name).earn;
      kb = earnKeyboard;
      break;
    case "🏛️ Farcaster":
      text = "/warpcast";
      msg = returnMsgs(first_name).warpcast;
      kb = earnKeyboard;
      break;
    case "🕶️ Rounds":
      text = "/rounds";
      msg = returnMsgs(first_name).rounds;
      kb = earnKeyboard;
      break;
    case "❓ FAQ":
      text = "/faq";
      msg = returnMsgs(first_name).faq;
      kb = faqKeyboard;
      break;
    case "I'm a developer 🧑‍💻, How do i build on Base?🤔":
      text = "/faq";
      msg = returnMsgs(first_name).q2;
      kb = faqKeyboard;
      break;
    case "I am a complete newbie, I know nothing😫":
      text = "/faq";
      msg = returnMsgs(first_name).q1;
      kb = faqKeyboard;
      break;
    case "What makes Base better than other Ethereum L2s?🤔":
      text = "/faq";
      msg = returnMsgs(first_name).q4;
      kb = faqKeyboard;
      break;
    case "Whats the difference between Farcaster and Warpcast?🤷":
      text = "/faq";
      msg = returnMsgs(first_name).q3;
      kb = faqKeyboard;
      break;
    case "🖥️ Dapps":
      text = "/dapps";
      msg = returnMsgs(first_name).dapp;
      break;
    case "🚿 Faucet Guide":
      text = "/faucet";
      msg = returnMsgs(first_name).faucet;
      break;
    case "🆘 Help":
      text = "/help";
      msg = returnMsgs(first_name).help;
      break;
    case "/help":
      msg = returnMsgs(first_name).help;
      break;
    case "🔙 Back":
      text = "/home";
      msg = "Going Back...";
      kb = keyboard;
      break;
    default:
      msg = await getGeminiResponse(id, ctx.msg.text);
  }
  // const editedMsg = telegramifyMarkdown(msg);
  await bot.api.sendChatAction(id, "typing");
  await ctx.reply(
    msg,
    kb && {
      parse_mode: "Markdown",
      reply_markup: kb,
    }
  );
});

export default webhookCallback(bot, "std/http");
