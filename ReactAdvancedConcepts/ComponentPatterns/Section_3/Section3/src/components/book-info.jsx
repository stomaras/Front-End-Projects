export const BookInfo = ({book}) => {
    const {name, price, title, pages} = book || {};

    return book ? (
        <>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>Title: {title}</p>
            <p>Number of Pages: {pages}</p>
        </>
    ):(
        <h1>Loading</h1>
    );
};