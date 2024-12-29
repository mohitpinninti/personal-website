import { useEffect, useState } from "react";

const QuoteWallPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.notion.com/v1/databases/${import.meta.env.VITE_NOTION_QUOTES_DB}/query`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28', 
            },
          }
        );

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

  return <div>data</div>;
};

export default QuoteWallPage;
