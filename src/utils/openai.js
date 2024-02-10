import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey : process.env.REACT_APP_ChatGpt_API_KEY,
    dangerouslyAllowBrowser: true
});