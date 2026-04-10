import Quote from "../components/Quote";
import useFirestoreCollection from "../hooks/useFirestoreCollection";

const QuoteWallPage = () => {
    const { data: quotes, loading, error } = useFirestoreCollection("quotes", "order");

    if (loading) {
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

    return <div>{
        quotes.map((q) => (
            <Quote author={q.author} quote={q.quote} key={q.id} />
        ))
    }</div>;
};

export default QuoteWallPage;
