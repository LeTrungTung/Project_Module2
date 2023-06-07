import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import PendingIcon from "@mui/icons-material/Pending";

import "./CardImage.css";
import { DisabledByDefault } from "@mui/icons-material";

export default function MasonryImageList(props) {
  const { dataImage } = props;
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Container>
      <Box sx={{ width: 1200, height: 450 }}>
        <ImageList variant="masonry" cols={5} gap={10}>
          {dataImage.map((item) => (
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
              }}
            >
              <img
                src={`${item.urlImage}?w=248&fit=crop&auto=format`}
                srcSet={`${item.urlImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                id={item.id}
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
