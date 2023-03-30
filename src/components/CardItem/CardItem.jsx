import { Badge, Card, Image, Rate, Typography } from "antd";
import React from "react";

const CardItem = ({ product, onClick, isSelected }) => {
  return (
    <Badge.Ribbon
      className="itemCardBadge"
      key={product.id}
      text={`Discount ${product.discountPercentage.toFixed(0)}%`}
    >
      <Card
        className={`itemCard${isSelected ? " selected" : ""}`}
        onClick={onClick}
        title={product.title}
        actions={[<Rate value={product.rating} disabled allowHalf />]}
        cover={
          <Image
            preview={false}
            className="itemCardImage"
            src={product.thumbnail}
          />
        }
      >
        <Card.Meta
          title={
            <Typography.Paragraph>
              Price: ${product.price}
              <Typography.Text className="discountPrice">
                $
                {parseFloat(
                  product.price +
                    (product.price * product.discountPercentage) / 100
                ).toFixed(0)}
              </Typography.Text>
            </Typography.Paragraph>
          }
          description={
            <Typography.Paragraph
              ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
            >
              {product.description}
            </Typography.Paragraph>
          }
        />
      </Card>
    </Badge.Ribbon>
  );
};

export default CardItem;
