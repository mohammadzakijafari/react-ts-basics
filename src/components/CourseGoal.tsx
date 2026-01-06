import React, { type PropsWithChildren, type ReactNode } from 'react'

interface CourseGoalProps {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ id, title, children, onDelete }: CourseGoalProps) => {
    return (
        <article>
            <div className=''>
                <h2> {title} </h2>
                <p> {children} </p>

            </div>
            <button onClick={() => onDelete(id)}> Delete </button>
        </article>
    )
}

export default CourseGoal