export async function handler(request, response) {
    try {
      const databaseId = process.env.VITE_NOTION_DATABASE_ID;
      const token = process.env.VITE_NOTION_API_TOKEN;
  
      const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Notion-Version': '2022-06-28', // Specify the Notion API version you're using
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
  
      if (!res.ok) {
        throw new Error(`Error fetching Notion data: ${res.statusText}`);
      }
  
      const data = await res.json();
      response.status(200).json(data);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  