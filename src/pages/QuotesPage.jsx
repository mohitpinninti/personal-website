import { useEffect, useState } from "react";
import Quote from "../components/Quote";

const QuoteWallPage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const quotesDb = import.meta.env.VITE_NOTION_QUOTES_DB;
                const response = await fetch("/api/notion-query", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        database_id: quotesDb,
                    }),
                });
                // Create this page with API response contents to use for testing
                // const response = await fetch("/src/pages/notionquotes.json");

                if (!response.ok) {
                    throw new Error("Invalid network response");
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                An error occurred! See the below:
                {error.message}
            </div>
        );
    }

    // Can be used to print API Response
    // console.log(JSON.stringify(data));

    return <div>{
        data.results.map((dbEntry) => {
            const displayStatus = dbEntry.properties["Display Status"].select != null ? dbEntry.properties["Display Status"].select.name : null;
            if (displayStatus !== "Website") return null;

            const author = dbEntry.properties.Author.rich_text.length != 0 ? dbEntry.properties.Author.rich_text[0].text.content : null;
            const quote = dbEntry.properties.Quote.rich_text.length != 0 ? dbEntry.properties.Quote.rich_text[0].text.content : null;
            return <Quote author={author} quote={quote} key={quote} />
        })
    }</div>;
};

export default QuoteWallPage;
