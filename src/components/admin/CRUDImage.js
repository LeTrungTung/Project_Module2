import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PendingIcon from "@mui/icons-material/Pending";
import { useHistory, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CRUDImage.css";

function CRUDImage() {
  const dataImage = useSelector((state) => state.infoimage);
  console.log("dữ liệu ảnh", dataImage);

  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleViewImage = (id) => {
    navigate(`/cruddetail/${id}`);
  };

  return (
    // bootstrap
    // <Row xs={2} md={4} className="g-4">
    //   {imageList.map((image) => (
    //     <Col key={image.id}>
    //       <Card>
    //         <Card.Img variant="top" src={image.urlImage} />
    //         <Card.Body>
    //           <Card.Title>{image.title}</Card.Title>
    //           <Card.Text>Author: {image.author}</Card.Text>
    //           <Card.Text>Description: {image.description}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    <Container id="wrap-cards">
      <Box sx={{ width: 1200, height: 450 }}>
        <ImageList variant="masonry" cols={5} gap={10}>
          {dataImage &&
            dataImage?.map((item) => (
              <ImageListItem
                key={item.id}
                className="cl-image"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  filter:
                    hoveredItem === item.id
                      ? "brightness(80%)"
                      : "none",
                  transition: "filter 0.3s ease",
                  cursor: "zoom-in",
                }}
              >
                <img
                  src={`${item.urlImage}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.urlImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  id={item.id}
                  onClick={() => handleViewImage(item.id)}
                />
                {hoveredItem === item.id && (
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "white" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <PendingIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    }
                  />
                )}
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Container>
  );
}

export default CRUDImage;
