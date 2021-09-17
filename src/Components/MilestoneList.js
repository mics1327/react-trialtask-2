import React from 'react'

function MilestoneList() {
    const Milestone = ['Milestone 1', 'Milestone 2', 'Milestone 3'];
    return (
        <div>
            {
                Milestone.map(milestone => <ul><li>{milestone}</li></ul>)
            }
        </div>
    )
}

export default MilestoneList
