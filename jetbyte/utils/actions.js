"use server";
import OpenAI from "openai";
import prisma from "./db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};

export const generateTourResponse = async ({ city, country }) => {
  const query = `Find a ${city} in this ${country}. If ${city} in this ${country} exists, create a list of things families can do in this ${city}, ${country}. Once you have a list, create a one day tour. The response should be in the following JSON format:
  {
    "tour": {
        "city": "${city}",
        "country": "${country}",
        "title": "A day in ${city}",
        "description": "Description of the ${city} and tour",
        "stops": ["short paragraph on the first stop", "short paragraph on the second stop", "short paragraph on the third stop"]
    }
  
  }
  If you can't find info on ${city}, or the ${city} does not exist in the ${country}, return { "tour": null }.,
  `;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a tour guide" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const tourData = JSON.parse(response.choices[0].message.content);

    if (!tourData.tour) {
      return null;
    }
    return tourData.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExistingTour = async ({ city, country }) => {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};

export const createNewTour = async (tour) => {
  return prisma.tour.create({
    data: tour,
  });
};
