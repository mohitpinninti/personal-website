import { useEffect, useState } from "react";

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

    return <div>{JSON.stringify(data)}</div>;
};

export default QuoteWallPage;
