export default function PageButton({title, text, href}) {
    return (
        <a href={href}>
            <button className="page-button" title={title}>
                {text}
            </button>
        </a>
    );
}