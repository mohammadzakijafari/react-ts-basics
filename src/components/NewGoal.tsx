import React, { useRef, type FormEvent } from 'react'

// --------------- Interface for Adding Goal Function ------------ 
interface NewGoalProps {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    // ------------- Accessing HTML Form Values using useRef ---------------
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='goal'> New Goal </label>
            <input
                type='text'
                id='goal'
                className='border border-gray-300 px-2 py-1 rounded w-full'
                placeholder='Enter Your Goal'
                ref={goal} />

            <label htmlFor='summary'> Summary </label>
            <input
                type='text'
                id='summary'
                className='border border-gray-300 px-2 py-1 rounded w-full'
                placeholder='Enter Goal Summary'
                ref={summary} />

            <button className='bg-green-600 px-4 py-2 rounded text-white'> Add Goal </button>
        </form>
    )
}

export default NewGoal