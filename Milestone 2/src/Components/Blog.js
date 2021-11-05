
const Blog = (props) => {
    return ( 
        <>
            <div className={`blog ${props.id}`} key={props.id}>
            <h3 style= {{
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>{props.title} (IMDb Rating: {props.rating})</h3>
                
            <p>{props.content}</p>
          </div>
        </>     
    );
}
 
export default Blog;