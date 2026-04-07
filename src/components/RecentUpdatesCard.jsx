import useFirestoreCollection from "../hooks/useFirestoreCollection";

const RecentUpdatesCard = () => {
  const { data: list, loading, error } = useFirestoreCollection("recentUpdates", "order");

  if (loading) {
    return (
      <div className="recentUpdates">
        <h1>Recent Updates</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="recentUpdates">
        <h1>Recent Updates</h1>
        <p>Error loading updates. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <div className="recentUpdates">
      <h1>Recent Updates</h1>
      <ul>
        {
            list.map((listItem) => (
                <li key={listItem.id} className="recentUpdates-items">
                    <ul>
                        <li className="recentUpdates-items-date">{listItem.date}</li>
                        {
                            listItem.items.map((subItem) => (
                                <li key={subItem.event} className="recentUpdates-items-event">{subItem.event}</li>
                            ))
                        }
                    </ul>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default RecentUpdatesCard;
