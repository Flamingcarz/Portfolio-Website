import Button from "../../components/button";
import Heading from "@/components/heading";

export default function Home() {
    return (
    <main>
        <Heading heading='About Page' number='9'/>
        <p>
        This is a boilerplate for Next.js 13 with Tailwind CSS 2.2, PostCSS 8,
        and CSS Modules.
        </p>
        <p>New line for practice</p>
        <h6>This is a random heading</h6>
        <Button text="about me" />
    </main>
    );
}