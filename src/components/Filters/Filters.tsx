import React, {useEffect, useState} from "react";

import "./style.css";
import {mockGroups} from "../../mockGroups.ts";

interface Filters {
    privacy: string,
    avatar: string,
    friends: string
}

interface FiltersProps {
    setGroups: (groups: Group[]) => void;
}

export function Filters({ setGroups }: FiltersProps): React.JSX.Element {
    const [filters, setFilters] = useState<Filters>({
        privacy: 'all',
        avatar: 'all',
        friends: 'all'
    })

    useEffect(() => {
        try {
            let res = mockGroups.filter((group) => {
                let passPrivacy = true;
                let passAvatar = true;
                let passFriends = true;

                if (filters.privacy !== 'all' && (group.closed && filters.privacy === 'opened' || !group.closed && filters.privacy === 'closed')) {
                    passPrivacy = false;
                }
                if (filters.avatar !== 'all' && group.avatar_color !== filters.avatar) {
                    passAvatar = false;
                }
                if (filters.friends === 'yes' && (!group.friends || group.friends.length === 0)) {
                    passFriends = false;
                }
                if (filters.friends === 'no' && group.friends && group.friends.length > 0) {
                    passFriends = false;
                }

                return passPrivacy && passAvatar && passFriends;
            });

            setGroups({ result: 1, data: res });
        } catch (err) {
            console.log(err)
        }
    }, [filters, setGroups])

    const getGroupsResponse = (event) => {
        event.preventDefault()
        setFilters(() => ({
            privacy: event.target.privacy.value,
            avatar: event.target.avatar.value,
            friends: event.target.friends.value
        }))
    }

    return (
        <>
            <form onSubmit={getGroupsResponse}>
                <div className='filters'>
                    <div>
                        <p>Приватность</p>
                        <select name="privacy" required>
                            <option selected value="all">Все</option>
                            <option value="opened">Только открытые</option>
                            <option value="closed">Только закрытые</option>
                        </select>
                    </div>
                    <div>
                        <p>Цвет аватарки</p>
                        <select name="avatar" required>
                            <option selected value="all">Все</option>
                            <option value="red">Красный</option>
                            <option value="blue">Синий</option>
                            <option value="green">Зеленый</option>
                            <option value="yellow">Желтый</option>
                        </select>
                    </div>
                    <div>
                        <p>Друзья в группе</p>
                        <select name="friends" required>
                            <option selected value="all">Все</option>
                            <option value="yes">Есть</option>
                            <option value="no">Нет</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Показать результаты"/>
            </form>
        </>
    )
}
