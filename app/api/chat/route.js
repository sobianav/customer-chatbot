import { NextResponse } from "next/server";
import OpenAI from 'openai';


const systemPrompt = 'Welcome to Sobias project'
export async function POST(req) {
    const openai = new OpenAI() 
    const data = await req.json() 
   
    
   const completion = await openai.chat.completions.create({
          messages: [{"role": 'system', content: systemPrompt}, ...data],
              
          model: "gpt-3.5-turbo",
        });
      
        console.log(completion.choices[0].message.content);

 
    return NextResponse.json({message: completion.choices[0].message.content}, {status:200})
}