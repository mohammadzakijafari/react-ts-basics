import React, { type PropsWithChildren, type ReactNode } from 'react'

interface CourseGoalProps {
    title: string;
    children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children }: CourseGoalProps) => {
    return (
        <article>
            <div className=''>
                <h2> {title} </h2>
                <p> {children} </p>

            </div>
            <button> Delete </button>
        </article>
    )
}

export default CourseGoal