const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateAIContent() {
    try {
        const genAI = new GoogleGenerativeAI("AIzaSyCC5hH3L5LhT1mCrWbawMVCumzftbxQ0Ew");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Explain how AI works";

        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    }
    catch (error) {
        console.error(error.message)
    }
}
generateAIContent()