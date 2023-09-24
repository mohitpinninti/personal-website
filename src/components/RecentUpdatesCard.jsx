const RecentUpdatesCard = () => {
  const list = [
    {
      date: "Aug 2023",
      items: [
        {
          event: "Concluded SWE Internship @ Qualcomm",
          desc: "",
          imageURL: "",
        },
        {
          event: "Started as Peer Leader for ECE 1100",
          desc: "",
          imageURL: "",
        },
      ],
    },
    {
      date: "May 2023",
      items: [
        {
          event: "Started SWE Internship @ Qualcomm",
          desc: "",
          imageURL: "",
        },
      ],
    },
    {
      date: "Jan 2023",
      items: [
        {
          event: "MIT Reality Hack",
          desc: "",
          imageURL: "",
        },
      ],
    },
    {
      date: "Nov 2022",
      items: [
        {
          event:
            "Headworn Display Exhibit at GVU Research Showcase (30th Anniversary)",
          desc: "",
          imageURL: "",
        },
      ],
    },
    {
      date: "Sept 2022",
      items: [
        {
          event:
            "Headworn Display Exhibit at International Symposium of Wearable Computing",
          desc: "",
          imageURL: "",
        },
      ],
    },
    {
      date: "Aug 2022",
      items: [
        {
          event:
            "Started as Research Assistant @ Contextual Computing Group",
          desc: "",
          imageURL: "",
        },
        {
          event:
            "Co-Founded a Mixed Reality Club - GTXR",
          desc: "",
          imageURL: "",
        },
      ],
    },
  ];

  return (
    <div className="recentUpdates">
      <h1>Recent Updates</h1>
      <ul>
        {
            list.map((listItem) => (
                <li key={listItem.date} className="recentUpdates-items">
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
