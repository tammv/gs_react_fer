import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
// import { Container, Row, ListGroup } from "reactstrap";

// class Menu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: [
//         {
//           id: 0,
//           name: "Cá Phile Sốt Chanh Dây",
//           image: "/assets/img/F000001.jpg",
//           category: "mains",
//           label: "Hot",
//           price: "6.99",
//           description:
//             "Cá phi lê sốt chanh là 1 món ăn chiên hấp dẫn, thơm ngon, đầy dinh dưỡng từ cá.",
//         },
//         {
//           id: 1,
//           name: "Cơm Chiên Hải Sản",
//           image: "/assets/img/F000002.jpg",
//           category: "appetizer",
//           label: "",
//           price: "2.52",
//           description:
//             "Trong thực đơn món chiên có món cơm chiên hải sản siêu hấp dẫn với hạt cơm tơi giòn hòa quyện vị ngọt của hải sản và các rau củ bùi bùi vô cùng bổ dưỡng.",
//         },
//         {
//           id: 2,
//           name: "Gỏi Củ Hủ Dừa Tôm Thịt",
//           image: "/assets/img/F000003.jpg",
//           category: "appetizer",
//           label: "New",
//           price: "3.99",
//           description:
//             "Món gỏi củ hủ dừa tôm thịt là món ăn đặc sản của người miền Tây, thường được dùng làm món khai vị. Với vị chua ngọt đậm đà và độ giòn ngon của món gỏi này, chắc chắn sẽ khiến cả gia đình bạn gật gù khen ngon.",
//         },
//         {
//           id: 3,
//           name: "Sườn Nấu Pate Pháp",
//           image: "/assets/img/F000004.jpg",
//           category: "dessert",
//           label: "",
//           price: "9.99",
//           description:
//             "Pate vốn là món ăn có nguồn gốc từ nước Pháp. Pate kết hợp với sườn sẽ tạo nên món ăn đậm vị với nước dùng sóng sánh, thơm ngọt. Sườn thấm mềm quyện cùng pate thơm béo đặc biệt hấp dẫn.",
//         },
//       ],
//     };
//   }

//   render() {
//     const menu = this.state.dishes.map((dish) => {
//       return (
//         <div key={dish.id} className="col-12 mt-5">
//           {/* <Media tag="card">
//             <Media left middle>
//               <Media object src={dish.image} alt={dish.name} />
//             </Media>
//             <Media body className="ml-5">
//               <Media heading>{dish.name}</Media>
//               <p>{dish.description}</p>
//             </Media>
//           </Media> */}
//           <CardGroup>
//             <Card>
//               <div className="col-md-6">
//                 <CardImg
//                   src={dish.image}
//                   alt={dish.name}
//                   class="img-fluid"
//                 ></CardImg>
//               </div>
//               <div className="col-md-6">
//                 <CardBody>
//                   <CardTitle>{dish.name}</CardTitle>
//                   <CardText>{dish.description}</CardText>
//                 </CardBody>
//               </div>
//             </Card>
//           </CardGroup>
//         </div>
//       );
//     });

//     // return (
//     //   <div className="container">
//     //     <div className="row">
//     //       <Media list>{menu}</Media>
//     //     </div>
//     //   </div>
//     // );

//     return (
//       <Container>
//         <Row>
//           <ListGroup>{menu}</ListGroup>
//         </Row>
//       </Container>
//     );
//   }
// }

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
      </CardBody>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-3" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
