import { Child, ChildTwo } from "./Child";

const Parent = () => {
    return <ChildTwo color="red" onClick={() => console.log('clicked button')}>
            asd
        </ChildTwo>
}

export default Parent;