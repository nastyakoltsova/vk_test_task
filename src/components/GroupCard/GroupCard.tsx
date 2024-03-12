import React from "react";

import "./style.css";

export function GroupCard(group : Group) : React.JSX.Element {

    return (
        <>
            <div className={'group-container'}>
                <div className={'avatar'} style={{backgroundColor : group.avatar_color}}></div>
                <div className='group-info'>
                    <div className='group-name'>{group.name}</div>
                    {group.closed ? <div>Закрытая группа</div> : <div>Открытая группа</div>}
                    <div>{group.members_count} участников</div>
                    {group.friends ? <div>{group.friends?.length} друзей</div> : null}
                </div>
            </div>
        </>
    )
}
