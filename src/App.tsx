import './App.css'
import {Results} from "./components/Results/Results.tsx";
import {Filters} from "./components/Filters/Filters.tsx";
import {useState} from "react";
import {mockGroups} from "./mockGroups.ts";

function App() {
    const [groups, setGroups] = useState<Group[]>(mockGroups)

    return (
        <>
            <Filters setGroups={setGroups}/>
            <Results groups={groups}/>
        </>
    )
}

export default App
