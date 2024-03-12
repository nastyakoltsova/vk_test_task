import React from "react";
import {GroupCard} from "../GroupCard/GroupCard.tsx";

interface Props {
    groups: Group[]
}

export function Results({groups}: Props ) : React.JSX.Element {
    console.log(groups)

    return (
        <div>
        {groups !== undefined && groups.map((group: Group) => (
            <div key={group.id}>
                <GroupCard {...group}/>
            </div>
        ))}
            {groups.length === 0 ? <div>Нет подходящих вариантов</div> : null
        }
        </div>
    )
}
