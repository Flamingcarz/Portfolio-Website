import Display from "./display";

export default function Heading({heading, number}) {
    return (
        <h1>
            {heading} 
            <Display number={number} />
        </h1>
    );
}
