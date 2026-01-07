import React, { type ReactNode } from 'react'
import CourseGoal from './CourseGoal'
import { type CourseGoal as CGoal } from '../App';
import InfoBox from './InfoBox';

interface CourseGoalListProps {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {

    // --------------- Showing the hint based on the Goal Count Condition -----------
    if (goals.length === 0) {
        return (
            <InfoBox mode='hint'>
                You have no course goal yet. Start adding some!
            </InfoBox>
        )
    }

    // --------------- Showing the warning, if goal count is more than 0 -----------------
    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode='warning'>
                Your are collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                            <p> {goal.description} </p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CourseGoalList