export default function SocialLink({href, text}) {
    return (
        <a
        className="social-link"
        href={href}
        target="_blank"
        >
            {text}
        </a>
    );
}