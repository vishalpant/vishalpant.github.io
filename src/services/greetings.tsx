import { greetings } from "../data/greetings";

type Greeting = {
    hello: string;
    language: string;
};

export const fetchGreetings = async (signal?: AbortSignal): Promise<string[]> => {
    try {
        const response = await fetch(greetings.url, { signal });
        if (!response.ok) {
            throw new Error('failed to get greetings');
        }
        const data: Greeting[] = await response.json();
        return data.map(item => item.hello);
    } catch (error) {
        return greetings.defaultGreetings;
    }
};

export const getRandomGreeting = (greetings: string[]): string => {
    if (greetings.length === 0) {
        return "Hello";
    }
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
};
