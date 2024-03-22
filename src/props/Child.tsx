interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        I'm a child element. Color: {color}
        <button onClick={onClick}>Click me</button>
    </div>;
}

/**
 * Same functionality as above, but with some advantages:
 * 
 * This tells TS that the returned object is a react component and allows us to access react properties such as ChildTwo.displayName
 * It also allows us to access children on the object (if it's returned as <Child></Child>). To do this the interface MUST have 
 * `children?: React.ReactNode` defined
 */
export const ChildTwo: React.FC<ChildProps> = ({color, onClick}) => { // can also be React.FunctionComponent
    return <div>
        Child Two: {color}
        <button onClick={onClick}>Click me</button>
    </div>;
}
