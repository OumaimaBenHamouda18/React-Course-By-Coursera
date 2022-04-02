import {Link, useParams} from 'react-router-dom'; 
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';  


function RenderComments({comments}) {
  const commentsArray=comments.map((comment)=>{
    return(
      <div className='mt-4'>
        <h6>{comment.author}</h6>
        <p>{comment.comment}</p>
        <p>{comment.date}</p>
      </div>
        
     );
  })
  return(
    <div>
      {commentsArray}
    </div>
    
  );
 
 
}

function RenderDish({dish}) {
 return(
  <div>
    <CardTitle>{dish.name}</CardTitle>
    <CardText>{dish.description}</CardText>
    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
  </div>
 );

}




    const DishDetail=(props)=>{
      const {dishId}= useParams();
      return (
        <div className='container'>
          <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Dish Details</BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>Dish Details</h3>
                            <hr/>
                        </div>
          </div>
          <div className='row  m-3'>
              <div className='col-md-6 mr-3'>
                <h2>Dish</h2>
                <RenderDish dish={props.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} />
              </div>
              <div className='col-md-5'>
                <h2>Comments</h2>
                <RenderComments comments={props.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
              </div>


            </div>
        </div>
        
      
      );
                 
    }

  


export default DishDetail;





