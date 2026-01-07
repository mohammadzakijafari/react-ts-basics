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
        <form onSubmit={handleSubmit} className='pt-10'>
            <label htmlFor='goal' className='font-bold text-lg'> New Goal </label>
            <input
                type='text'
                id='goal'
                className='border border-gray-400 px-2 py-1 rounded w-full'
                placeholder='Enter Your Goal'
                ref={goal} />

            <label htmlFor='summary' className='font-bold text-lg'> Summary </label>
            <input
                type='text'
                id='summary'
                className='border border-gray-400 px-2 py-1 rounded w-full'
                placeholder='Enter Goal Summary'
                ref={summary} />

            <div className='flex flex-col items-center p-5'>
                <button className='bg-green-600 px-4 py-2 rounded text-white'> Add Goal </button>
            </div>
        </form>
    )
}

export default NewGoal