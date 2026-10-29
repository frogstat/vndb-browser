const BRACKET_REGEX = /\[\/?url(?:=[^\]]*)?]/g

function Description({description}: { description: string }) {
    const parts = description.split(/\[url=([^\]]+)\](.*?)\[\/url\]/g);


    return (
        <p>
            {parts.map((part:string, index:number) => {
                // Odd indices contain URLs; the following index contains link text.
                if (index % 3 === 1) {
                    const link = part.startsWith("/c") ? `https://vndb.org${part}` : part;
                    return (
                        <a key={index} href={link}>
                            {parts[index + 1]}
                        </a>
                    );
                }
                if (index % 3 === 2) return null;

                return part;
            })}
        </p>
    );
}

export default Description;