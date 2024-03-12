// import React from "react";
import {GroupCard} from "../GroupCard/GroupCard.tsx";

interface Props {
    groups: Group[]
}

export function Results({groups}: Props ) : React.JSX.Element {

    return (
        <div>
        {/*{groups !== undefined && groups.result === 1 && groups.data.map((group: Group) => (*/}
        {/*    <div key={group.id}>*/}
        {/*        <GroupCard {...group}/>*/}
        {/*    </div>*/}
        {/*))}*/}
        {/*    {groups.data !== undefined && groups.data.length === 0 || groups.result === 0 ? <div>Нет подходящих вариантов</div> : null*/}
        {/*}*/}
        </div>
    )
}
